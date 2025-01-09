import React, { useContext, useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [currentState, setCurrentState] = useState("Login");
  const [is2faopen, setIs2faopen] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    token: "",
    newPassword: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogin = async () => {
    try {
      // Clear cookies before login
      document.cookie.split(";").forEach((cookie) => {
        document.cookie = cookie
          .replace(/^ +/, "")
          .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
      });

      const response = await axios.post(`${url}/api/login`, {
        email: data.email,
        password: data.password,
      });

      if (response.data.success) {
        // Clear any existing token first
        sessionStorage.removeItem("token");
        // Set new token
        const newToken = response.data.token;
        sessionStorage.setItem("token", newToken);
        setToken(newToken);
        setShowLogin(false);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Please try again.");
    }
  };

  const onLoginOrSignUp = async (event) => {
    event.preventDefault();
    const endpoint =
      currentState === "Login" ? "/api/user/login" : "/api/user/register";
    const newUrl = `${url}${endpoint}`;

    try {
      // Clear any existing session data
      sessionStorage.clear();
      document.cookie.split(";").forEach((cookie) => {
        document.cookie = cookie
          .replace(/^ +/, "")
          .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
      });

      const response = await axios.post(newUrl, data);
      if (response.data.success) {
        const newToken = response.data.token;
        // Update session storage and context immediately
        sessionStorage.setItem("token", newToken);
        setToken(newToken); // This will trigger navbar update
        setShowLogin(false);

        // If currentState is "Sign Up", then redirect to two factor auth page
        if (currentState === "Sign Up") {
          setIs2faopen(true);
        }
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error during login or sign-up:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const onForgotPassword = async (event) => {
    event.preventDefault();
    const forgotPasswordUrl = `${url}/api/user/forgot-password`;

    try {
      const response = await axios.post(forgotPasswordUrl, {
        email: data.email,
      });
      if (response.data.success) {
        alert("Password reset link has been sent to your email.");
        setCurrentState("Reset Password");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error during password reset request:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const onResetPassword = async (event) => {
    event.preventDefault();
    const resetPasswordUrl = `${url}/api/user/reset-password`;

    try {
      const response = await axios.post(resetPasswordUrl, {
        token: data.token,
        newPassword: data.newPassword,
      });
      if (response.data.success) {
        alert(
          "Password reset successfully. You can now log in with your new password."
        );
        setCurrentState("Login");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error during password reset:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login-popup">
      <form
        onSubmit={
          currentState === "Forgot Password"
            ? onForgotPassword
            : currentState === "Reset Password"
            ? onResetPassword
            : onLoginOrSignUp
        }
        className="login-popup-cont"
      >
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Close"
          />
        </div>

        <div className="login-popup-input">
          {currentState === "Sign Up" && (
            <input
              onChange={onChangeHandler}
              name="name"
              value={data.name}
              type="text"
              placeholder="Your Name"
              required
            />
          )}

          {(currentState === "Login" ||
            currentState === "Sign Up" ||
            currentState === "Forgot Password") && (
            <input
              onChange={onChangeHandler}
              name="email"
              value={data.email}
              type="email"
              placeholder="Your Email"
              required
            />
          )}

          {(currentState === "Login" || currentState === "Sign Up") && (
            <input
              onChange={onChangeHandler}
              name="password"
              value={data.password}
              type="password"
              placeholder="Password"
              required
            />
          )}

          {currentState === "Reset Password" && (
            <>
              <input
                onChange={onChangeHandler}
                name="token"
                value={data.token}
                type="text"
                placeholder="Enter reset token"
                required
              />
              <input
                onChange={onChangeHandler}
                name="newPassword"
                value={data.newPassword}
                type="password"
                placeholder="Enter new password"
                required
              />
            </>
          )}

          {currentState === "Login" && (
            <p
              className="forgot-password-link"
              onClick={() => setCurrentState("Forgot Password")}
            >
              Forgot Password?
            </p>
          )}
        </div>

        {currentState === "Sign Up" && (
          <div className="login-popup-cond">
            <input type="checkbox" required />
            <span> I agree to the above Terms & Conditions.</span>
          </div>
        )}

        <button type="submit">
          {currentState === "Forgot Password"
            ? "Send Reset Link"
            : currentState === "Reset Password"
            ? "Reset Password"
            : currentState === "Sign Up"
            ? "Create Account"
            : "Login"}
        </button>

        {currentState === "Login" ? (
          <p>
            Create a New Account?{" "}
            <span onClick={() => setCurrentState("Sign Up")}>Sign Up</span>
          </p>
        ) : currentState === "Sign Up" ? (
          <p>
            Already have an Account?{" "}
            <span onClick={() => setCurrentState("Login")}>Login</span>
          </p>
        ) : (
          <p>
            Back to <span onClick={() => setCurrentState("Login")}>Login</span>
          </p>
        )}
      </form>

      {is2faopen && (
        <div>
          <TwoFactorAuth open={is2faopen} />
        </div>
      )}
    </div>
  );
};

export default LoginPopup;
