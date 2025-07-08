/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import kid from "../assets/kid_icon.png";
import men from "../assets/men_icon.png";
import women from "../assets/woman_icon.png";
import sale from "../assets/sale_icon.png";


const products = [
  {
    id: 1,
    name: "AirFlex Sneakers",
    price: "₹3,499",
    category: "men",
    originalPrice: "₹4,999",
    onSale: true,
    image:
      "https://img.tatacliq.com/images/i17/1348Wx2000H/MP000000022286015_1348Wx2000H_202405142142201.jpeg",
  },
  {
    id: 2,
    name: "Urban Walkers",
    price: "₹2,999",
    category: "men",
    image:
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Elite Runners",
    price: "₹4,199",
    category: "women",
    image: "https://m.media-amazon.com/images/I/716sGzPyhyL._SY695_.jpg",
  },
  {
    id: 4,
    name: "Casual Canvas",
    price: "₹1,899",
    category: "kids",
    originalPrice: "₹2,499",
    onSale: true,
    image:
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/b22f6527107547ff975f5e887c6effd0_9366/Advantage_Premium_Shoes_White_IF0119_01_standard.jpg",
  },
  {
    id: 5,
    name: "Street Runner",
    price: "₹2,499",
    category: "women",
    image: "https://m.media-amazon.com/images/I/71biMJRBPHL._SY695_.jpg",
  },
  {
    id: 6,
    name: "FlexStride Trainers",
    price: "₹3,199",
    category: "men",
    originalPrice: "₹3,999",
    onSale: true,
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/3/404247308/VD/ET/SX/202342266/bersache-premium-sports-gym-tranding-stylish-running-shoes-1000x1000.jpg",
  },
  {
    id: 7,
    name: "MetroKicks",
    price: "₹2,299",
    category: "kids",
    image: "https://m.media-amazon.com/images/I/71uUhC0wNbL._SY695_.jpg",
  },
  {
    id: 8,
    name: "Puma Drift Cat",
    price: "₹4,899",
    category: "women",
    originalPrice: "₹5,999",
    onSale: true,
    image: "https://m.media-amazon.com/images/I/6105oib1+EL._SY695_.jpg",
  },
];

const FeaturedProducts = () => {
  const { addToCart } = useCart();
  const [showPopup, setShowPopup] = useState(false);
  const [addedProduct, setAddedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

 
  const categories = [
    {
      id: "all",
      name: "All",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zM8 6a2 2 0 114 0v1H8V6z" />
        </svg>
      ),
    },
    {
      id: "men",
      name: "Men",
      icon: <img src={men} alt="men" className="w-5 h-5 object-contain" />,
    },
    {
      id: "women",
      name: "Women",
      icon: <img src={women} alt="women" className="w-5 h-5 object-contain" />,
    },
    {
      id: "kids",
      name: "Kids",
      icon: <img src={kid} alt="Kids" className="w-5 h-5 object-contain" />,
    },
    {
      id: "sale",
      name: "Sale",
      icon: <img src={sale} alt="Sale" className="w-5 h-5 object-contain" />,
    },
  ];

  // Filter products based on selected category
  const filteredProducts = products.filter((product) => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "sale") return product.onSale;
    return product.category === selectedCategory;
  });

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

  const categoryVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
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

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category.id
                  ? "bg-orange-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-orange-100 shadow-md"
              }`}
              variants={categoryVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm sm:text-base">{category.icon}</span>
              <span className="text-sm sm:text-base">{category.name}</span>
              {category.id === "sale" && (
                <motion.span
                  className="ml-1 text-xs bg-red-500 text-white px-2 py-1 rounded-full"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  HOT
                </motion.span>
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow relative"
              >
                {/* Sale Badge */}
                {product.onSale && (
                  <motion.div
                    className="absolute top-2 right-2 z-10 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    SALE
                  </motion.div>
                )}

                {/* Product Image */}
                <motion.div
                  className="relative overflow-hidden"
                  whileHover="hover"
                >
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 sm:h-56 md:h-60 lg:h-64 object-cover object-center"
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
                    className="text-base sm:text-lg md:text-xl font-semibold text-gray-700"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {product.name}
                  </motion.h3>

                  {/* Price Section */}
                  <motion.div
                    className="mt-1 flex items-center gap-2"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <p className="text-orange-600 font-bold text-sm sm:text-base md:text-lg">
                      {product.price}
                    </p>
                    {product.originalPrice && (
                      <p className="text-gray-400 line-through text-sm">
                        {product.originalPrice}
                      </p>
                    )}
                  </motion.div>

                  {/* Category Badge */}
                  <motion.span
                    className="inline-block mt-2 px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full capitalize"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    {product.category}
                  </motion.span>

                  {/* Buttons */}
                  <motion.div
                    className="flex flex-col sm:flex-row gap-2 mt-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <motion.button
                      className="flex-1 bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors text-sm sm:text-base"
                      onClick={() => handleAddToCart(product)}
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      Add to Cart
                    </motion.button>
                    <motion.button
                      className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base"
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
        </AnimatePresence>

        {/* No Products Message */}
        {filteredProducts.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-2xl text-gray-500">
              No products found in this category
            </p>
            <p className="text-gray-400 mt-2">
              Please check back later for new additions!
            </p>
          </motion.div>
        )}

        {/* Popup Notification */}
        <AnimatePresence>
          {showPopup && (
            <motion.div
              className="fixed bottom-4 right-4 bg-green-600 text-white px-5 py-3 rounded-lg shadow-lg z-50 flex items-center gap-3 max-w-xs"
              variants={popupVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="text-2xl"
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