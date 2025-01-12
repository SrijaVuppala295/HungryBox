import mongoose from "mongoose";
import userOTPVerifyModel from "../models/UserOTPVerify.js";

const verify2faController = async (req, res) => {
  const { userId, otp } = req.body;

  if (!userId || !otp) {
    return res
      .status(400)
      .json({ success: false, message: "Missing parameters" });
  }

  try {
    const verifyOTP = await userOTPVerifyModel.findOne({
      $where: {
        otp: otp,
        userId: userId,
        expiresAt: { $gt: Date.now() },
      },
    });

    // If OTP is found, then delete the OTP
    if (verifyOTP) {
      await userOTPVerifyModel.deleteOne({ _id: verifyOTP._id });
      return res.status(200).json({ success: true, message: "OTP verified" });
    } else {
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    }
  } catch (error) {
    console.error(`Verifying OTP error: ${error}`);
    return res
      .status(500)
      .json({ success: false, message: "Failed to verify OTP" });
  }
};

export default verify2faController;
