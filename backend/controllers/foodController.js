import foodModel from "../models/foodModel.js";
import fs from "fs";


// add food item

const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: image_filename,
    category: req.body.category,
    day: req.body.day, // e.g., "Thursday"
    timeSlot: req.body.timeSlot, // e.g., "Lunch"
  });

  try {
    await food.save();
    res.json({ success: true, message: "Food Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};


// All Food List
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// Remove Food Item
const removeFood = async (req, res) => {
  try {
    // Find the food item to be deleted
    const food = await foodModel.findById(req.body.id);

    if (!food) {
      return res.json({ success: false, message: "Food item not found" });
    }

    // Delete image from uploads folder
    fs.unlink(`uploads/${food.image}`, (err) => {
      if (err) {
        console.log(err);
      }
    });

    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const addReview = async (req, res) => {
  try {
    const { foodId, userId, rating, comment } = req.body;

    // Find food item
    const food = await foodModel.findById(foodId);
    if (!food) {
      return res.status(404).json({ success: false, message: "Food item not found" });
    }

    // Add review to the food item
    food.reviews.push({ userId, rating, comment });

    // Recalculate the average rating
    const totalRatings = food.reviews.reduce((sum, review) => sum + review.rating, 0);
    food.averageRating = totalRatings / food.reviews.length;

    // Save changes
    await food.save();
    res.json({ success: true, message: "Review added successfully", averageRating: food.averageRating });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error adding review" });
  }
};

export { addFood, listFood, removeFood, addReview };
