import userModel from "../models/userModel.js";
import foodModel from "../models/foodModel.js";

// Add items to user cart
const addToCart = async (req, res) => {
  try {
    const userData = await userModel.findById(req.body.userId);
    const cartData = userData.cartData;

    const foodItem = await foodModel.findById(req.body.itemId);

    // Check subscription
    if (!userData.subscription) {
      const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
      const currentHour = new Date().getHours();
      const currentSlot = currentHour < 15 ? "Lunch" : "Dinner";

      // Validate non-subscriber's order
      if (foodItem.day !== currentDay || foodItem.timeSlot !== currentSlot) {
        return res.json({
          success: false,
          message: `Non-subscribers can only order meals available for ${currentDay} ${currentSlot}.`,
        });
      }
    }

    // Proceed if validation passes
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }

    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, message: "Added to Cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};
// Remove items from user cart
const removeFromCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;

    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
    }

    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, message: "Removed from Cart" });
  } catch (error) {
    console.log("Error");
    res.json({ success: false, message: "error" });
  }
};

// Fetch user cart data
const getCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;

    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { addToCart, removeFromCart, getCart };
