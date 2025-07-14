import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  // Track selected sizes
  const [selectedSizes, setSelectedSizes] = useState({});

  function getTotal() {
    return cart
      .reduce(
        (total, item) =>
          total + Number(item.price.replace(/[^\d]/g, "")) * item.quantity,
        0
      )
      .toLocaleString("en-IN", { style: "currency", currency: "INR" });
  }

  const handleSizeChange = (itemId, size) => {
    setSelectedSizes((prev) => ({ ...prev, [itemId]: size }));
  };

  const allSizesSelected = cart.every((item) => selectedSizes[item.id]);

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
                      <div className="text-orange-600 font-semibold">
                        {item.price}
                      </div>
                      <div className="text-gray-500">Qty: {item.quantity}</div>

                      {/* Shoe Size Selection */}
                      <div className="mt-2">
                        <label className="text-sm text-gray-600 mr-2">
                          Select Size:
                        </label>
                        <select
                          className="border rounded px-2 py-1"
                          value={selectedSizes[item.id] || ""}
                          onChange={(e) =>
                            handleSizeChange(item.id, e.target.value)
                          }
                        >
                          <option value="">--Select--</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                        </select>
                      </div>
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

            {/* Proceed Button */}
            <div className="text-right mt-4">
              <button
                onClick={() => navigate("/checkout")}
                className={`${
                  allSizesSelected
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-gray-400 cursor-not-allowed"
                } text-white font-semibold px-4 py-2 rounded`}
                disabled={!allSizesSelected}
              >
                Proceed to Checkout
              </button>
              {!allSizesSelected && (
                <p className="text-sm text-red-600 mt-2">
                  Please select sizes for all items to proceed.
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default CartPage;
  