"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prisma = void 0;

var _client = _interopRequireDefault(require("@prisma/client"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  PrismaClient
} = _client.default;
const prisma = new PrismaClient();
exports.prisma = prisma;

async function main() {
  // ... you will write your Prisma Client queries here
  await prisma.users.create({
    data: {
      username: 'Alice',
      email: 'alice@prisma.io',
      password: 'uzerty'
    }
  });
  const allUsers = await prisma.users.findMany();
  console.log(allUsers);
}

main().catch(e => {
  throw e;
}).finally(async () => {
  await prisma.$disconnect();
});