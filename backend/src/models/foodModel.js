import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  rating: { type: Number, required: true, min: 1, max: 5 }, // Rating between 1 and 5
  comment: { type: String }
});

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  day: { type: String, required: true }, // e.g., "Thursday"
  timeSlot: { type: String, required: true }, // e.g., "Lunch", "Dinner"
  reviews: [reviewSchema], 
  averageRating: { type: Number, default: 0 } 
});

const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);

export default foodModel;
