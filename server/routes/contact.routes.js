import express from "express";
import {
  postContactRequest,
  getAllContactRequests,
} from "../controllers/contact.controller.js";
import authenticate from "../middleware.js";

const router = express.Router();

router
  .route("/")
  .post(authenticate.isLoggedIn, postContactRequest)
  .get(authenticate.isLoggedIn, getAllContactRequests);

export default router;
