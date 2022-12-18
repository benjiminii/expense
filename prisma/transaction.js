import prisma from "./prisma";

export async function getUserTransaction(id) {
  const transaction = await prisma.transaction.findMany({
    where: { user_id: id },
  });
  console.log(transaction);
  return transaction;
}

export async function getUserTransactionWithDate(id, date1, date2) {
  const transaction = await prisma.transaction.findMany({
    where: {
      user_id: id,
      date: {
        gte: date1,
        lte: date2,
      },
    },
  });
  return transaction;
}

export async function createTransaction(amount, category, date, user_id) {
  const transaction = await prisma.user.create({
    data: {
      amount,
      category,
      date,
      user_id,
    },
  });
  return transaction;
}
