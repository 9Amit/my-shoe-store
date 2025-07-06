import React from "react";
import { useLocation } from "react-router-dom";

const Cart = () => {
  const location = useLocation();
  const { cart } = location.state || { cart: [] };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Cart
      </h2>
      {cart.length === 0 ? (
        <p className="text-center">No items in cart.</p>
      ) : (
        <ul>
          {cart.map((product, index) => (
            <li key={index} className="text-center">
              {product.name} - {product.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
