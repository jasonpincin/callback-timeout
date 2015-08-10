callback-timeout
================

[![NPM version](https://badge.fury.io/js/callback-timeout.png)](http://badge.fury.io/js/callback-timeout)
[![Build Status](https://travis-ci.org/jasonpincin/callback-timeout.svg?branch=master)](https://travis-ci.org/jasonpincin/callback-timeout)
[![Coverage Status](https://coveralls.io/repos/jasonpincin/callback-timeout/badge.png?branch=master)](https://coveralls.io/r/jasonpincin/callback-timeout?branch=master)

Executes callback with single error argument if timeout is exceeded before it's called naturally

## example

``` js
var timeout = require('callback-timeout')

function doSomethingFast(cb) { setTimeout(cb, 100) }
function doSomethingSlow(cb) { setTimeout(cb, 2000) }

doSomethingFast(timeout(function doSomethingFastHandler (err) {
    if (err)
        console.log(err.message) // Will not happen
    else
        console.log('doSomethingFastHandler executed without error.') // Will happen
}, 1000))

doSomethingSlow(timeout(function doSomethingSlowHandler (err) {
    if (err)
        console.log(err.message) // Will happen
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

Returns a callback function that will execute after `ms` milliseconds with a single `TimeoutError` argument if not invoked by other means first. If the `ms` timeout argument is omitted, 0, or null, then the timeout is disabled and the original callback is returned. `msg` may be used to set a custom error message (on timeout), otherwise an appropriate one will be set for you.

### TimeoutError

The constructor of the error thrown when a timeout occurs.

## install

With [npm](https://npmjs.org) do:

```
npm install callback-timeout
```

## testing

`npm test [--dot | --spec] [--grep=pattern]`

Specifying `--dot` or `--spec` will change the output from the default TAP style. 
Specifying `--grep` will only run the test files that match the given pattern.

### coverage

`npm run coverage [--html]`

This will output a textual coverage report. Including `--html` will also open 
an HTML coverage report in the default browser.
