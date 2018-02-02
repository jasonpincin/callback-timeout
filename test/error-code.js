var test    = require('tape')
var timeout = require('..')

test('errors have code of ETIMEDOUT', function _ (t) {
  t.plan(1)

  function doSomethingSlow (cb) { setTimeout(cb, 500) }

  doSomethingSlow(timeout(done, 10))

  function done (err) {
    t.equal(err.code, 'ETIMEDOUT')
  }
})

