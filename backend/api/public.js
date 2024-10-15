import { register, login } from "../controllers/authController.js";

export default async (req, res) => {
  if (req.method === "POST") {
    if (req.url.includes("/register")) {
      await register(req, res);
    } else if (req.url.includes("/login")) {
      await login(req, res);
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};
