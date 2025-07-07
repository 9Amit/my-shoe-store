import React, { useState } from "react";
import { useCart } from "../context/CartContext";

// You can extract this array to its own file if you want!
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
];

const FeaturedProducts = () => {
  const { addToCart } = useCart();
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = (product) => {
    addToCart(product);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 1000);
  };

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-700">
                  {product.name}
                </h3>
                <p className="text-blue-600 font-bold mt-1">{product.price}</p>
                <button
                  className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        {showPopup && (
          <div className="fixed bottom-4 right-4 bg-green-600 text-white px-5 py-2 rounded shadow-lg z-50 transition">
            Added to cart!
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
