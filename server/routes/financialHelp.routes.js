import express from "express";
import {
  postFinancialHelp,
  getAllFinancialRequests,
  respondToRequest,
  getUserFinancialRequests,
} from "../controllers/financialHelp.controller.js";

import authenticate from "../middleware.js";

const router = express.Router();

router
  .route("/")
  .post(authenticate.isLoggedIn, postFinancialHelp)
  .get(authenticate.isLoggedIn, getAllFinancialRequests);

router
  .route("/author/:userId")
  .get(authenticate.isLoggedIn, getUserFinancialRequests);

router
  .route("/response/:requestId")
  .post(authenticate.isLoggedIn, respondToRequest);

export default router;
