import mongoose from "mongoose";
const URI = process.env.MONGO_URI as string
export const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("DB Connected");
  } catch (error) {
    console.error("DB Connection Error:", error);
    process.exit(1);
  }
};
