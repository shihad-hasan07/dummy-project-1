import React from "react";
import { FaMediumM, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // X (Twitter) logo

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <span className="text-pink-600">S</span>yron
          </h2>
          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            This is a great space to write text <strong>about your company</strong> and your
            services. You can use this space to go into a little more{" "}
            <a href="#" className="underline">
              details
            </a>{" "}
            about your company.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <span className="text-pink-500">◉</span> Links
          </h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Projects</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <span className="text-pink-500">◉</span> Categories
          </h3>
          <div className="flex flex-wrap gap-2 text-sm">
            {[
              "Entertainment",
              "Gadget",
              "Ideas",
              "Inspiration",
              "Lifestyle",
              "Music",
              "Travel",
              "Trending",
            ].map((tag, i) => (
              <span
                key={i}
                className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <span className="text-pink-500">◉</span> Newsletter
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Subscribe newsletter to get latest articles
          </p>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Email Address*"
              className="w-full px-4 py-2 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-pink-500 to-red-400 text-white px-5 py-2 rounded-r-full font-medium hover:opacity-90 transition"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      {/* Divider Line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-yellow-400 via-purple-400 to-green-400 mt-10"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 mt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>
          This website may collect data about you, use cookies, embed additional
          third-party tracking, and monitor your interaction with that embedded
          content
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        {/* Links */}
        <div className="flex gap-4 mb-4 md:mb-0">
          <a href="#">Privacy Policy</a>
          <span>|</span>
          <a href="#">Terms and Conditions</a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <span className="text-pink-600 font-semibold">
            Follow Us On Socials
          </span>
          <FaMediumM className="w-5 h-5 text-gray-600 hover:text-pink-500 cursor-pointer" />
          <FaXTwitter className="w-5 h-5 text-gray-600 hover:text-pink-500 cursor-pointer" />
          <FaInstagram className="w-5 h-5 text-gray-600 hover:text-pink-500 cursor-pointer" />
          <FaTelegramPlane className="w-5 h-5 text-gray-600 hover:text-pink-500 cursor-pointer" />
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-6 pb-6">
        Copyright & Design By @Rivaxstudio - 2025
      </div>
    </footer>
  );
};

export default Footer;
