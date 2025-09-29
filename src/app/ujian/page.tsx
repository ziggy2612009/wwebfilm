import React from "react";
import { Metadata } from "next";
import { title } from "./ujian_544241071";

export const metadata: Metadata = {
  title: title.title,
  description: title.description,
};

export default function page() {
  return (
    <div>
    <div className="bg-gradient-to-br from-green-300 to-white min-h-screen flex flex-col items-center">
        <h1 className="text-green-500 text-5xl text-center mt-5">Ujian</h1>
      <div className="grid grid-cols-2 gap-10 items-center mt-20">
        <div className="bg-gray-500 w-50 h-70 rounded-lg shadow-xl/20"></div>
        <div className="bg-gray-500 w-50 h-70 rounded-lg shadow-xl/20"></div>
      </div>
      <div className="grid grid-cols-3 gap-10 items-center m-10">
        <div className="bg-gray-500 w-50 h-70 rounded-lg shadow-xl/20"></div>
        <div className="bg-gray-500 w-50 h-70 rounded-lg shadow-xl/20"></div>
        <div className="bg-gray-500 w-50 h-70 rounded-lg shadow-xl/20"></div>
      </div>
    </div>
    </div>
  );
}
