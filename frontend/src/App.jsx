import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import Verify from "./pages/Verify/Verify";
import MyOrders from "./pages/MyOrders/MyOrders";
import ContactUs from "./pages/ContactUs/ContactUs";
import Subscription from "./pages/Subscription/Subscription";
import HappyClients from "./components/HappyClients/HappyClients";
import "./styles/theme.css";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const location = useLocation();

  useEffect(() => {
    console.log('App rendered with path:', location.pathname);
  }, [location]);

  return (
    <ThemeProvider>
      <>
        {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
        <div className="app">
          <Navbar setShowLogin={setShowLogin} />
          <div className="main-content">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/subscription" element={<Subscription />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/order" element={<PlaceOrder />} />
              <Route exact path="/verify" element={<Verify />} />
              <Route exact path="/myorders" element={<MyOrders />} />
              <Route exact path="/contactus" element={<ContactUs />} />
              <Route path="*" element={
                <div>
                  <h1>404: Page Not Found</h1>
                  <p>Current path: {location.pathname}</p>
                </div>
              } />
            </Routes>
          </div>
          <HappyClients />
        </div>
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default App;