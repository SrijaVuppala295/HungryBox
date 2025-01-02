import { React, useState, useEffect } from "react";
import "./Feedback.css";
import { assets } from "../../assets/assets";
import { FaStar } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";

function Feedback() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
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
        <div className="form-container">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <textarea
            rows={8}
            placeholder="Your valuable feedback or suggestion here...."
          ></textarea>
          <div className="rating-container">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar className="star" />
            ))}
          </div>
          <button>SUBMIT FEEDBACK</button>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
