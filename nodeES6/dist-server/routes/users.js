"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _client = require("@prisma/client");

const prisma = new _client.PrismaClient(); // password compris entre 4 et 8 caractére et inclure 1 chiffre

const PASSWORD_REGEX = /^(?=.*\d).{4,8}$/;
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var _default = {
  getListUsers: (req, res) => {
    /* 	#swagger.tags = ['User']
        #swagger.description = 'Endpoint to list in user' */
    async function main() {
      await prisma.users.findMany().then(allUsers => {
        console.log(allUsers);
        res.status(201).json(allUsers);
      }).catch(err => {
        console.log({
          'error': 'Ne peux pas lister les utilisateurs'
        });
        res.status(500).json({
          'error': 'Ne peux pas lister les utilisateurs'
        });
      });
    }

    main().catch(e => {
      throw e;
    }).finally(async () => {
      await prisma.$disconnect();
    });
  },
  getUser: (req, res) => {
    /*#swagger.tags = ['User']
        #swagger.description = 'Endpoint to select one in user'*/
    //Params
    const email = req.body.email;

    async function main() {
      await prisma.users.findFirst({
        where: {
          email: email
        }
      }).then(User => {
        if (User != null) {
          console.log(User);
          res.status(201).json(User);
        } else {
          console.log({
            'error': 'Imposible de trouver cette utilisateur'
          });
          res.status(409).json({
            'error': 'Imposible de trouver cette utilisateur'
          });
        }
      }).catch(err => {
        console.log({
          'error': 'Impossible de se connecter à la base de donnée!'
        });
        res.status(500).json({
          'error': 'Impossible de se connecter à la base de donnée!'
        });
      });
    }

    main().catch(e => {
      throw e;
    }).finally(async () => {
      await prisma.$disconnect();
    });
  },
  addUser: (req, res) => {
    /* 	#swagger.tags = ['User']
        #swagger.description = 'Endpoint to add in user' */
    //Params
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    async function main() {
      if (username != null && password != null && email != null) {
        if (EMAIL_REGEX.test(email)) {
          if (PASSWORD_REGEX.test(password)) {
            await prisma.users.findFirst({
              where: {
                email: email
              }
            }).then(userFound => {
              if (!userFound) {
                prisma.users.create({
                  data: {
                    username: username,
                    email: email,
                    password: password
                  }
                }).then(newUser => {
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
                  'error': 'Cette utilasateur exist déja'
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
          } else {
            console.log({
              'error': 'Le mot de passe est incorrect il doit être entre 4 et 8 caractére et inclure 1 chiffre'
            });
            res.status(409).json({
              'error': 'Le mot de passe est incorrect il doit être entre 4 et 8 caractére et inclure 1 chiffre'
            });
          }
        } else {
          console.log({
            'error': 'Cette email est invalide'
          });
          res.status(409).json({
            'error': 'Cette email est invalide'
          });
        }
      } else {
        console.log({
          'error': 'paramétre manquant'
        });
        res.status(400).json({
          'error': 'paramétre manquant'
        });
      }
    }

    main().catch(e => {
      throw e;
    }).finally(async () => {
      await prisma.$disconnect();
    });
  },
  putUser: (req, res) => {
    /* 	#swagger.tags = ['User']
        #swagger.description = 'Endpoint to update in a specific user' */
    //params
    const id = req.body.id;
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    async function main() {
      await prisma.users.update({
        where: {
          id: Number(id)
        },
        data: {
          username: username,
          email: email,
          password: password
        }
      }).then(updateUser => {
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
      await prisma.$disconnect();
    });
  },
  deleteUser: (req, res) => {
    /* 	#swagger.tags = ['User']
        #swagger.description = 'Endpoint to delete in a specific user' */
    //params
    const id = req.body.id;

    async function main() {
      await prisma.users.delete({
        where: {
          id: Number(id)
        }
      }).then(userDelete => {
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
      await prisma.$disconnect();
    });
  }
};
exports.default = _default;