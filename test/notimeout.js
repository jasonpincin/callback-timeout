var test    = require('tape')
,   timeout = require('..')

test(function (t) {
    t.plan(3)
    
    function doSomethingSlow(cb) { setTimeout(cb, 1000) }
    
    doSomethingSlow(timeout(function doSomethingSlow (err) {
        if (err)
            t.fail('got an error on 0 timeout')
        else
            t.pass('got no error on 0 timeout')
    }, 0))

    doSomethingSlow(timeout(function doSomethingSlow (err) {
        if (err)
            t.fail('got an error on null timeout')
        else
            t.pass('got no error on null timeout')
    }, null))
    
    doSomethingSlow(timeout(function doSomethingSlow (err) {
        if (err)
            t.fail('got an error on undefined timeout')
        else
            t.pass('got no error on undefined timeout')
    }, undefined))
})

