# callback-timeout changelog

## v4.0.0

* Added ability to pass `false` as 3rd argument to indicate callback should be
  invoked after timing out with no error.

## v3.0.0

* Name of error supplied to callback when a timeout occured changed from
  ETIMEOUT to ETIMEDOUT to be consistent with node
