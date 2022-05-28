import express from "express";
import {
  postFinancialHelp,
  getAllFinancialRequests,
} from "../controllers/financialHelp.controller.js";

import authenticate from "../middleware.js";

const router = express.Router();

router
  .route("/")
  .post(authenticate.isLoggedIn, postFinancialHelp)
  .get(authenticate.isLoggedIn, getAllFinancialRequests);


export default router;