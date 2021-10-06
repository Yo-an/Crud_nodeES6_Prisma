"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _client = require("@prisma/client");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var prisma = new _client.PrismaClient();
var _default = {
  getUserProfile: function getUserProfile(req, res) {
    function main() {
      return _main.apply(this, arguments);
    }

    function _main() {
      _main = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var allUsers;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return prisma.users.findMany();

              case 2:
                allUsers = _context2.sent;
                console.log(allUsers);
                res.status(201).json(allUsers);

              case 5:
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
              _context.next = 2;
              return prisma.$disconnect();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
  },
  addUser: function addUser(req, res) {
    //Params
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;

    function main() {
      return _main2.apply(this, arguments);
    }

    function _main2() {
      _main2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var newUser;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return prisma.users.create({
                  data: {
                    username: username,
                    email: email,
                    password: password
                  }
                });

              case 2:
                newUser = _context4.sent;
                res.status(201).json(newUser);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));
      return _main2.apply(this, arguments);
    }

    main()["catch"](function (e) {
      throw e;
    })["finally"]( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return prisma.$disconnect();

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));
  }
};
exports["default"] = _default;