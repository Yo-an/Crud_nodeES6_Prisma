"use strict";

var _swaggerAutogen = _interopRequireDefault(require("swagger-autogen"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const doc = {
  info: {
    title: 'My API',
    description: 'Description'
  },
  host: 'localhost:3000',
  schemes: ['http']
};
const outputFile = './swagger_output.json';
const endpointsFiles = ['./server/app.js'];
(0, _swaggerAutogen.default)()(outputFile, endpointsFiles, doc);