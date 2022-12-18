import { loginUser } from "../../prisma/user";

export default async function handle(req, res) {
  try {
    switch (req.method) {
      case "GET": {
        const user = await loginUser(req.query.email, req.query.password);
        return res.status(200).json(user);
      }
    }
  } catch (error) {
    return res.status(500).json({ ...error, message: error.message });
  }
}
