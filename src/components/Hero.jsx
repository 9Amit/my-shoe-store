/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [activeShoe, setActiveShoe] = useState(0);

  // Featured shoes data
  const featuredShoes = [
    {
      id: 1,
      name: "Air Max Pro",
      price: "₹18900",
      color: "Sunset Orange",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
    },
    {
      id: 2,
      name: "Ultra Boost",
      price: "₹5520",
      color: "Coral Reef",
      image:
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800",
    },
    {
      id: 3,
      name: "Street Runner",
      price: "₹5999",
      color: "Flame Orange",
      image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800",
    },
  ];

  // Auto-rotate shoes
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveShoe((prev) => (prev + 1) % featuredShoes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [featuredShoes.length]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const shoeVariants = {
    enter: { x: 1000, opacity: 0, rotateY: 45 },
    center: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: {
      x: -1000,
      opacity: 0,
      rotateY: -45,
      transition: { duration: 0.8, ease: "easeIn" },
    },
  };

  return (
    <motion.section
      className="relative w-full min-h-[90vh] bg-gradient-to-br from-orange-50 to-orange-100 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 bg-orange-600 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-orange-400 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12 min-h-[90vh] flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <motion.div className="space-y-8" variants={containerVariants}>
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-2 bg-orange-600 text-white rounded-full text-sm font-semibold mb-4">
                NEW COLLECTION 2025
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight"
              variants={itemVariants}
            >
              Walk in
              <motion.span
                className="block text-orange-600"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #ea580c, #fb923c, #ea580c)",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                Style & Comfort
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 max-w-lg"
              variants={itemVariants}
            >
              Discover our exclusive collection of premium footwear designed for
              those who demand both fashion and function.
            </motion.p>

            {/* Stats */}
            <motion.div className="flex gap-8 py-6" variants={itemVariants}>
              <div>
                <h3 className="text-3xl font-bold text-orange-600">500+</h3>
                <p className="text-gray-600">Styles</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-orange-600">50K+</h3>
                <p className="text-gray-600">Happy Customers</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-orange-600">4.8★</h3>
                <p className="text-gray-600">Rating</p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <Link to="/shop">
                <motion.button
                  className="px-8 py-4 bg-orange-600 text-white rounded-lg font-semibold text-lg shadow-lg"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(234, 88, 12, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Shop Collection
                </motion.button>
              </Link>
              <Link to="/new-arrivals">
                <motion.button
                  className="px-8 py-4 border-2 border-orange-600 text-orange-600 rounded-lg font-semibold text-lg"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#ea580c",
                    color: "#ffffff",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  New Arrivals
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Interactive Shoe Display */}
          <motion.div
            className="relative h-[500px] lg:h-[600px]"
            variants={itemVariants}
          >
            {/* Rotating Shoe Display */}
            <div className="relative w-full h-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeShoe}
                  className="absolute w-full max-w-md"
                  variants={shoeVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  style={{ perspective: 1000 }}
                >
                  <motion.img
                    src={featuredShoes[activeShoe].image}
                    alt={featuredShoes[activeShoe].name}
                    className="w-full h-auto drop-shadow-2xl"
                    whileHover={{
                      scale: 1.1,
                      rotateY: 15,
                      transition: { duration: 0.3 },
                    }}
                  />

                  {/* Shoe Info */}
                  <motion.div
                    className="text-center mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h3 className="text-2xl font-bold text-gray-900">
                      {featuredShoes[activeShoe].name}
                    </h3>
                    <p className="text-orange-600 text-xl font-semibold">
                      {featuredShoes[activeShoe].price}
                    </p>
                    <p className="text-gray-600">
                      {featuredShoes[activeShoe].color}
                    </p>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Shoe Selector Dots */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-3">
                {featuredShoes.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveShoe(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeShoe
                        ? "bg-orange-600 w-8"
                        : "bg-gray-300 hover:bg-orange-400"
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute top-10 right-10 bg-orange-600 text-white px-4 py-2 rounded-full font-bold"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              30% OFF
            </motion.div>

            <motion.div
              className="absolute bottom-20 left-10 bg-white shadow-lg px-4 py-2 rounded-lg"
              animate={{
                x: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="text-orange-600 font-semibold">
                Free Shipping
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          className="w-6 h-6 text-orange-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
