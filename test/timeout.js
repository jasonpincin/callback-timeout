var test         = require('tape'),
    timeout      = require('..'),
    TimeoutError = require('../errors').TimeoutError

test('with timeouts given', function (t) {
    t.plan(5)

    function doSomethingFast (cb) { setTimeout(cb, 100) }
    function doSomethingSlow (cb) { setTimeout(cb, 2000) }

    doSomethingFast(timeout(function doSomethingFastHandler (err) {
        if (err)
            t.fail('doSomethingFastHandler got an error')
        else
            t.pass('doSomethingFastHandler did not get an error')
    }, 1000))

    doSomethingSlow(timeout(function doSomethingSlowHandler (err) {
        if (err)
            t.pass('doSomethingSlowHandler got error')
        else
            t.fail('doSomethingSlowHandler did not get an error')
    }, 1000))

    doSomethingSlow(timeout(function (err) {
        t.ok(err.message.indexOf('anonymous') > -1, 'callback err has proper message for anonymous functions')
        t.ok(err instanceof TimeoutError, 'error is a TimeoutError')
        t.equals(err.name, 'TimeoutError', 'error.name is TimeoutError')
    }, 250))
})

