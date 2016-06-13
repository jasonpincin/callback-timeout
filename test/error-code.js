var test    = require('tape'),
    timeout = require('..')

test('errors have code of ETIMEOUT', function (t) {
  t.plan(1)

  function doSomethingSlow (cb) { setTimeout(cb, 500) }

  doSomethingSlow(timeout(done, 10))

  function done (err) {
    t.equal(err.code, 'ETIMEOUT')
  }
})

