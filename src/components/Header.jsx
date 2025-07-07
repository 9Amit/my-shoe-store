import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import logo from "../assets/shoes_2742687.png";

const Header = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { cart } = useCart();
  const location = useLocation();

  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100); // smooth entrance
  }, []);

  return (
    <header
      className={`bg-white shadow sticky top-0 z-50 transition-opacity duration-1000 ease-in-out ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo + Brand */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} alt="ShoeHaven Logo" className="h-10 w-10" />
          <h1 className="text-2xl sm:text-3xl font-extrabold font-open text-gray-800">
            <span className="text-orange-500">Shoe</span>
            <span className="text-red-500">Haven</span>
          </h1>
        </Link>

        {/* Navigation */}
        <nav className="hidden sm:flex space-x-6">
          {[
            { name: "Home", path: "/" },
            { name: "Shop", path: "/shop" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
          ].map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={`text-gray-700 hover:text-orange-500 font-medium transition ${
                location.pathname === path ? "underline underline-offset-4" : ""
              }`}
            >
              {name}
            </Link>
          ))}
        </nav>

        {/* Login + Cart */}
        <div className="flex items-center space-x-4">
          <Link
            to="/login"
            className="hidden sm:inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            Login
          </Link>

          <Link to="/cart" className="relative flex items-center group">
            <span role="img" aria-label="cart" className="text-2xl">
              🛒
            </span>
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-1.5">
                {itemCount}
              </span>
            )}
            <span className="ml-2 text-gray-700 font-medium group-hover:text-orange-500">
              Cart
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
