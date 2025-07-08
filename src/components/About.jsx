/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const stats = [
    { number: "50K+", label: "Happy Customers" },
    { number: "200+", label: "Shoe Brands" },
    { number: "4.8★", label: "Average Rating" },
    { number: "24/7", label: "Customer Support" },
  ];

  const values = [
    {
      icon: "✨",
      title: "Quality First",
      description:
        "Every shoe is carefully selected for superior craftsmanship and comfort",
    },
    {
      icon: "🚀",
      title: "Fast Delivery",
      description:
        "Quick and reliable shipping to get your shoes to you as fast as possible",
    },
    {
      icon: "💰",
      title: "Best Prices",
      description:
        "Competitive pricing without compromising on quality or style",
    },
    {
      icon: "🛡️",
      title: "Secure Shopping",
      description:
        "Shop with confidence with our secure payment and easy return policy",
    },
  ];

  return (
    <section
      className="py-16 bg-gradient-to-b from-gray-50 to-white min-h-screen"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <span className="text-gray-800">About </span>
            <span className="text-orange-500">Walk</span>
            <span className="text-red-500">Nest</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            Your trusted destination for premium footwear since 2020
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left Content */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Where Every Step <span className="text-orange-500">Matters</span>
            </h3>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg leading-relaxed">
                WalkNest was founded with a single mission: to bring the best
                shoes from around the world right to your doorstep. We believe
                that the right pair of shoes can transform not just your outfit,
                but your entire day.
              </p>
              <p className="text-lg leading-relaxed">
                Our curated collection features everything from high-performance
                athletic shoes to elegant formal wear, ensuring that whatever
                your lifestyle, we have the perfect fit for you.
              </p>
              <p className="text-lg leading-relaxed">
                We're more than just a store — we're passionate about helping
                our customers step forward with confidence and style.
              </p>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div variants={imageVariants} className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=1974"
                alt="Shoe Collection"
                className="rounded-2xl shadow-2xl w-full"
              />
              <motion.div
                className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-2xl shadow-lg"
                initial={{ rotate: -5 }}
                animate={{ rotate: 5 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 3,
                }}
              >
                <p className="text-2xl font-bold">Since</p>
                <p className="text-3xl font-bold">2020</p>
              </motion.div>
            </div>
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-red-200 rounded-2xl transform rotate-3 scale-105 -z-10 opacity-50" />
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="text-center bg-white p-6 rounded-xl shadow-lg"
            >
              <motion.h4
                className="text-4xl font-bold text-orange-500 mb-2"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{
                  delay: 0.5 + index * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                {stat.number}
              </motion.h4>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h3
            className="text-3xl font-bold text-center text-gray-800 mb-12"
            variants={itemVariants}
          >
            Why Choose <span className="text-orange-500">WalkNest</span>?
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <motion.div
                  className="text-4xl mb-4"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 2,
                    delay: index * 0.2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                >
                  {value.icon}
                </motion.div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-orange-500 to-red-500 text-white p-12 rounded-3xl shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.h3
            className="text-3xl font-bold mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
          >
            Ready to Find Your Perfect Pair?
          </motion.h3>
          <motion.p
            className="text-xl mb-8 opacity-90"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.9 }}
          >
            Join thousands of happy customers who trust WalkNest
          </motion.p>
          <motion.button
            className="bg-white text-orange-500 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 1.1 }}
          >
            Shop Now →
          </motion.button>
        </motion.div>
      </div>

      {/* Background Decorations */}
      <motion.div
        className="fixed top-20 left-10 w-20 h-20 bg-orange-200 rounded-full filter blur-xl opacity-30 -z-10"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="fixed bottom-20 right-10 w-32 h-32 bg-red-200 rounded-full filter blur-xl opacity-30 -z-10"
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </section>
  );
};

export default About;
