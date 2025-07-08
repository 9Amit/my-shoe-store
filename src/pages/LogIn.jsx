import React, { useEffect, useState } from "react";
import { auth, provider, signInWithPopup, signOut } from "../firebase/firebase";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useAuth } from "../context/AuthContext";

const db = getFirestore();

const SignupLogin = () => {
  const { user } = useAuth(); // Use context instead of local state
  const [isLogin, setIsLogin] = useState(true);
  const [fields, setFields] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Save user info to Firestore
  const saveUserToDB = async (user, name = null) => {
    if (!user?.email) return;
    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      await setDoc(userRef, {
        name: name || user.displayName || "",
        email: user.email,
        photoURL: user.photoURL || "",
        createdAt: new Date(),
      });
    }
  };

  // Email/Password Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const result = await signInWithEmailAndPassword(
        auth,
        fields.email,
        fields.password
      );
      await saveUserToDB(result.user);
      // Remove setUser - auth state is managed by context
    } catch (err) {
      setError(err.message.replace("Firebase: ", ""));
    }
    setLoading(false);
  };

  // Email/Password Signup
  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        fields.email,
        fields.password
      );
      // Update displayName
      await updateProfile(userCred.user, { displayName: fields.name });
      await saveUserToDB(userCred.user, fields.name);
      // Remove setUser - auth state is managed by context
    } catch (err) {
      setError(err.message.replace("Firebase: ", ""));
    }
    setLoading(false);
  };

  // Google Login
  const handleGoogleLogin = async () => {
    setError("");
    try {
      const result = await signInWithPopup(auth, provider);
      await saveUserToDB(result.user);
      // Remove setUser - auth state is managed by context
    } catch (error) {
      setError("Failed to sign in with Google. Please try again.");
    }
  };

  // Logout
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // No need to setUser(null) - handled by context
      })
      .catch((err) => setError("Sign-out error: " + err.message));
  };

  const handleChange = (e) => {
    setFields((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  // Clear error and fields on view switch
  useEffect(() => {
    setError("");
    setFields({ name: "", email: "", password: "" });
  }, [isLogin]);

  return (
    <section className="py-16 bg-blue-50 min-h-screen flex justify-center items-center">
      <div className="max-w-sm w-full bg-white p-8 rounded-xl shadow-lg text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">
          {user
            ? `Welcome${user.displayName ? ", " + user.displayName : ""} 🎉`
            : isLogin
            ? "Login"
            : "Sign Up"}
        </h2>

        {user ? (
          <div>
            <img
              src={user.photoURL || "/profile_placeholder.png"}
              alt="User"
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <p className="text-gray-700 font-semibold mb-4">
              {user.displayName}
            </p>
            <p className="mb-4 text-sm text-gray-500">{user.email}</p>
            <button
              onClick={handleLogout}
              className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-medium"
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            {/* Email auth form */}
            <form
              className="space-y-4"
              onSubmit={isLogin ? handleLogin : handleSignup}
            >
              {!isLogin && (
                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    value={fields.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-400"
                  />
                </div>
              )}
              <div>
                <input
                  type="email"
                  name="email"
                  required
                  value={fields.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-400"
                  autoComplete="username"
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  required
                  value={fields.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-400"
                  autoComplete={isLogin ? "current-password" : "new-password"}
                />
              </div>
              {error && (
                <div className="text-red-600 mb-2 text-sm">{error}</div>
              )}
              <button
                type="submit"
                className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors ${
                  loading ? "opacity-60 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading
                  ? isLogin
                    ? "Logging in..."
                    : "Signing up..."
                  : isLogin
                  ? "Log In"
                  : "Sign Up"}
              </button>
            </form>

            <div className="my-4 text-gray-500">or</div>

            {/* Google Auth */}
            <button
              onClick={handleGoogleLogin}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-lg mb-4 flex items-center justify-center gap-2 transition-colors"
              disabled={loading}
            >
              <svg width={20} height={20} viewBox="0 0 48 48">
                <g>
                  <path
                    fill="#4285F4"
                    d="M43.6,20.5H42V20H24v8h11.3C34.3,32.4,29.6,36,24,36c-6.6,0-12-5.4-12-12 s5.4-12,12-12c3.1,0,5.9,1.1,8.1,3l6.1-6.1C34.1,5.5,29.3,3.5,24,3.5C12.9,3.5,4,12.4,4,23.5S12.9,43.5,24,43.5c11,0,20-8.9,20-20 C44,22.9,43.8,21.7,43.6,20.5z"
                  />
                  <path
                    fill="#34A853"
                    d="M6.3,14.8l6.6,4.8C14.5,16.2,18.9,12,24,12c3.1,0,5.9,1.1,8.1,3l6.1-6.1 C34.1,5.5,29.3,3.5,24,3.5c-7.1,0-13.1,4-16.4,9.8z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M24,44.5c5.6,0,10.3-1.8,13.8-4.8l-6.4-5.2c-2,1.4-4.6,2.2-7.4,2.2 c-5.5,0-10.2-3.7-11.9-8.8L6.3,33.2C9.6,39.2,16.2,44.5,24,44.5z"
                  />
                  <path
                    fill="#EA4335"
                    d="M43.6,20.5H42V20H24v8h11.3c-0.5,2.3-1.9,4.2-3.9,5.5l6.4,5.2c1.9-1.8,3.3-4.4,3.3-7.7 C44,22.9,43.8,21.7,43.6,20.5z"
                  />
                </g>
              </svg>
              Sign in with Google
            </button>

            {/* Switcher */}
            <div className="text-center mt-4">
              {isLogin ? (
                <>
                  <span className="text-gray-600">Not registered? </span>
                  <button
                    className="text-blue-600 hover:underline font-semibold"
                    onClick={() => setIsLogin(false)}
                  >
                    Sign Up
                  </button>
                </>
              ) : (
                <>
                  <span className="text-gray-600">Already registered? </span>
                  <button
                    className="text-blue-600 hover:underline font-semibold"
                    onClick={() => setIsLogin(true)}
                  >
                    Log In
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SignupLogin;
