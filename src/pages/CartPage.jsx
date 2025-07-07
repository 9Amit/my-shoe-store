import React from "react";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  function getTotal() {
    return cart
      .reduce(
        (total, item) =>
          total + Number(item.price.replace(/[^\d]/g, "")) * item.quantity,
        0
      )
      .toLocaleString("en-IN", { style: "currency", currency: "INR" });
  }

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">
          Your Cart
        </h2>
        {cart.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <>
            <ul>
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between border-b py-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 object-cover rounded"
                    />
                    <div>
                      <div className="font-bold text-gray-800">{item.name}</div>
                      <div className="text-blue-600 font-semibold">
                        {item.price}
                      </div>
                      <div className="text-gray-500">Qty: {item.quantity}</div>
                    </div>
                  </div>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="text-right text-lg font-bold mt-8">
              Total: {getTotal()}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default CartPage;
