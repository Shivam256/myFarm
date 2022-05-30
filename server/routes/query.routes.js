import express from "express";

import {
  postQuery,
  getAllQueries,
  getUserQueries,
  respondToQuery,
} from "../controllers/query.cotroller.js";
import authenticate from "../middleware.js";

const router = express.Router();

router
  .route("/")
  .post(authenticate.isLoggedIn, postQuery)
  .get(authenticate.isLoggedIn, authenticate.isAdmin, getAllQueries);

router.route("/author/:userId").get(authenticate.isLoggedIn, getUserQueries);

router
  .route("/response/:queryId")
  .post(authenticate.isLoggedIn, respondToQuery);

export default router;
