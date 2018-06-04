callback-timeout
================

[![NPM version](https://badge.fury.io/js/callback-timeout.png)](http://badge.fury.io/js/callback-timeout)
[![Build Status](https://travis-ci.org/jasonpincin/callback-timeout.svg?branch=master)](https://travis-ci.org/jasonpincin/callback-timeout)
[![Coverage Status](https://coveralls.io/repos/jasonpincin/callback-timeout/badge.png?branch=master)](https://coveralls.io/r/jasonpincin/callback-timeout?branch=master)
[![Sauce Test Status](https://saucelabs.com/browser-matrix/jp-callback-timeout.svg)](https://saucelabs.com/u/jp-callback-timeout)

Executes callback with single error argument if timeout is exceeded before it's called naturally

## example

``` js
var timeout = require('callback-timeout')

function doSomethingFast(cb) { setTimeout(cb, 100) }
function doSomethingSlow(cb) { setTimeout(cb, 2000) }

doSomethingFast(timeout(function doSomethingFastHandler (err) {
  if (err)
    console.log(err.code, err.message) // Will not happen
  else
    console.log('doSomethingFastHandler executed without error.') // Will happen
}, 1000))

doSomethingSlow(timeout(function doSomethingSlowHandler (err) {
  if (err)
    console.log(err.code, err.message) // ETIMEDOUT ... 
  else
    console.log('doSomethingSlowHandler executed without error.') // Will not happen
}, 1000))
```


## usage

``` js
var timeout      = require('callback-timeout'),
    TimeoutError = require('callback-timeout/errors').TimeoutError
```

### timeout(callback [, ms, msg])

Returns a callback function that will execute after `ms` milliseconds with a single `TimeoutError` argument if not invoked by other means first. If the `ms` timeout argument is omitted, 0, or null, then the timeout is disabled and the original callback is returned. `msg` may be used to set a custom error message (on timeout), otherwise an appropriate one will be set for you. If `false` is set for the timeout message the callback is returned without an error (null, on timeout).

### TimeoutError

The constructor of the error supplied to the `callback` when a timeout occurs.
TimeoutError objects will have a `code` property with the value `ETIMEDOUT`.

## install

With [npm](https://npmjs.org) do:

```
npm install callback-timeout
```

## testing

`npm test`

### browser test

`npm run phantom`

or 

`npm run travis-browser-test`

This will run the tests in all browsers (specified in .zuul.yml). Be sure to [educate zuul](https://github.com/defunctzombie/zuul/wiki/cloud-testing#2-educate-zuul) first.

### coverage

For a textual coverage overview:

`npm run view-cover`

or for an HTML coverage report:

`npm run open-cover`
