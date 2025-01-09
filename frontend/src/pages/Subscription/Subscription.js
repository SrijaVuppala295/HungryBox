import React,{useState} from 'react';
import "./Subscription.css";

function Subscription() {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal visibility
  const [selectedPlan, setSelectedPlan] = useState('');
  const [planDetails, setPlanDetails] = useState('');
  const [subscriptionMessage, setSubscriptionMessage] = useState('');

  // Define the subscription benefits for each plan
  const plans = {
    weekly: {
      price: "$5",
      period: "per week",
      benefits: [
        "Access to daily content",
        "Free Delivery Charges",
        "24/7 customer support",
        "No Exclusive discounts"
      ]
    },
    monthly: {
      price: "$15",
      period: "per month",
      benefits: [
        "Free Delivery Charges",
        "24/7 customer support",
        "Exclusive offers and promotions",
        "Personalized recommendations"
      ]
    },
    yearly: {
      price: "$150",
      period: "per year",
      benefits: [
        "Free Delivery Charges",
        "Access to all content for the year",
        "Exclusive offers and promotions",
        "Free event tickets",
        "Premium customer support"
      ]
    }
  };

  // Open the modal and set the plan details
  const handleSubscribe = (plan) => {
    setSelectedPlan(plan);
    setPlanDetails(plans[plan]);
    setIsModalOpen(true); // Show the modal
  };

  // Handle the subscription and show the success message
  const handleConfirmSubscription = () => {
    setSubscriptionMessage(`Yey! You subscribed to the ${selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)} plan!`); // Set success message
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="subscription-container">
      <div className="subscription-box" onClick={() => handleSubscribe('weekly')}>
        <h3>Weekly</h3>
        <p className="price">{plans.weekly.price}</p>
        <p className="period">{plans.weekly.period}</p>
        <button className="subscribe-btn">Subscribe</button>
      </div>

      <div className="subscription-box" onClick={() => handleSubscribe('monthly')}>
        <h3>Monthly</h3>
        <p className="price">{plans.monthly.price}</p>
        <p className="period">{plans.monthly.period}</p>
        <button className="subscribe-btn">Subscribe</button>
      </div>

      <div className="subscription-box" onClick={() => handleSubscribe('yearly')}>
        <h3>Yearly</h3>
        <p className="price">{plans.yearly.price}</p>
        <p className="period">{plans.yearly.period}</p>
        <button className="subscribe-btn">Subscribe</button>
      </div>

      {/* Modal Pop-up */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>{selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)} Plan</h3>
            <p>Price: {planDetails.price}</p>
            <p>{planDetails.period}</p>
            <h4>Benefits:</h4>
            <ul>
              {planDetails.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
            <br></br>
            <button className="subscribe-btn" onClick={handleConfirmSubscription}>Subscribe Now!</button><br></br><br></br>
            <button className="close-btn" onClick={closeModal}>Close</button>
            <div className="subscription-message">
          <p>{subscriptionMessage}</p>
        </div>
          </div>
         
        </div>
      )}
    </div>
  );
}

export default Subscription;