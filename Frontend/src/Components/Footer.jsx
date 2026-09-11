import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:px-12">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold">
              Ghar<span className="text-yellow-400">Vyapar</span>
            </h2>

            <p className="mt-4 max-w-md leading-7 text-gray-400">
              Discover beautiful properties in the locations you love.
              Find your next home, apartment or investment property with
              ease.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 transition hover:bg-yellow-400 hover:text-black"
              >
                f
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 transition hover:bg-yellow-400 hover:text-black"
              >
                X
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 transition hover:bg-yellow-400 hover:text-black"
              >
                in
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 transition hover:bg-yellow-400 hover:text-black"
              >
                ◎
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>

            <ul className="mt-5 space-y-3 text-gray-400">
              <li>
                <Link
                  to="/"
                  className="transition hover:text-yellow-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/property"
                  className="transition hover:text-yellow-400"
                >
                  Properties
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="transition hover:text-yellow-400"
                >
                  About Us
                </Link>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-yellow-400"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold">Explore</h3>

            <ul className="mt-5 space-y-3 text-gray-400">
              <li className="transition hover:text-yellow-400">
                Buy Property
              </li>

              <li className="transition hover:text-yellow-400">
                Rent Property
              </li>

              <li className="transition hover:text-yellow-400">
                Luxury Homes
              </li>

              <li className="transition hover:text-yellow-400">
                Investment Properties
              </li>
            </ul>
          </div>

        </div>

        {/* Contact Box */}
        <div className="mt-12 grid grid-cols-1 gap-4 border-t border-gray-800 pt-8 sm:grid-cols-3">

          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500">
              Email
            </p>
            <p className="mt-1 font-medium">
              hello@homefinder.com
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500">
              Phone
            </p>
            <p className="mt-1 font-medium">
              +91 98765 43210
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500">
              Location
            </p>
            <p className="mt-1 font-medium">
              New Delhi, India
            </p>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-sm text-gray-500 sm:px-8 md:flex-row md:items-center md:justify-between md:px-12">

          <p>
            © 2026 HomeFinder. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a href="#" className="transition hover:text-white">
              Privacy Policy
            </a>

            <a href="#" className="transition hover:text-white">
              Terms & Conditions
            </a>
          </div>

        </div>
      </div>

    </footer>
  );
}

export default Footer;