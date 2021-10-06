"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _users = _interopRequireDefault(require("./routes/users"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//import
//Router
var apiRouter = _express["default"].Router(); //User routes


apiRouter.route('/user/me/').get(_users["default"].getUsers);
apiRouter.route('/user/post/').post(_users["default"].addUser);
apiRouter.route('/user/put/').put(_users["default"].putUser);
apiRouter.route('/user/delete/')["delete"](_users["default"].deleteUser);
var _default = apiRouter;
exports["default"] = _default;