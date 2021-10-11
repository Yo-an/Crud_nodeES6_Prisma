"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _addUser = _interopRequireDefault(require("./userRoute/addUser"));

var _deleteUser = _interopRequireDefault(require("./userRoute/deleteUser"));

var _updateUser = _interopRequireDefault(require("./userRoute/updateUser"));

var _getUser = _interopRequireDefault(require("./userRoute/getUser"));

var _listUser = _interopRequireDefault(require("./userRoute/listUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  addUser: (req, res) => _addUser.default.addUser(req, res),
  deleteUser: (req, res) => _deleteUser.default.deleteUser(req, res),
  updateUser: (req, res) => _updateUser.default.updateUser(req, res),
  getUser: (req, res) => _getUser.default.getUser(req, res),
  listUser: (req, res) => _listUser.default.listUser(req, res)
};
exports.default = _default;