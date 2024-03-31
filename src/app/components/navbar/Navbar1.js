import { useState } from "react";
import { FiUser, FiShoppingCart } from "react-icons/fi";
import { HiOutlineUserAdd } from "react-icons/hi";

const Navbar1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-600 py-4 px-4 md:px-10 relative z-10">
      <div className="container mx-auto flex items-center justify-between">
        {/* Flipkart Logo and Title */}
        <div className="flex items-center cursor-pointer">
          <img
            className="h-8"
            src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_4ee2f9.png"
            alt="Flipkart"
          />
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Search Bar */}
        <div className="hidden md:relative md:w-1/2 md:block">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="bg-white px-4 py-2 rounded-md w-full focus:outline-none"
          />
          <button className="absolute right-0 top-0 mt-3 mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 15l5-5m0 0l-5-5m5 5h-12"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 right-0 bg-white rounded-md shadow-lg p-4 z-20">
            <div className="flex flex-col space-y-4">
              {/* Login Icon */}
              <div className="flex items-center cursor-pointer">
                <FiUser className="h-6 w-6 text-blue-600 cursor-pointer" />
                <span className="text-blue-600 ml-2">Login</span>
              </div>

              {/* Cart Icon */}
              <div className="flex items-center cursor-pointer">
                <FiShoppingCart className="h-6 w-6 text-blue-600 cursor-pointer" />
                <span className="text-blue-600 ml-2">Cart</span>
              </div>

              {/* Become a Seller Icon */}
              <div className="flex items-center cursor-pointer">
                <HiOutlineUserAdd className="h-6 w-6 text-blue-600 cursor-pointer" />
                <span className="text-blue-600 ml-2">Become a Seller</span>
              </div>
            </div>
          </div>
        )}

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          {/* Login Icon */}
          <div className="flex items-center cursor-pointer space-x-2">
            <FiUser className="h-6 w-6 text-white cursor-pointer" />
            <span className="text-white">Login</span>
          </div>

          {/* Cart Icon */}
          <div className="flex items-center cursor-pointer space-x-2">
            <FiShoppingCart className="h-6 w-6 text-white cursor-pointer" />
            <span className="text-white">Cart</span>
          </div>

          {/* Become a Seller Icon */}
          <div className="flex items-center cursor-pointer space-x-2">
            <HiOutlineUserAdd className="h-6 w-6 text-white cursor-pointer" />
            <span className="text-white ml-1">Become a Seller</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
