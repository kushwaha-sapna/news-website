import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0b0f19] text-white mt-10 border-t border-white/10">
      
      {/* 👇 WIDTH CONTROL ADDED HERE */}
      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-red-500">
              The Ganga TV News
            </h2>

            <p className="text-gray-400 mt-3 text-sm">
              आपका अपना मंच — <span className="text-white">sach, sabse pehle.</span>
            </p>
          </div>

          {/* Sections */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Sections</h3>

            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/news-website/news/politics" className="hover:text-red-400">
                  Politics
                </Link>
              </li>

              <li>
                <Link to="/news-website/news/sports" className="hover:text-red-400">
                  Sports
                </Link>
              </li>

              <li>
                <Link to="/news-website/news/entertainment" className="hover:text-red-400">
                  Entertainment
                </Link>
              </li>

              <li>
                <Link to="/news-website/news/breaking" className="hover:text-red-400">
                  Breaking
                </Link>
              </li>

              <li>
                <Link to="/news-website/news/local" className="hover:text-red-400">
                  Local News
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow us</h3>

            <div className="flex gap-4 text-lg">
              <div className="p-2 rounded-full bg-white/5 hover:bg-blue-600 transition">
                <FaFacebookF />
              </div>

              <div className="p-2 rounded-full bg-white/5 hover:bg-sky-500 transition">
                <FaTwitter />
              </div>

              <div className="p-2 rounded-full bg-white/5 hover:bg-red-600 transition">
                <FaYoutube />
              </div>

              <div className="p-2 rounded-full bg-white/5 hover:bg-pink-500 transition">
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-white/10 pt-5 text-gray-500 text-sm flex flex-col md:flex-row justify-between">
          <p>© 2026 Ganga TV News. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built for modern news experience</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;