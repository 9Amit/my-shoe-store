import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Adjust path as needed

const Header = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { cart } = useCart();
  const location = useLocation();

  // Total item count in cart
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100); // Delay for smoothness
  }, []);

  return (
    <header
      className={`bg-white shadow-md sticky top-0 z-50 transition-opacity duration-1000 ease-in-out ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/">
          <h1 className="font-open text-4xl font-bold text-blue-600">
            ShoeHaven
          </h1>
        </Link>
        <nav className="space-x-6">
          <Link
            to="/"
            className={`text-gray-700 hover:text-blue-600 font-medium ${
              location.pathname === "/" ? "underline" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/shop"
            className={`text-gray-700 hover:text-blue-600 font-medium ${
              location.pathname === "/shop" ? "underline" : ""
            }`}
          >
            Shop
          </Link>
          <Link
            to="/about"
            className={`text-gray-700 hover:text-blue-600 font-medium ${
              location.pathname === "/about" ? "underline" : ""
            }`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`text-gray-700 hover:text-blue-600 font-medium ${
              location.pathname === "/contact" ? "underline" : ""
            }`}
          >
            Contact
          </Link>
          <Link
            to="/cart"
            className="text-gray-700 hover:text-blue-600 font-medium relative"
          >
            <span role="img" aria-label="cart">
              🛒
            </span>
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-4 bg-blue-600 text-white rounded-full text-xs px-1">
                {itemCount}
              </span>
            )}
            <span className="ml-1">Cart</span>
          </Link>
        </nav>
        <div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
