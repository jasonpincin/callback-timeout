var defineError = require('define-error')

module.exports.TimeoutError = defineError('TimeoutError', TimeoutError)

function TimeoutError () {
  this.code = 'ETIMEDOUT'
}
