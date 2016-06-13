var test    = require('tape'),
    timeout = require('..')

test('with error message provided', function (t) {
  t.plan(3)

  function doSomethingFast (cb) { setTimeout(cb, 50) }
  function doSomethingSlow (cb) { setTimeout(cb, 500) }

  doSomethingFast(timeout(function doSomethingFastHandler (err) {
    if (err)
      t.fail('doSomethingFastHandler got an error')
    else
      t.pass('doSomethingFastHandler did not get an error')
  }, 1000, 'fast function timed out'))

  doSomethingSlow(timeout(function doSomethingSlowHandler (err) {
    if (err) {
      t.pass('doSomethingSlowHandler got error')
      t.ok(err.message.indexOf('slow function timed out') > -1,
        'callback err had custom error message')
    }
    else {
      t.fail('doSomethingSlowHandler did not get an error')
    }
  }, 250, 'slow function timed out'))
})

