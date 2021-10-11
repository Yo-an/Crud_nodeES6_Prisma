"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _addUser2 = _interopRequireDefault(require("./userRoute/addUser"));

var _deleteUser2 = _interopRequireDefault(require("./userRoute/deleteUser"));

var _updateUser2 = _interopRequireDefault(require("./userRoute/updateUser"));

var _getUser2 = _interopRequireDefault(require("./userRoute/getUser"));

var _listUser2 = _interopRequireDefault(require("./userRoute/listUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  addUser: function addUser(req, res) {
    /* 	#swagger.tags = ['User']
    #swagger.description = 'Ajouter un user !' */
    //Params
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;
    var data = {
      username: username,
      password: password,
      email: email
    };

    _addUser2["default"].addUser(req, res, data);
  },
  deleteUser: function deleteUser(req, res) {
    /* 	#swagger.tags = ['User']
    #swagger.description = 'Supprimer un user par son id !' */
    //params
    var id = req.body.id;

    _deleteUser2["default"].deleteUser(req, res, id);
  },
  updateUser: function updateUser(req, res) {
    /* 	#swagger.tags = ['User']
    #swagger.description = 'Mettre à jour un user par son id !' */
    //params
    var id = req.body.id;
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;
    var data = {
      username: username,
      email: email,
      password: password
    };

    _updateUser2["default"].updateUser(req, res, data, id);
  },
  getUser: function getUser(req, res) {
    /*#swagger.tags = ['User']
    #swagger.description = 'Selectionner un user par son email !'*/
    //Params
    var email = req.body.email;

    _getUser2["default"].getUser(req, res, email);
  },
  listUser: function listUser(req, res) {
    /* #swagger.tags = ['User']
    #swagger.description = 'Lister tout les users !' */
    _listUser2["default"].listUser(req, res);
  }
};
exports["default"] = _default;