var inherits          = require('util').inherits,
    captureStackTrace = require('capture-stack-trace')

module.exports.TimeoutError = TimeoutError
function TimeoutError (message) {
    captureStackTrace(this, TimeoutError)
    this.name = this.constructor.name
    this.message = message
}
inherits(TimeoutError, Error)
