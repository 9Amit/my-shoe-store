import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";
import TestimonialsPage from "./pages/TestimonialsPage";
import Header from "./components/Header";
import CartPage from "./pages/CartPage"; // <--- ADD THIS LINE
import { CartProvider } from "./context/CartContext"; // <-- Make sure this path matches your project
import About from "./components/About";
import Contact from "./pages/Contact";
import Login from "./pages/LogIn";
import CheckoutPage from "./pages/CheckoutPage";
import PaymentPage from "./pages/PaymentPage";

const HomeContent = () => (
  <>
    <Home />
    <FeaturedProducts />
    <TestimonialsPage />
    <About />
    <Contact/>
    <Footer />
  </>
);

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/shop" element={<FeaturedProducts />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/payment" element={<PaymentPage/>} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
