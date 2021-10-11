"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _indexUserRoute = _interopRequireDefault(require("./routes/user/indexUserRoute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import
//Router
var apiRouter = _express.default.Router(); //User routes


apiRouter.route('/user/list/').get(_indexUserRoute.default.listUser);
apiRouter.route('/user/get/').post(_indexUserRoute.default.getUser);
apiRouter.route('/user/post/').post(_indexUserRoute.default.addUser);
apiRouter.route('/user/put/').put(_indexUserRoute.default.updateUser);
apiRouter.route('/user/delete/').delete(_indexUserRoute.default.deleteUser);
var _default = apiRouter;
exports.default = _default;