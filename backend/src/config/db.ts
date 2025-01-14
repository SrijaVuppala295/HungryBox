import mongoose from "mongoose";
export const connectDB = async () => {
  const URI = process.env.MONGO_URI as string
  try {
    await mongoose.connect(URI);
    console.log("DB Connected");
  } catch (error) {
    console.error("DB Connection Error:", error);
    process.exit(1);
  }
};
