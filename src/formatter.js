const {
  checkConclusion, checkStatus, annotationLevel, messageSeverity
} = require('./enums')

function summaryOfResults (results) {
  const summary = results.reduce(
    (seq, current) => ({
      errors: seq.errors + current.warnings
        .filter((warn) => warn.severity === messageSeverity.ERROR).length,
      warnings: seq.warnings + current.warnings
        .filter((warn) => warn.severity === messageSeverity.WARNING).length
    }),
    { errors: 0, warnings: 0 }
  )
  summary.problems = summary.errors + summary.warnings
  summary.filesChecked = results.length

  return summary
}

function annotationsForResults (results) {
  const files = results.filter((result) => result.warnings.length > 0)
  const annotations = []

  const [basePath] = __dirname.split('node_modules')

  files.forEach((file) => {
    file.warnings.forEach((message) => {
      annotations.push({
        path: file.source.substring(basePath.length),
        start_line: message.line,
        end_line: message.line,
        start_column: message.column,
        end_column: message.column,
        annotation_level:
          message.errored === messageSeverity.WARNING
            ? annotationLevel.WARNING
            : annotationLevel.FAILURE,
        message: message.text,
        title: message.rule
      })
    })
  })

  return annotations.slice(0, 50)
}

function formatter (results) {
  const nonIgnoredResults = results.filter((result) => !result.ignored)
  const summary = summaryOfResults(nonIgnoredResults)

  const check = {
    status: checkStatus.COMPLETED,
    completed_at: `${new Date().toISOString().split('.')[0]}Z`
  }

  // No results provided means we haven't checked any files
  if (summary.filesChecked === 0) {
    check.conclusion = checkConclusion.SKIPPED
    check.output = {
      title: 'Nothing to check',
      summary:
        'Stylelint received no files or rules to check. Adjust your Stylelint config to make sure it has files to check' +
        ' and rules to check them by'
    }
  } else if (summary.problems === 0) {
    check.conclusion = checkConclusion.SUCCESS
    check.output = {
      title: '0 problems detected',
      summary: `Checked ${results.length} files and didn't find any problems`
    }
  } else {
    check.conclusion = checkConclusion.FAILURE
    check.output = {
      title: `${summary.problems} problem(s) detected`,
      summary: `${summary.errors} errors and ${summary.warnings} warnings found. Potentially fixable with the \`--fix\` option.`
    }

    if (summary.problems > 50) {
      check.output.text = 'Annotated only the first 50 problems due to limitations in the Github API'
    }

    check.output.annotations = annotationsForResults(nonIgnoredResults)
  }

  return JSON.stringify(check)
}

module.exports = formatter
