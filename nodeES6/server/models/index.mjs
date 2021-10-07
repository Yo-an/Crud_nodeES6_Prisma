import Prisma from '@prisma/client';

const { PrismaClient } = Prisma;
export const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  await prisma.users.create({
    data: {
      username: 'Alice',
      email: 'alice@prisma.io',
      password:'uzerty',
    },
  })
  const allUsers = await prisma.users.findMany()
  console.log(allUsers)
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })