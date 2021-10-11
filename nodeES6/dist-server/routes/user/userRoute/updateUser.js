"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _modelUser = _interopRequireDefault(require("../modelUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  updateUser: (req, res) => {
    /* 	#swagger.tags = ['User']
        #swagger.description = 'Endpoint to update in a specific user' */
    //params
    const id = req.body.id;
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const data = {
      username: username,
      email: email,
      password: password
    };
    let tempData = {};

    for (let index in data) {
      if (data[index] != null) {
        tempData[index] = data[index];
      }
    }

    async function main() {
      _modelUser.default.update(id, tempData).then(updateUser => {
        console.log(updateUser);
        res.status(201).json(updateUser);
      }).catch(err => {
        console.log({
          'error': 'Impossible de modifier cette utilisateur'
        });
        res.status(500).json({
          'error': 'Impossible de modifier cette utilisateur'
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