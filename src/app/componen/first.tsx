import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-4 py-2 bg-sky-600 text-white">
      <div className="font-bold text-lg w-4 h-5 border-1 border-white"></div>

      <div className="flex items-center space-x-6">
        <button className="relative hover:text-gray-200 w-4 h-5 border-1 border-white">
          <span className="absolute -top-1 -right-2 bg-emerald-500 text-xs rounded-full px-1">
            3
          </span>
        </button>
        <button className="relative hover:text-gray-200 w-4 h-5 border-1 border-white">
          <span className="absolute -top-1 -right-2 bg-yellow-400 text-xs rounded-full px-1">
            5
          </span>
        </button>
        <button className="relative hover:text-gray-200 w-4 h-5 border-1 border-white">
          <span className="absolute -top-1 -right-2 bg-red-500 text-xs rounded-full px-1">
            2
          </span>
        </button>
        <div className="flex items-center space-x-2 cursor-pointer">
          <img
            src="./Buku.jpg"
            alt="User"
            className="w-8 h-8 rounded-full border"
          />
          <span className="text-sm font-medium">Alexander Pierce</span>
        </div>
      </div>
    </nav>
  );
}
