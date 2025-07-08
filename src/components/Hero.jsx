import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 0.9,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <motion.section
      className="relative w-full h-[90vh] bg-gray-100 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated Background Image */}
      <motion.img
        src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg"
        alt="Hero Shoe"
        className="absolute inset-0 w-full h-full object-cover"
        variants={imageVariants}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      {/* Content Container */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-center items-center text-center px-6"
        variants={containerVariants}
      >
        {/* Main Heading */}
        <motion.h2
          className="text-white text-5xl md:text-6xl font-bold mb-4"
          variants={textVariants}
        >
          Step Into{" "}
          <motion.span
            className="text-orange-400 inline-block"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [1, 0.8, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Comfort
          </motion.span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-white text-xl md:text-2xl mb-6 max-w-xl"
          variants={textVariants}
        >
          Discover our latest collection of stylish and comfy shoes for all
          occasions.
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
          <Link to="/shop">
            <motion.button
              className="bg-orange-700 text-white px-6 py-3 rounded-lg text-lg transition-colors duration-300"
              whileHover={{ backgroundColor: "#c2410c" }}
            >
              Shop Now
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
