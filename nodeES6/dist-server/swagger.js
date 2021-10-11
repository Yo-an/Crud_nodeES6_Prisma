"use strict";

var _swaggerAutogen = _interopRequireDefault(require("swagger-autogen"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var doc = {
  info: {
    title: 'My API',
    description: 'Description'
  },
  host: 'localhost:3000',
  schemes: ['http']
};
var outputFile = './swagger_output.json';
var endpointsFiles = ['./server/app.js'];
(0, _swaggerAutogen["default"])()(outputFile, endpointsFiles, doc);