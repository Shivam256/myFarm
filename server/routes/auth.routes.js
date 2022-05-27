import express from "express";

import { signup, login, jwtVerify } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/jwtVerify", jwtVerify);

export default router;
