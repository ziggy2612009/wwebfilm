import React from "react";

export default function Page() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-65 bg-gradient-to-br from-green-400 to-amber-50  p-5 border-r border-gray-200">
        <div className="mb-7">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Contoh</h2>
        </div>

        <div></div>
      </div>

      {/* tubuhnya */}
      <div className="flex-1 bg-gradient-to-br from-green-300 to-white p-8">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl">
              <div className="bg-white rounded-2xl shadow-lg p-5  shadow-blue-300 flex flex-col items-center ">
                <img
                  src="./Buku.jpg"
                  className="w-40 h-40 object-cover rounded-lg mb-3"
                  alt="Book cover"
                />
              </div>

              <div className="bg-white rounded-2xl shadow-lg shadow-blue-300 p-5 flex flex-col items-center ">
                <img
                  src="./Buku.jpg"
                  className="w-40 h-40 object-cover rounded-lg mb-3"
                  alt="Book cover"
                />
              </div>

              <div className="bg-white rounded-2xl shadow-lg  shadow-blue-300 p-5 flex flex-col items-center ">
                <img
                  src="./Buku.jpg"
                  className="w-40 h-40 object-cover rounded-lg mb-3"
                  alt="Book cover"
                />
              </div>

              <div className="bg-white rounded-2xl shadow-lg shadow-blue-300 p-5 flex flex-col items-center ">
                <img
                  src="./Buku.jpg"
                  className="w-40 h-40 object-cover rounded-lg mb-3"
                  alt="Book cover"
                />
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-5 shadow-blue-300 flex flex-col items-center ">
                <img
                  src="./Buku.jpg"
                  className="w-40 h-40 object-cover rounded-lg mb-3"
                  alt="Book cover"
                />
              </div>

              <div className="bg-white rounded-2xl shadow-lg shadow-blue-300 p-5 flex flex-col items-center ">
                <img
                  src="./Buku.jpg"
                  className="w-40 h-40 object-cover rounded-lg mb-3"
                  alt="Book cover"
                />
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-5  shadow-blue-300 flex flex-col items-center ">
                <img
                  src="./Buku.jpg"
                  className="w-40 h-40 object-cover rounded-lg mb-3"
                  alt="Book cover"
                />
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-5  shadow-blue-300 flex flex-col items-center ">
                <img
                  src="./Buku.jpg"
                  className="w-40 h-40 object-cover rounded-lg mb-3"
                  alt="Book cover"
                />
              </div>

              <div className="bg-white rounded-2xl shadow-lg shadow-blue-300 p-5 flex flex-col items-center">
                <img
                  src="./Buku.jpg"
                  className="w-40 h-40 object-cover rounded-lg mb-3"
                  alt="Book cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// const readline = require("readline-sync");
// let Nomor = readline.questionInt("Masukan angka: ");
// if (Nomor % 2 === 0) {
//   console.log(`Angka  adalah bilangan genap.`);
// } else {
//   console.log(`Angka  adalah bilangan ganjil.`);
// }
