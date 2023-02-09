import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  let category = await prisma.category.findFirst();
  if (!category) {
    await prisma.category.createMany({
      data: [
        { name: 'roupas' },
        { name: 'camisas' },
        { name: 'calças'},
        { name: 'calças'},
      ],
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
