'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _sprintf = require('./sprintf');

exports.default = {
  name: 'dollar',
  type: 'postProcessor',

  process: function process(value, key, options) {
    if (!options.sprintf) return value;

    if (Object.prototype.toString.apply(options.sprintf) === '[object Array]') {
      return (0, _sprintf.vsprintf)(value, options.sprintf);
    } else if (_typeof(options.sprintf) === 'object') {
      return (0, _sprintf.sprintf)(value, options.sprintf);
    }

    return value;
  },
  overloadTranslationOptionHandler: function overloadTranslationOptionHandler(args) {
    var values = [];

    for (var i = 1; i < args.length; i++) {
      values.push(args[i]);
    }

    return {
      postProcess: 'dollar',
      sprintf: values
    };
  }
};