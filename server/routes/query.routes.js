import express from "express";

import { postQuery, getAllQueries } from "../controllers/query.cotroller.js";
import authenticate from "../middleware.js";

const router = express.Router();

router
  .route("/")
  .post(authenticate.isLoggedIn, postQuery)
  .get(authenticate.isLoggedIn, getAllQueries);

export default router;
