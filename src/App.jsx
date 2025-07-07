import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";
import TestimonialsPage from "./pages/TestimonialsPage";
import Header from "./components/Header";
import CartPage from "./pages/CartPage"; // <--- ADD THIS LINE
import { CartProvider } from "./context/CartContext"; // <-- Make sure this path matches your project

const HomeContent = () => (
  <>
    <Home />
    <FeaturedProducts />
    <TestimonialsPage />
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
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
