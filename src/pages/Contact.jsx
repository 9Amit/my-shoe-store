import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const successVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
    exit: {
      scale: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const contactMethods = [
    {
      icon: "📍",
      title: "Visit Our Store",
      content: [
        "Chandrapura Bokaro Steel city-828403",
      ],
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: "📧",
      title: "Email Us",
      content: ["support@shoehaven.com", "sales@shoehaven.com"],
      link: "mailto:support@shoehaven.com",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: "📱",
      title: "Call Us",
      content: ["+91 91427 96718", "Mon-Sat: 10AM-8PM"],
      link: "tel:+919142796718",
      color: "from-green-400 to-green-600",
    },
    {
      icon: "💬",
      title: "Live Chat",
      content: ["Available 24/7", "Average response: 2 mins"],
      color: "from-orange-400 to-orange-600",
    },
  ];

  return (
    <section
      className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <span className="text-gray-800">Get in </span>
            <span className="text-orange-500">Touch</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            We're here to help! Reach out to us through any of these channels
          </motion.p>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center text-white text-2xl mb-4 shadow-lg`}
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {method.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {method.title}
                </h3>
                <div className="space-y-1">
                  {method.content.map((line, i) => (
                    <p key={i} className="text-gray-600">
                      {method.link && i === 0 ? (
                        <a
                          href={method.link}
                          className="hover:text-orange-500 transition-colors"
                        >
                          {line}
                        </a>
                      ) : (
                        line
                      )}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Contact Form Section */}
        <motion.div
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="grid lg:grid-cols-2">
            {/* Left Side - Form */}
            <div className="p-8 lg:p-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                Send us a Message
              </h3>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24
                hours
              </p>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    variants={successVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="flex flex-col items-center justify-center py-20"
                  >
                    <motion.div
                      className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <span className="text-5xl">✅</span>
                    </motion.div>
                    <h4 className="text-2xl font-bold text-green-700 mb-2">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-gray-600 text-center">
                      We'll get back to you as soon as possible.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    className="space-y-6"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Name Field */}
                    <motion.div
                      animate={{
                        scale: focusedField === "name" ? 1.02 : 1,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <label className="block mb-2 font-medium text-gray-800">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField("")}
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </motion.div>

                    {/* Email Field */}
                    <motion.div
                      animate={{
                        scale: focusedField === "email" ? 1.02 : 1,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <label className="block mb-2 font-medium text-gray-800">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField("")}
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </motion.div>

                    {/* Message Field */}
                    <motion.div
                      animate={{
                        scale: focusedField === "message" ? 1.02 : 1,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <label className="block mb-2 font-medium text-gray-800">
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField("")}
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 h-32 resize-none focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-300"
                        placeholder="Tell us how we can help you..."
                      />
                    </motion.div>

                    <motion.button
                      type="submit"
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send Message
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* Right Side - Map/Visual */}
            <div className="relative bg-gradient-to-br from-orange-400 to-red-500 p-8 lg:p-12 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-white"
              >
                <h3 className="text-3xl font-bold mb-6">
                  Why Contact ShoeHaven?
                </h3>
                <div className="space-y-4">
                  {[
                    "Get personalized shoe recommendations",
                    "Track your order status",
                    "Request size exchanges",
                    "Wholesale inquiries welcome",
                    "24/7 customer support",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      <span className="text-2xl">✓</span>
                      <span className="text-lg">{item}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute top-10 right-10 w-32 h-32 bg-white opacity-10 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.div
                  className="absolute bottom-10 left-10 w-24 h-24 bg-white opacity-10 rounded-full"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    rotate: [360, 180, 0],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
