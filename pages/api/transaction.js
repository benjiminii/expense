import {
  getUserTransaction,
  getUserTransactionWithDate,
  createTransaction,
} from "../../prisma/transaction";

export default async function handle(req, res) {
  try {
    switch (req.method) {
      case "GET": {
        if (req.query.date1 && req.query.date2) {
          const transaction = await getUserTransactionWithDate(
            req.query.userId,
            req.query.date1,
            req.query.date2
          );
          return res.status(200).json(transaction);
        } else {
          const transaction = await getUserTransaction(req.query.userId);
          return res.status(200).json(transaction);
        }
      }
      case "POST": {
        const { amount, category, date, user_id } = req.body;
        const transaction = await createTransaction(
          amount,
          category,
          date,
          user_id
        );
        return res.status(200).json(transaction);
      }
    }
  } catch (error) {
    return res.status(500).json({ ...error, message: error.message });
  }
}
