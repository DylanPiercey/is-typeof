'use strict'

var toString = Object.prototype.toString
var buffer = global.Buffer || noop
var typeClass = {
  string: '[object String]',
  number: '[object Number]',
  boolean: '[object Boolean]',
  date: '[object Date]',
  regexp: '[object RegExp]',
  error: '[object Error]',
  function: '[object Function]',
  arguments: '[object Arguments]',
  object: '[object Object]',
  array: '[object Array]'
}

module.exports = {
  string: isType('String'),
  number: isType('Number'),
  boolean: isType('Boolean'),
  date: isType('Date'),
  regexp: isType('RegExp'),
  error: isType('Error'),
  function: isType('Function'),
  arguments: isType('Arguments'),
  object: isType('Object'),
  array: isType('Array'),
  stream: function isStream (val) {
    return val != null && typeof val.pipe === 'function'
  },
  buffer: function isBuffer (val) {
    return val instanceof buffer
  },
  empty: function isEmpty (val) {
    /* eslint-disable */
    for (var key in val) return false
    /* eslint-enable */
    return true
  }
}

/**
 * Does nothing.
 */
function noop () {}

/*
 * Creates a type checker function based on the given type.
 *
 * @param {String} type
 * @api private
 */
function isType (type) {
  var _typeof = type.toLowerCase()
  return Object.defineProperty(function (val) {
    return (
      (typeof val === _typeof && typeof val !== 'object') ||
      (typeof val === 'object' || typeof val === 'function') &&
      toString.call(val) === typeClass[_typeof]
    )
  }, 'name', { value: 'is' + type })
}
