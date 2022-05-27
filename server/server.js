import express from "express";
import "dotenv/config";

import authRoutes from "./routes/auth.routes.js";
import queryRoutes from "./routes/query.routes.js";

import cors from "cors";

const app = express();
const port = process.env.PORT;

import "./db/conn.js";

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/query", queryRoutes);

app.listen(port, () => {
  console.log(`server started on http://localhost:${port}`);
});
