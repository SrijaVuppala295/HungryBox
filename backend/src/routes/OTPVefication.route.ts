import express from "express";
import verify2faController from "../controllers/Verify2FaController.js";

const otpVerificationRoutes = express.Router();
otpVerificationRoutes.post("/verifyOTP", verify2faController);

export default otpVerificationRoutes;