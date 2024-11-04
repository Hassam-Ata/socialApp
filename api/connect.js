import pkg from "pg";
const { Pool } = pkg;
import dotenv from "dotenv";
dotenv.config();
export const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
