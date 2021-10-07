"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _client = require("@prisma/client");

const prisma = new _client.PrismaClient();
var _default = {
  getListUsers: (req, res) => {
    /* 	#swagger.tags = ['User']
        #swagger.description = 'Endpoint to list in user' */
    async function main() {
      const allUsers = await prisma.users.findMany();
      console.log(allUsers);
      res.status(201).json(allUsers);
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
    const id = req.body.id;

    async function main() {
      const User = await prisma.users.findUnique({
        where: {
          id: Number(id)
        }
      });
      console.log(User);
      res.status(201).json(User);
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
      const newUser = await prisma.users.create({
        data: {
          username: username,
          email: email,
          password: password
        }
      });
      res.status(201).json(newUser);
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
      const updateUser = await prisma.users.update({
        where: {
          id: Number(id)
        },
        data: {
          username: username,
          email: email,
          password: password
        }
      });
      res.status(201).json(updateUser);
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
      });
      res.status(201).json('bien effacer');
    }

    main().catch(e => {
      throw e;
    }).finally(async () => {
      await prisma.$disconnect();
    });
  }
};
exports.default = _default;