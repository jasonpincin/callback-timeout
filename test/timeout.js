var test    = require('tape'),
    timeout = require('..')

test(function (t) {
    t.plan(2)

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
})

