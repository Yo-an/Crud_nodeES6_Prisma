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

// password compris entre 4 et 8 caractére et inclure 1 chiffre
var PASSWORD_REGEX = /^(?=.*\d).{4,8}$/; // email valide

var EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var _default = {
  addUser: function addUser(req, res, data) {
    if (data.username == null || data.password == null || data.email == null) {
      console.log({
        'error': 'Paramètre manquant'
      });
      return res.status(400).json({
        'error': 'Paramètre manquant'
      });
    }

    if (!EMAIL_REGEX.test(data.email)) {
      console.log({
        'error': 'Cette email est invalide'
      });
      return res.status(400).json({
        'error': 'Cette email est invalide'
      });
    }

    if (!PASSWORD_REGEX.test(data.password)) {
      console.log({
        'error': 'Le mot de passe est incorrect il doit être compris entre 4 et 8 caractères et inclure 1 chiffre'
      });
      return res.status(400).json({
        'error': 'Le mot de passe est incorrect il doit être entre 4 et 8 caractère et inclure 1 chiffre'
      });
    }

    function main() {
      return _main.apply(this, arguments);
    }

    function _main() {
      _main = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _modelUser["default"].getOne(data.email).then(function (userFound) {
                  if (!userFound) {
                    _modelUser["default"].create(data).then(function (newUser) {
                      console.log(newUser);
                      res.status(201).json(newUser);
                    })["catch"](function (err) {
                      console.log({
                        'error': 'Imposible de sauvegarder cet utilisateur'
                      });
                      res.status(500).json({
                        'error': 'Imposible de sauvegarder cet utilisateur'
                      });
                    });
                  } else {
                    console.log({
                      'error': 'Cet utilasateur exist déja'
                    });
                    res.status(409).json({
                      'error': 'Cet utilisateur exist déja'
                    });
                  }
                })["catch"](function (err) {
                  console.log({
                    'error': 'Imposible de vérifier cet utilisateur'
                  });
                  res.status(500).json({
                    'error': 'Imposible de vérifier cet utilisateur'
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