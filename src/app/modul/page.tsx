import React from "react";

export default function Page() {
  return (
    <div className="bg-gradient-to-br h-screen from-green-300 to-white text-white flex flex-col">
      <div className="bg-emerald-500 w-full p-4 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-bold">Kalkulator </h1>
      </div>
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-2xl p-3">Masukkan Angka</h1>
        <div className="  rounded-lg p-2 w-96">
          <input className="w-full p-2 border-2  rounded " />
        </div>
        <div className="grid grid-cols-4 gap-4 p-2 text-2xl w-96">
          <button className="bg-green-400 hover:bg-emerald-100 p-2 rounded-lg shadow-md">
            7
          </button>
          <button className="bg-green-400 hover:bg-emerald-100 rounded-lg shadow-md">
            8
          </button>
          <button className="bg-green-400 hover:bg-emerald-100 p-2 rounded-lg shadow-md">
            9
          </button>
          <button className="bg-amber-300 hover:bg-amber-500 p-2 rounded-lg shadow-md">
            ÷
          </button>
          <button className="bg-green-400 hover:bg-emerald-300 p-2 rounded-lg shadow-md">
            4
          </button>
          <button className="bg-green-400 hover:bg-emerald-300 p-2 rounded-lg shadow-md">
            5
          </button>
          <button className="bg-green-400 hover:bg-emerald-300 p-2 rounded-lg shadow-md">
            6
          </button>
          <button className="bg-amber-300 hover:bg-amber-500 p-2 rounded-lg shadow-md">
            x
          </button>
          <button className="bg-green-400 hover:bg-emerald-300 p-2 rounded-lg shadow-md">
            1
          </button>
          <button className="bg-green-400 hover:bg-emerald-300 p-2 rounded-lg shadow-md">
            2
          </button>
          <button className="bg-green-400 hover:bg-emerald-300 p-2 rounded-lg shadow-md">
            3
          </button>
          <button className="bg-amber-300 hover:bg-amber-500 p-2 rounded-lg shadow-md">
            -
          </button>
          <button className="bg-green-400 hover:bg-emerald-300 p-2 rounded-lg shadow-md">
            0
          </button>
          <button className="bg-green-400 hover:bg-emerald-300 p-2 rounded-lg shadow-md">
            .
          </button>
          <button className="bg-amber-300 hover:bg-amber-500 p-2 rounded-lg shadow-md">
            =
          </button>
          <button className="bg-amber-300 hover:bg-amber-500 p-2 rounded-lg shadow-md">
            +
          </button>
        </div>
      </div>
         
    </div>
  );
}


