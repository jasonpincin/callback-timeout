var inherits = require('util').inherits

module.exports.TimeoutError = TimeoutError
function TimeoutError (message) {
    Error.captureStackTrace(this, TimeoutError)
    this.name = 'TimeoutError'
    this.message = message
}
inherits(TimeoutError, Error)
