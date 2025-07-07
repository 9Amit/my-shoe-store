import React, { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    
  }

  return (
    <section className="py-16 bg-blue-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-blue-700 mb-4 text-center">
          Contact Us
        </h2>
        <p className="mb-8 text-gray-700 text-center text-lg">
          We’d love to hear from you! Fill in the form below or reach out using
          the info provided.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            {submitted ? (
              <div className="text-green-700 font-semibold text-center">
                Thank you for reaching out! We’ll get back to you soon.
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block mb-1 font-medium text-gray-800">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border-gray-300 rounded-lg px-3 py-2 focus:outline-blue-400"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium text-gray-800">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full border-gray-300 rounded-lg px-3 py-2 focus:outline-blue-400"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium text-gray-800">
                    Message
                  </label>
                  <textarea
                    required
                    className="w-full border-gray-300 rounded-lg px-3 py-2 h-28 focus:outline-blue-400"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <h3 className="font-bold text-xl text-blue-700 mb-2">
                Store Address
              </h3>
              <p className="text-gray-700">
                ShoeHaven
                <br />
                123 Comfort Avenue
                <br />
                New Delhi, India
              </p>
            </div>
            <div className="mb-6">
              <h3 className="font-bold text-xl text-blue-700 mb-2">Email</h3>
              <a
                href="mailto:support@shoehaven.com"
                className="text-blue-600 hover:underline"
              >
                support@shoehaven.com
              </a>
            </div>
            <div>
              <h3 className="font-bold text-xl text-blue-700 mb-2">Phone</h3>
              <a
                href="tel:+919876543210"
                className="text-gray-800 hover:text-blue-600"
              >
                +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
