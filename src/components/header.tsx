import {
  Search,
  ShoppingCart,
  User,
  Facebook,
  Instagram,
  Youtube,
  UserRound,
} from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Cart } from './cart/cart';

export function Header() {
  const [openCart, setOpenCart] = React.useState(false);
  return (
    <>
      {/* Top Bar */}
      <div className="bg-green-700 text-white py-2 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span>Welcome to The Face Shop Vietnam</span>
          <div className="flex gap-4">
            <a href="#" className="hover:opacity-80">
              Order Tracking
            </a>
            <a href="#" className="hover:opacity-80">
              Blog
            </a>
            <a href="#" className="hover:opacity-80">
              VN
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          {/* Logo & Main Nav */}
          <div className="flex items-center justify-between mb-4">
            <div className="text-2xl font-bold text-green-700">
              THE FACE SHOP
            </div>

            {/* Search Bar */}
            <div className="flex-1 mx-8">
              <div className="relative flex items-center bg-gray-100 rounded-full px-4 py-2">
                <Search size={18} className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="flex-1 ml-2 bg-transparent outline-none text-sm"
                />
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <button className="relative">
                  <UserRound
                    strokeWidth="1"
                    size={30}
                    className="text-gray-700 hover:text-green-700"
                  />
                </button>
                <Link to="/" className="text-xs font-bold">
                  Đăng nhập
                </Link>
              </div>
              <button className="relative" onClick={() => setOpenCart(true)}>
                <ShoppingCart
                  strokeWidth="1"
                  size={30}
                  className="text-gray-700 hover:text-green-700"
                />
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>

          {/* Category Navigation */}
          <nav className="flex gap-6 text-sm font-medium text-gray-700 border-t border-gray-200 pt-3">
            <a href="#" className="hover:text-green-700">
              SKINCARE
            </a>
            <a href="#" className="hover:text-green-700">
              MAKEUP
            </a>
            <a href="#" className="hover:text-green-700">
              HAIR CARE
            </a>
            <a href="#" className="hover:text-green-700">
              BODY CARE
            </a>
            <a href="#" className="hover:text-green-700">
              TOOLS
            </a>
            <a href="#" className="hover:text-green-700">
              GIFT SETS
            </a>
            <a href="#" className="hover:text-green-700">
              SALE
            </a>
          </nav>
        </div>
      </header>
      <Cart open={openCart} onClose={() => setOpenCart(false)} />
    </>
  );
}
