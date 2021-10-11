"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _modelUser = _interopRequireDefault(require("../modelUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  listUser: (req, res) => {
    /* 	#swagger.tags = ['User']
        #swagger.description = 'Endpoint to list in user' */
    async function main() {
      _modelUser.default.getAll().then(allUsers => {
        console.log(allUsers);
        return res.status(201).json(allUsers);
      }).catch(err => {
        console.log({
          'error': 'Ne peux pas lister les utilisateurs'
        });
        return res.status(500).json({
          'error': 'Ne peux pas lister les utilisateurs'
        });
      });
    }

    main().catch(e => {
      throw e;
    }).finally(async () => {
      _modelUser.default.closePrisma;
    });
  }
};
exports.default = _default;