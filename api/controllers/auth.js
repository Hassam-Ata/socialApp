import { pool } from "../connect.js";
import bcrypt from "bcryptjs";

export const register = (req, res) => {
  const { username, email, password, name } = req.body;

  console.log(req.body); // Log the request body
  console.log(password); // Log the password value

  if (!username || !email || !password || !name) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const q = "SELECT * FROM users WHERE username = $1";

  pool.query(q, [username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.rows.length > 0)
      return res.status(409).json("User already exists!");

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const insertQuery =
      "INSERT INTO users (username, email, password, name) VALUES ($1, $2, $3, $4)";

    const values = [username, email, hashedPassword, name];

    pool.query(insertQuery, values, (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(201).json("User has been created.");
    });
  });
};

export const login = (req, res) => {};
export const logout = (req, res) => {};
