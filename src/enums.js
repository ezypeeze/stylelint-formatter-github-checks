const annotationLevel = {
  NOTICE: 'notice',
  WARNING: 'warning',
  FAILURE: 'failure'
}

const checkConclusion = {
  ACTION_REQUIRED: 'action_required',
  CANCELLED: 'cancelled',
  FAILURE: 'failure',
  NEUTRAL: 'neutral',
  SUCCESS: 'success',
  SKIPPED: 'skipped',
  STALE: 'stale',
  TIMED_OUT: 'timed_out'
}

const checkStatus = {
  QUEUED: 'queued',
  IN_PROGRESS: 'in_progress',
  COMPLETED: 'completed'
}

const messageSeverity = {
  WARNING: 'warning',
  ERROR: 'error'
}

module.exports = {
  annotationLevel,
  checkConclusion,
  checkStatus,
  messageSeverity
}
