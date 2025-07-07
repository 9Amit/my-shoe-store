import React, { useState } from "react";

const CheckoutPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    paymentMethod: "upi",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleProceedToPayment = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.address) {
      alert("Please fill all fields.");
      return;
    }

    // Optional: Store data locally (if you want to use it later)
    localStorage.setItem("checkoutData", JSON.stringify(form));

    // Redirect to Razorpay payment link
    window.location.href = "https://rzp.io/rzp/wtlvAEZu"; // Replace with your actual Razorpay payment link
  };

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-xl mx-auto px-4 bg-white p-8 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Checkout
        </h2>
        <form className="space-y-5" onSubmit={handleProceedToPayment}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
          <textarea
            name="address"
            placeholder="Shipping Address"
            value={form.address}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows={3}
            required
          ></textarea>
          <select
            name="paymentMethod"
            value={form.paymentMethod}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="upi">UPI</option>
            <option value="card">Card</option>
            <option value="cod">Cash on Delivery</option>
          </select>

          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
            Proceed to Payment
          </button>
        </form>
      </div>
    </section>
  );
};

export default CheckoutPage;
