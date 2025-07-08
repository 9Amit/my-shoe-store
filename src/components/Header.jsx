import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/shoes_2742687.png";

const Header = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cart } = useCart();
  const location = useLocation();

  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  // Animation Variants
  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const logoVariants = {
    hidden: { x: -50, opacity: 0, rotate: -180 },
    visible: {
      x: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const navLinkVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const cartVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const cartBadgeVariants = {
    initial: { scale: 0 },
    animate: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 15,
      },
    },
    exit: {
      scale: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  const mobileMenuVariants = {
    closed: {
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const mobileMenuItemVariants = {
    closed: { x: 50, opacity: 0 },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <motion.header
        className="bg-white shadow sticky top-0 z-50"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={headerVariants}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo + Brand */}
          <motion.div variants={logoVariants} whileHover="hover">
            <Link to="/" className="flex items-center space-x-3">
              <motion.img
                src={logo}
                alt="ShoeHaven Logo"
                className="h-10 w-10"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
              <h1 className="text-2xl sm:text-3xl font-extrabold font-open text-gray-800">
                <motion.span
                  className="text-orange-500 inline-block"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Shoe
                </motion.span>
                <motion.span
                  className="text-red-500 inline-block"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Haven
                </motion.span>
              </h1>
            </Link>
          </motion.div>

          {/* Navigation - Desktop */}
          <nav className="hidden sm:flex space-x-6">
            {[
              { name: "Home", path: "/" },
              { name: "Shop", path: "/shop" },
              { name: "About", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map(({ name, path }, index) => (
              <motion.div
                key={name}
                variants={navLinkVariants}
                custom={index}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <Link
                  to={path}
                  className={`relative text-gray-700 hover:text-orange-500 font-medium transition ${
                    location.pathname === path ? "text-orange-500" : ""
                  }`}
                >
                  {name}
                  {location.pathname === path && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-500"
                      layoutId="navbar-indicator"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Login + Cart + Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <motion.div
              variants={navLinkVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:block"
            >
              <Link
                to="/login"
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
              >
                Login
              </Link>
            </motion.div>

            <motion.div
              variants={cartVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link to="/cart" className="relative flex items-center group">
                <motion.span
                  role="img"
                  aria-label="cart"
                  className="text-2xl"
                  animate={{
                    rotate: itemCount > 0 ? [0, -10, 10, -10, 0] : 0,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.4, 0.6, 1],
                  }}
                >
                  🛒
                </motion.span>
                <AnimatePresence>
                  {itemCount > 0 && (
                    <motion.span
                      key="cart-badge"
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-1.5"
                      variants={cartBadgeVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      {itemCount}
                    </motion.span>
                  )}
                </AnimatePresence>
                <span className="ml-2 text-gray-700 font-medium group-hover:text-orange-500">
                  Cart
                </span>
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              className="sm:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                <motion.span
                  className="w-full h-0.5 bg-gray-700"
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 6 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-full h-0.5 bg-gray-700"
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-full h-0.5 bg-gray-700"
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -6 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              className="sm:hidden fixed top-[73px] right-0 w-64 h-full bg-white shadow-lg z-40"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="p-6 space-y-4">
                {[
                  { name: "Home", path: "/" },
                  { name: "Shop", path: "/shop" },
                  { name: "About", path: "/about" },
                  { name: "Contact", path: "/contact" },
                  { name: "Login", path: "/login" },
                ].map(({ name, path }) => (
                  <motion.div key={name} variants={mobileMenuItemVariants}>
                    <Link
                      to={path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block text-gray-700 hover:text-orange-500 font-medium transition py-2 ${
                        location.pathname === path ? "text-orange-500" : ""
                      }`}
                    >
                      {name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Overlay for mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="sm:hidden fixed inset-0 bg-black z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
