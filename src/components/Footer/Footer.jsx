import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  return (
    <footer className="bg-cover border-t border-gray-200 text-left bg-center text-white py-8">
      <div className=" mx-auto px-2">
        <div className="flex flex-wrap">
          {/* Company Info */}
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <Logo width="120px" />
              </div>
              <p className="text-sm text-gray-500">
                Empowering your journey. &copy; 2024. All Rights Reserved.
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <h3 className="text-gray-600 font-semibold text-sm uppercase tracking-wide mb-6">
              Company
            </h3>
            <ul>
              <li className="mb-4">
                <Link
                  to="/"
                  className="text-base text-gray-700 hover:text-gray-900 transition"
                >
                  Features
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="/"
                  className="text-base text-gray-700 hover:text-gray-900 transition"
                >
                  Pricing
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="/"
                  className="text-base text-gray-700 hover:text-gray-900 transition"
                >
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-base text-gray-700 hover:text-gray-900 transition"
                >
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <h3 className="text-gray-600 font-semibold text-sm uppercase tracking-wide mb-6">
              Support
            </h3>
            <ul>
              <li className="mb-4">
                <Link
                  to="/"
                  className="text-base text-gray-700 hover:text-gray-900 transition"
                >
                  Account
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="/"
                  className="text-base text-gray-700 hover:text-gray-900 transition"
                >
                  Help
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="/"
                  className="text-base text-gray-700 hover:text-gray-900 transition"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-base text-gray-700 hover:text-gray-900 transition"
                >
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <h3 className="text-gray-600 font-semibold text-sm uppercase tracking-wide mb-6">
              Legal
            </h3>
            <ul>
              <li className="mb-4">
                <Link
                  to="/"
                  className="text-base text-gray-700 hover:text-gray-900 transition"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="/"
                  className="text-base text-gray-700 hover:text-gray-900 transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-base text-gray-700 hover:text-gray-900 transition"
                >
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-6 text-center">
          <p className="text-sm text-gray-500">
            Crafted with ❤️ for an amazing web experience.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
