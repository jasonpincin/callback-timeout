module.exports = function (f, t) {
    if (!t)
        return f
    var err = new Error('timeout of '+t+'ms exceeded for callback ' + (f.name||'anonymous'))
    err.name = 'Timeout'
    var ecb = function () {
        clearTimeout(timer)
        timer = null
        f.call(f, new Error(err))
    }
    var timer = setTimeout(ecb, t)
    var cb = function () {
        if (timer) {
            clearTimeout(timer)
            f.apply(f, arguments)
        }
    }
    return cb
}
