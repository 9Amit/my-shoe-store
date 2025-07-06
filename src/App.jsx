import React from "react";
import Home from "./pages/Home";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";
import TestimonialsPage from "./pages/TestimonialsPage";

const App = () => {
  return (
    <>
      <Home />;
      <FeaturedProducts />
      <TestimonialsPage/>
      <Footer/>
    </>
  ); 
};

export default App;
