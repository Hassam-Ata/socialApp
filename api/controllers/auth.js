import { pool } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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

export const login = (req, res) => {
  const q = "SELECT * FROM users WHERE username = $1"; // Use $1 for PostgreSQL parameterized queries

  // Query the database
  pool.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err); // Internal server error
    if (data.rows.length === 0) return res.status(404).json("User not found!"); // User not found

    // Compare password
    const checkPassword = bcrypt.compareSync(
      req.body.password,
      data.rows[0].password
    );
    if (!checkPassword) {
      return res.status(400).json("Wrong password or username!");
    }

    // Create a JWT token
    const token = jwt.sign({ id: data.rows[0].id }, "secretkey");

    // Destructure to exclude the password from the response
    const { password, ...others } = data.rows[0];

    // Set the token in a cookie and send the user data as a response
    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others); // Send the other user data (without the password)
  });
};
export const logout = (req, res) => {};
