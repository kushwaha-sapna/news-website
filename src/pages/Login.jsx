import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-2">
        
        {/* Left Side */}
        <div className="bg-red-600 text-white p-10 flex flex-col justify-center">
          <h1 className="text-5xl font-bold mb-4">
            GangaTV News
          </h1>

          <p className="text-lg text-red-100 mb-8">
            Stay updated with breaking news, sports, politics,
            entertainment, and local stories from around the world.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📰</span>
              <p>Latest Breaking News</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">⚡</span>
              <p>Real-Time Updates</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">🌎</span>
              <p>International Coverage</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">🏏</span>
              <p>Sports & Live Scores</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-10 md:p-14">
          <div className="max-w-md mx-auto">
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-gray-800">
                Welcome Back
              </h2>

              <p className="text-gray-500 mt-2">
                Login to access your personalized news feed.
              </p>
            </div>

            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input type="checkbox" />
                  Remember Me
                </label>

                <Link
                  to="/forgot-password"
                  className="text-red-600 text-sm hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition"
              >
                Login
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="border-t"></div>
              <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-3 text-gray-500 text-sm">
                OR
              </span>
            </div>

            {/* Social Login */}
            <div className="space-y-3">
              <button className="w-full border rounded-lg py-3 font-medium hover:bg-gray-50 transition">
                Continue with Google
              </button>

              <button className="w-full border rounded-lg py-3 font-medium hover:bg-gray-50 transition">
                Continue with Facebook
              </button>
            </div>

            <p className="text-center text-gray-600 mt-8">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-red-600 font-semibold hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;