"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _client = require("@prisma/client");

const prisma = new _client.PrismaClient();
var _default = {
  getAll: async () => {
    return await prisma.users.findMany();
  },
  getOne: async email => {
    return await prisma.users.findUnique({
      where: {
        email: email
      }
    });
  },
  create: async data => {
    return await prisma.users.create({
      data: data
    });
  },
  delete: async id => {
    return await prisma.users.delete({
      where: {
        id: Number(id)
      }
    });
  },
  update: async (id, data) => {
    return await prisma.users.update({
      where: {
        id: Number(id)
      },
      data: data
    });
  },
  closePrisma: async () => {
    return await prisma.$disconnect();
  }
};
exports.default = _default;