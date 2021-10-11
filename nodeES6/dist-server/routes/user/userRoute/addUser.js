"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _modelUser = _interopRequireDefault(require("../modelUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// password compris entre 4 et 8 caractére et inclure 1 chiffre
const PASSWORD_REGEX = /^(?=.*\d).{4,8}$/;
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var _default = {
  addUser: (req, res) => {
    /* 	#swagger.tags = ['User']
        #swagger.description = 'Endpoint to add in user' */
    //Params
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const data = {
      username: username,
      password: password,
      email: email
    };

    if (username == null || password == null || email == null) {
      console.log({
        'error': 'paramétre manquant'
      });
      return res.status(400).json({
        'error': 'paramétre manquant'
      });
    }

    if (!EMAIL_REGEX.test(email)) {
      console.log({
        'error': 'Cette email est invalide'
      });
      return res.status(409).json({
        'error': 'Cette email est invalide'
      });
    }

    if (!PASSWORD_REGEX.test(password)) {
      console.log({
        'error': 'Le mot de passe est incorrect il doit être entre 4 et 8 caractére et inclure 1 chiffre'
      });
      return res.status(409).json({
        'error': 'Le mot de passe est incorrect il doit être entre 4 et 8 caractére et inclure 1 chiffre'
      });
    }

    async function main() {
      _modelUser.default.getOne(data.email).then(userFound => {
        if (!userFound) {
          _modelUser.default.create(data).then(newUser => {
            console.log(newUser);
            res.status(201).json(newUser);
          }).catch(err => {
            console.log({
              'error': 'Imposible de sauvegarder cette utilisateur'
            });
            res.status(500).json({
              'error': 'Imposible de sauvegarder cette utilisateur'
            });
          });
        } else {
          console.log({
            'error': 'Cette utilasateur exist déja'
          });
          res.status(409).json({
            'error': 'Cette utilisateur exist déja'
          });
        }
      }).catch(err => {
        console.log({
          'error': 'Imposible de vérifier cette utilisateur'
        });
        res.status(500).json({
          'error': 'Imposible de vérifier cette utilisateur'
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