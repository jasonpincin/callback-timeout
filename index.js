module.exports = function (f, t) {
    var err = new Error('timeout of '+t+'ms exceeded for callback ' + (f.name||'anonymous'))
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
