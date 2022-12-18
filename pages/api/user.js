import { getUser, getAllUser, createUser } from "../../prisma/user";

export default async function handle(req, res) {
  try {
    switch (req.method) {
      case "GET": {
        if (req.query.id) {
          const user = await getUser(req.query.id);
          return res.status(200).json(user);
        } else {
          const users = await getAllUser();
          return res.status(200).json(users);
        }
      }
      case "POST": {
        const { f_name, l_name, password, email } = req.body;
        const user = await createUser(f_name, l_name, password, email);
        return res.status(200).json(user);
      }
    }
  } catch (error) {
    return res.status(500).json({ ...error, message: error.message });
  }
}
