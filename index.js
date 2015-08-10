var TimeoutError = require('./errors').TimeoutError

module.exports = function callbackTimeout (f, t, e) {
    if (!t) return f
    var timer = setTimeout(onTimeout, t)
    return callback

    function onTimeout () {
        clearTimeout(timer)
        timer = null
        f.call(f, new TimeoutError(e || 'timeout of ' + t + 'ms exceeded for callback ' + (f.name || 'anonymous')))
    }

    function callback () {
        if (timer) {
            clearTimeout(timer)
            f.apply(f, arguments)
        }
    }
}
