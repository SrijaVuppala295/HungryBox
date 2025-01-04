import Feedback from "../models/feedback.js";
import sendMail from "../Services/MailSender.js";

const feedbackController = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const feedback = req.body.feedback;
  const rating = req.body.rating;

  try {
    const newfeedback = await Feedback.create({
      name: name,
      email: email,
      feedback: feedback,
      rating: rating,
    });

    if (newfeedback) {
      res.status(200).json({ message: "Feedback Submitted Successfully" });
    }

    const sendingMail = await sendMail(req, res);
  } catch (error) {
    console.error(`Error creating the feedback: ${error}`);
    res.status(500).json({ error: error.message });
  }
};

export default feedbackController;
