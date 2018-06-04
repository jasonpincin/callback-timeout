var errors = require('./errors')

module.exports = function callbackTimeout (f, t, e) {
  if (!t) return f
  var timer = setTimeout(onTimeout, t)
  return callback

  function onTimeout () {
    timer = null
    if (e === false)
      return f.call(f, null)
    var msg = e || 'timeout of ' +
      t + 'ms exceeded for callback ' +
      (f.name || 'anonymous')
    f.call(f, new errors.TimeoutError(msg))
  }

  function callback () {
    if (timer) {
      clearTimeout(timer)
      f.apply(f, arguments)
    }
  }
}
