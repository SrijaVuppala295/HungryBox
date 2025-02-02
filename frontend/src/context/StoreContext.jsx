import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState(
    () => sessionStorage.getItem("token") || null
  );
  // Initialize food_list as an empty array instead of undefined
  const [food_list, setFoodList] = useState([]);
  // Add loading state
  const [isLoading, setIsLoading] = useState(true);

  // Update to use VITE prefix instead of REACT_APP
  const url = import.meta.env.VITE_API_URL;

  // Add token validation function
  const validateToken = async (token) => {
    if (!token) return false;
    try {
      const response = await axios.post(
        `${url}/api/validate-token`,
        {},
        { headers: { token } }
      );
      return response.data.valid;
    } catch (error) {
      return false;
    }
  };

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    if (token) {
      await axios.post(
        url + "/api/cart/add",
        { itemId },
        { headers: { token } }
      );
    }
  };

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));

    if (token) {
      await axios.post(
        url + "/api/cart/remove",
        { itemId },
        { headers: { token } }
      );
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);

        // Check if itemInfo exists before trying to access its price
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        } else {
          console.warn(`Item with id ${item} not found in food_list`);
        }
      }
    }

    return totalAmount;
  };

  const fetchFoodList = async () => {
    const response = await axios.get(url + "/api/food/list");
    setFoodList(response.data.data);
  };

  const loadCartData = async (token) => {
    const response = await axios.post(
      url + "/api/cart/get",
      {},
      { headers: { token } }
    );
    setCartItems(response.data.cartData);
  };

  useEffect(() => {
    async function loadData() {
      try {
        const savedToken = sessionStorage.getItem("token");

        // Add beforeunload event listener
        const handleBeforeUnload = () => {
          sessionStorage.clear();
          setToken(null);
          setCartItems({});
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        if (savedToken) {
          const isValid = await validateToken(savedToken);
          if (!isValid) {
            sessionStorage.clear();
            setToken(null);
            setCartItems({});
          } else {
            setToken(savedToken);
            await loadCartData(savedToken);
          }
        }

        await fetchFoodList();

        return () =>
          window.removeEventListener("beforeunload", handleBeforeUnload);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    }
    loadData();
  }, []);

  // Add page reload/refresh handler
  useEffect(() => {
    const handlePageReload = () => {
      sessionStorage.clear();
      document.cookie.split(";").forEach((cookie) => {
        document.cookie = cookie
          .replace(/^ +/, "")
          .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
      });
      setToken(null);
      setCartItems({});
    };

    // Handle page refresh
    window.addEventListener("beforeunload", handlePageReload);

    return () => {
      window.removeEventListener("beforeunload", handlePageReload);
    };
  }, []);

  // Token effect handler
  useEffect(() => {
    if (token) {
      sessionStorage.setItem("token", token);
    } else {
      sessionStorage.removeItem("token");
      setCartItems({});
    }
  }, [token]);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
