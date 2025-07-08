import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import Home from "./pages/Home";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";
import TestimonialsPage from "./pages/TestimonialsPage";
import Header from "./components/Header";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./context/CartContext";
import About from "./components/About";
import Contact from "./pages/Contact";
import Login from "./pages/LogIn";
import CheckoutPage from "./pages/CheckoutPage";
import PaymentPage from "./pages/PaymentPage";

const HomeContent = () => (
  <>
    <Home />
    <FeaturedProducts />
    {/* <TestimonialsPage /> */}
    <About />
    <Contact />
    <Footer />
  </>
);

// Enhanced Scroll Progress Component
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const location = useLocation();

  // Smooth the scroll animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Different gradients for different pages
  const getGradient = () => {
    switch (location.pathname) {
      case "/":
        return "from-orange-500 to-red-500";
      case "/shop":
        return "from-blue-500 to-purple-500";
      case "/about":
        return "from-green-500 to-teal-500";
      case "/contact":
        return "from-pink-500 to-rose-500";
      case "/cart":
        return "from-yellow-500 to-orange-500";
      default:
        return "from-orange-500 to-red-500";
    }
  };

  return (
    <>
      {/* Main scroll bar */}
      <motion.div
        className={`fixed top-0 left-0 right-0 h-1 bg-gradient-to-r ${getGradient()} z-[60] origin-left shadow-lg`}
        style={{
          scaleX,
        }}
      />

      {/* Glow effect */}
      <motion.div
        className={`fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${getGradient()} z-[59] origin-left blur-sm`}
        style={{
          scaleX,
        }}
      />
    </>
  );
};


const AppContent = () => {
  return (
    <>
      <ScrollProgress />
      <Header />
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/shop" element={<FeaturedProducts />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <CartProvider>
      <Router>
        <AppContent />
      </Router>
    </CartProvider>

    
  );
};

export default App;
