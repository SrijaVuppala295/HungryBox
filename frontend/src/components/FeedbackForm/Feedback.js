import { React, useState, useEffect } from "react";
import "./Feedback.css";
import { assets } from "../../assets/assets";
import { FaStar } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";

function Feedback() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const feedback = formData.get("feedback");

    console.log(name, email, feedback);
  };

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
            pattern="^[a-zA-Z]{3,15}$"
            title="Name must be at least 3 characters long."
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
              <FaStar className="star" />
            ))}
          </div>
          <button type="submit">SUBMIT FEEDBACK</button>
        </form>
      </div>
    </div>
  );
}

export default Feedback;
