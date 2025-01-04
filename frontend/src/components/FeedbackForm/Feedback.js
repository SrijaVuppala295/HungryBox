import { React, useState, useCallback } from "react";
import "./Feedback.css";
import axios from "axios";
import { assets } from "../../assets/assets";
import { FaStar } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";
import FeedbackPopup from "../FeedbackPopup/FeedbackPopup";

function Feedback() {
  // States to manage the rating
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  // State to manage the error
  const [error, setError] = useState("");

  // State to manage the popup
  const [showpopup, setShowpopup] = useState(false);

  const handleClick = useCallback((star) => {
    setRating(star);
  }, []);

  const handleMouseEnter = useCallback((star) => {
    setHover(star);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHover(0);
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        feedback: formData.get("feedback"),
        rating: rating,
      };

      try {
        const newfeedback = await axios.post(
          "http://localhost:4000/api/feedback/add",
          data
        );
        console.log(newfeedback);

        if (newfeedback.status === 200) {
          setShowpopup(true);
          setTimeout(() => {
            setShowpopup(false);
          }, 2000);
        }
      } catch (error) {
        console.log(error);
        setError("Something went wrong!");
      }
    },
    [rating]
  );

  return (
    <div className="feedback">
      <div className="left-container">
        <h1>
          <VscFeedback /> We value your Feedback!
        </h1>
        <span>
          Your thoughts help us improve. Share your experience and suggestions
          with us!
        </span>
        <div className="image-container">
          <img src={assets.feedbackform} alt="feedback" />
        </div>
      </div>

      <div className="right-container">
        <form onSubmit={handleSubmit} className="form-container">
          <input
            name="name"
            type="text"
            placeholder="Name"
            required
            pattern="^[a-zA-Z\s]{3,50}$"
            title="Name must be 3 to 50 characters long and can include letters (a-z, A-Z) and spaces only."
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            title="Please enter a valid email address"
          />
          <textarea
            rows={8}
            name="feedback"
            type="text"
            required
            placeholder="Your valuable feedback or suggestion here...."
          ></textarea>
          <div className="rating-container">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={`star ${star <= (hover || rating) ? "active" : ""}`}
                onClick={() => handleClick(star)}
                onMouseEnter={() => handleMouseEnter(star)}
                onMouseLeave={handleMouseLeave}
                style={{
                  color: star <= rating ? "yellow" : "white",
                }}
              />
            ))}
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit">SUBMIT FEEDBACK</button>
        </form>
      </div>

      {showpopup && <FeedbackPopup />}
    </div>
  );
}

export default Feedback;
