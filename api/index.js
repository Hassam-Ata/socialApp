import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import dotenv from "dotenv";
import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import likesRoutes from "./routes/likes.js";
import commmentsRoutes from "./routes/comments.js";
dotenv.config();

const app = express();
const PORT = process.env.SERVER_PORT || 8000;

app.use(cors("*"));
app.use(cookieParser());

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/likes", likesRoutes);
app.use("/api/comments", commmentsRoutes);
app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
