"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("regenerator-runtime/runtime.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.promise.finally.js");

var _modelUser = _interopRequireDefault(require("../modelUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  getUser: function getUser(req, res, email) {
    function main() {
      return _main.apply(this, arguments);
    }

    function _main() {
      _main = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _modelUser["default"].getOne(email).then(function (User) {
                  if (User != null) {
                    console.log(User);
                    res.status(201).json(User);
                  } else {
                    console.log({
                      'error': 'Imposible de trouver cet utilisateur !'
                    });
                    res.status(409).json({
                      'error': 'Imposible de trouver cet utilisateur !'
                    });
                  }
                })["catch"](function (err) {
                  console.log({
                    'error': 'Impossible de se connecter à la base de donnée !'
                  });
                  res.status(500).json({
                    'error': 'Impossible de se connecter à la base de donnée !'
                  });
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      return _main.apply(this, arguments);
    }

    main()["catch"](function (e) {
      throw e;
    })["finally"]( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _modelUser["default"].closePrisma;

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
  }
};
exports["default"] = _default;