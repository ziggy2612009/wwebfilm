import Link from "next/link";
import React from "react";
// import Navbar from "./";

const Navbar = () => {
  return (
    <>
      <nav className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className="text-white text-2xl font-bold hover:text-indigo-600">
                  Logo
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center"></div>
            </div>
          </div>
        </div>
      </nav>
      <div>
          <h1 className="logo text-black  p-3 ">Ninja list</h1>
        </div>
        <Link href="/" className="text-black p-3">Home</Link>
        <Link href="/about" className="text-black p-3">About</Link>
        <Link href="/ninjas" className="text-black p-3">ninja listing</Link>
    </>
    // <nav>
    //   <div>
    //     <h1 className="logo text-black">Ninja list</h1>
    //   </div>
    //   <Link href="/">Home</Link>
    //   <Link href="/about">About</Link>
    //   <Link href="/ninjas">ninja listing</Link>
    // </nav>
  );
};

export default Navbar;
