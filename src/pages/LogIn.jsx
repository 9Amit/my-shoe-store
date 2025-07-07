import React, { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true); // true: show login, false: show signup
  const [message, setMessage] = useState("");

  // For demo purposes only!
  const [users, setUsers] = useState([]); // [{email, password}]

  // Form state
  const [fields, setFields] = useState({ email: "", password: "", name: "" });

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  function resetFields() {
    setFields({ email: "", password: "", name: "" });
  }

  const handleLogin = (e) => {
    e.preventDefault();
    // Check if email/password match users (for demo: in-memory array)
    const found = users.find(
      (u) => u.email === fields.email && u.password === fields.password
    );
    if (found) {
      setMessage("Login successful! 🎉");
    } else {
      setMessage("Incorrect email or password.");
    }
    resetFields();
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Check if user exists (for demo)
    if (users.some((u) => u.email === fields.email)) {
      setMessage("User already registered. Please log in.");
    } else {
      setUsers([
        ...users,
        {
          name: fields.name,
          email: fields.email,
          password: fields.password,
        },
      ]);
      setMessage("Registration successful! Please log in.");
      setIsLogin(true);
    }
    resetFields();
  };

  return (
    <section className="py-16 bg-blue-50 min-h-screen">
      <div className="max-w-sm mx-auto px-4 bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
          {isLogin ? "Log In " : "Sign Up "}
        </h2>
        {message && (
          <div className="mb-4 text-center text-blue-600 font-semibold">
            {message}
          </div>
        )}

        {/* Login Form */}
        {isLogin ? (
          <form className="space-y-5" onSubmit={handleLogin}>
            <div>
              <label className="block mb-1 font-medium text-gray-800">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={fields.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-800">
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                value={fields.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
            >
              Log In
            </button>
            <div className="text-center mt-4">
              <span className="text-gray-600">Not registered? </span>
              <button
                type="button"
                onClick={() => {
                  setIsLogin(false);
                  setMessage("");
                  resetFields();
                }}
                className="text-blue-600 hover:underline font-semibold"
              >
                Sign Up
              </button>
            </div>
          </form>
        ) : (
          <form className="space-y-5" onSubmit={handleSignup}>
            <div>
              <label className="block mb-1 font-medium text-gray-800">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={fields.name}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-lg px-3 py-2 focus:outline-blue-400"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-800">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={fields.email}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-lg px-3 py-2 focus:outline-blue-400"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-800">
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                value={fields.password}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-lg px-3 py-2 focus:outline-blue-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
            >
              Sign Up
            </button>
            <div className="text-center mt-4">
              <span className="text-gray-600">Already registered? </span>
              <button
                type="button"
                onClick={() => {
                  setIsLogin(true);
                  setMessage("");
                  resetFields();
                }}
                className="text-blue-600 hover:underline font-semibold"
              >
                Log In
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default Login;
