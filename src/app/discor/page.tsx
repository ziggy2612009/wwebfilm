import React from "react";

export default function DiskonUI() {
  return (
    <div className="flex justify-center gap-6 bg-gray-100 min-h-screen p-10">

      
      <div className="bg-white p-6 rounded-lg h-100 shadow-md w-72 text-center">
        <h1 className="text-lg text-black font-bold mb-4">Aplikasi Perhitungan Diskon</h1>

        <input
          type="text"
          placeholder="Masukan nama barang"
          className="w-full border text-black border-gray-300 rounded px-3 py-2 mb-2"
        />
        <input
          type="text"
          placeholder="Masukan kategori barang"
          className="w-full border text-black border-gray-300 rounded px-3 py-2 mb-2"
        />
        <input
          type="text"
          placeholder="Masukan harga barang"
          className="w-full border text-black border-gray-300 rounded px-3 py-2 mb-2"
        />
        <input
          type="text"
          placeholder="Masukan diskon barang"
          className="w-full border text-black border-gray-300 rounded px-3 py-2 mb-3"
        />

        <button className="w-full bg-blue-700 text-white py-2 rounded mb-2">
          Hitung
        </button>
        <button className="w-full bg-red-700 text-white py-2 rounded">
          Bersih
        </button>
      </div>

   
      <div className="bg-white p-6 rounded-lg h-100 shadow-md w-72 text-center">
        <h1 className="text-lg text-black font-bold mb-4">Aplikasi Perhitungan Diskon</h1>

        <input
          type="text"
          value="Susu "
          className="w-full border text-black border-gray-300 rounded px-3 py-2 mb-2"
          readOnly
        />
        <input
          type="text"
          value="Minuman"
          className="w-full border text-black border-gray-300 rounded px-3 py-2 mb-2"
          readOnly
        />
        <input
          type="text"
          value="6000"
          className="w-full border text-black border-gray-300 rounded px-3 py-2 mb-2"
          readOnly
        />
        <input
          type="text"
          value="10"
          className="w-full border text-black border-gray-300 rounded px-3 py-2 mb-3"
          readOnly
        />

        <button className="w-full bg-blue-700 text-white py-2 rounded mb-2">
          Hitung
        </button>
        <button className="w-full bg-red-700 text-white py-2 rounded">
          Bersih
        </button>
      </div>

      {/* <div className="bg-white p-6 h-75 rounded-lg shadow-md w-72 text-center">
        <h1 className="text-lg text-black font-bold mb-4">Aplikasi Perhitungan Diskon</h1>

        <p className="text-left text-black mb-1">
          <strong>Nama Barang:</strong> Susu 
        </p>
        <p className="text-left text-black mb-1">
          <strong>Kategori Barang:</strong> Minuman
        </p>
        <p className="text-left text-black mb-1">
          <strong>Nilai Diskon:</strong> 600.00
        </p>
        <p className="text-left text-black mb-4">
          <strong>Total Harga:</strong> 5500.00
        </p>

        <button className="w-full bg-orange-500 text-white py-2 rounded">
          Kembali
        </button>
      </div> */}

    </div>
  );
}
