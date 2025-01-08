import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./context/StoreContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </BrowserRouter>
);

reportWebVitals();

// Get the button
const scrollBtn = document.getElementById("scrollBtn");

// Show or hide the button based on scroll position
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
};

// Scroll to top function
scrollBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
