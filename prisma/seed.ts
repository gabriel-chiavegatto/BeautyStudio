import { PrismaClient } from '@prisma/client';
import dayjs from 'dayjs';
const prisma = new PrismaClient();

async function main() {

  await prisma.user.create({
    data: {
      name: "Waguinho",
      email: "waroguinho@gmail.com",
      password: "123456",
    }
  })

}

main()
  .catch((e) => {
    console.error("<< seed's main error >> ", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
