import React, { useEffect } from "react";

const PaymentPage = () => {
  useEffect(() => {
    const checkoutData = JSON.parse(localStorage.getItem("checkoutData"));
    if (!checkoutData) {
      alert("Missing checkout data.");
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => {
      const options = {
        key: "rzp_test_YourTestKeyHere", // Replace with your Razorpay Test Key
        amount: 50000, // amount in paise (₹500.00)
        currency: "INR",
        name: "WalkNest",
        description: "Order Payment",
        image: "https://your-logo-url.com/logo.png",
        handler: function (response) {
          alert(
            "Payment Successful! Payment ID: " + response.razorpay_payment_id
          );
          localStorage.removeItem("checkoutData");
        },
        prefill: {
          name: checkoutData.name,
          email: checkoutData.email,
        },
        notes: {
          address: checkoutData.address,
        },
        theme: {
          color: "#0d9488",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    };

    document.body.appendChild(script);
  }, []);

  return (
    <section className="h-screen flex items-center justify-center bg-white text-lg text-gray-700">
      <p>Redirecting to Razorpay payment gateway...</p>
    </section>
  );
};

export default PaymentPage;
