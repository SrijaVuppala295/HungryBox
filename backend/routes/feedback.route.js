import express from "express";
import feedbackController from "../controllers/feedbackController.js";
const feedbackRouter = express.Router();

feedbackRouter.post("/add", feedbackController);

export default feedbackRouter;
