import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative w-full h-[90vh] bg-gray-100">
      <img
        src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg"
        alt="Hero Shoe"
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-white text-5xl md:text-6xl font-bold mb-4">
          Step Into Comfort
        </h2>
        <p className="text-white text-xl md:text-2xl mb-6 max-w-xl">
          Discover our latest collection of stylish and comfy shoes for all
          occasions.
        </p>
        <Link to="/shop">
          <a className="bg-orange-700 text-white px-6 py-3 rounded-lg text-lg hover:bg-red-800 transition">
            Shop Now
          </a>
        </Link>

        
      </div>
    </section>
  );
};

export default Hero;
