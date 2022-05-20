export default [
  {
    source: 'path/to/file.css',
    errored: true,
    warnings: [
      {
        line: 3,
        column: 12,
        endLine: 4,
        endColumn: 15,
        rule: 'block-no-empty',
        severity: 'error',
        text: 'You should not have an empty block (block-no-empty)'
      }
    ],
    deprecations: [
      {
        text: 'Feature X has been deprecated and will be removed in the next major version.',
        reference: 'https://stylelint.io/docs/feature-x.md'
      }
    ],
    ignored: false
  },
  {
    source: 'path/to/file2.css',
    errored: true,
    warnings: [
      {
        line: 5,
        column: 3,
        endLine: 6,
        endColumn: 5,
        rule: 'breaking-change',
        severity: 'error',
        text: 'You should not do breaking changes (breaking-change)'
      }
    ],
    deprecations: [
      {
        text: 'Feature X has been deprecated and will be removed in the next major version.',
        reference: 'https://stylelint.io/docs/feature-x.md'
      }
    ],
    ignored: false
  },
  {
    source: 'path/to/file3.css',
    errored: false,
    warnings: [
      {
        line: 15,
        column: 17,
        endLine: 16,
        endColumn: 20,
        rule: 'nothing-special',
        severity: 'error',
        text: 'Nothing special, you may go on (nothing-special)'
      }
    ],
    deprecations: [
      {
        text: 'Feature X has been deprecated and will be removed in the next major version.',
        reference: 'https://stylelint.io/docs/feature-x.md'
      }
    ],
    ignored: false
  },
  {
    source: 'path/to/ignored.css',
    errored: false,
    warnings: [
      {
        line: 3,
        column: 12,
        endLine: 4,
        endColumn: 15,
        rule: 'block-no-empty',
        severity: 'warning',
        text: 'You should not have an empty block (block-no-empty)'
      }
    ],
    deprecations: [
      {
        text: 'Feature X has been deprecated and will be removed in the next major version.',
        reference: 'https://stylelint.io/docs/feature-x.md'
      }
    ],
    ignored: true
  }
]
