import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const products = [
  {
    id: 1,
    name: "AirFlex Sneakers",
    price: "₹3,499",
    image:
      "https://img.tatacliq.com/images/i17/1348Wx2000H/MP000000022286015_1348Wx2000H_202405142142201.jpeg",
  },
  {
    id: 2,
    name: "Urban Walkers",
    price: "₹2,999",
    image:
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Elite Runners",
    price: "₹4,199",
    image:
      "https://www.tracerindia.com/cdn/shop/files/1_3bf9b2e5-0db8-4ff1-a9f6-d572373a2f2c.jpg?v=1706939523&width=990",
  },
  {
    id: 4,
    name: "Casual Canvas",
    price: "₹1,899",
    image:
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/b22f6527107547ff975f5e887c6effd0_9366/Advantage_Premium_Shoes_White_IF0119_01_standard.jpg",
  },
  {
    id: 5,
    name: "Street Runner",
    price: "₹2,499",
    image: "https://m.media-amazon.com/images/I/71o-ZGGPGwL._UY1000_.jpg",
  },
  {
    id: 6,
    name: "FlexStride Trainers",
    price: "₹3,199",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/3/404247308/VD/ET/SX/202342266/bersache-premium-sports-gym-tranding-stylish-running-shoes-1000x1000.jpg",
  },
  {
    id: 7,
    name: "MetroKicks",
    price: "₹2,299",
    image: "https://m.media-amazon.com/images/I/71uUhC0wNbL._SY695_.jpg",
  },
  {
    id: 8,
    name: "Puma Drift Cat",
    price: "₹4,899",
    image: "https://m.media-amazon.com/images/I/71uEBGZ+5HL._SY695_.jpg",
  },
];

const FeaturedProducts = () => {
  const { addToCart } = useCart();
  const [showPopup, setShowPopup] = useState(false);
  const [addedProduct, setAddedProduct] = useState(null);
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedProduct(product);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  const handleBuyNow = (product) => {
    addToCart(product);
    navigate("/cart");
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
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
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const popupVariants = {
    initial: {
      opacity: 0,
      y: 50,
      scale: 0.3,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "backOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  return (
    <section className="py-16 bg-gray-50 min-h-screen" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <motion.h2
          className="text-3xl font-bold text-center mb-10 text-gray-800"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Featured Products
        </motion.h2>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Product Image */}
              <motion.div
                className="relative overflow-hidden"
                whileHover="hover"
              >
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 object-cover"
                  variants={imageVariants}
                  loading="lazy"
                />
                {/* Overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-black"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Product Details */}
              <motion.div
                className="p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.h3
                  className="text-lg font-semibold text-gray-700"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {product.name}
                </motion.h3>
                <motion.p
                  className="text-blue-600 font-bold mt-1"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {product.price}
                </motion.p>

                {/* Buttons */}
                <motion.div
                  className="flex gap-2 mt-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.button
                    className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    onClick={() => handleAddToCart(product)}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Add to Cart
                  </motion.button>
                  <motion.button
                    className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
                    onClick={() => handleBuyNow(product)}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Buy Now
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Popup Notification */}
        <AnimatePresence>
          {showPopup && (
            <motion.div
              className="fixed bottom-4 right-4 bg-green-600 text-white px-5 py-3 rounded-lg shadow-lg z-50 flex items-center gap-3"
              variants={popupVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                ✓
              </motion.div>
              <div>
                <p className="font-semibold">Added to cart!</p>
                {addedProduct && (
                  <p className="text-sm opacity-90">{addedProduct.name}</p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Background Decoration */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-orange-200 rounded-full filter blur-3xl opacity-20 -z-10"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20 -z-10"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </section>
  );
};

export default FeaturedProducts;
