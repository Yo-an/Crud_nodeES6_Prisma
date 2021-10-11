"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _modelUser = _interopRequireDefault(require("../modelUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  deleteUser: (req, res) => {
    /* 	#swagger.tags = ['User']
        #swagger.description = 'Endpoint to delete in a specific user' */
    //params
    const id = req.body.id;

    async function main() {
      _modelUser.default.delete(id).then(userDelete => {
        console.log({
          'bien effacer ': userDelete
        });
        res.status(201).json({
          'bien effacer ': userDelete
        });
      }).catch(err => {
        console.log({
          'error': 'Cette utilisateur ne peu pas être effacé'
        });
        res.status(500).json({
          'error': 'Cette utilisateur ne peu pas être effacé'
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