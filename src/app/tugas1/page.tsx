"use client";
import React from "react";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-100 flex justify-center py-10">
      <form className="bg-white shadow-lg rounded-xl p-6 w-full max-w-4xl space-y-6">
        {/* Bagian Asal Sekolah */}
        <h2 className="text-lg font-bold text-gray-700">Asal Sekolah</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Nama Asal Sekolah*
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Provinsi Asal Sekolah*
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Kota/Kabupaten Asal Sekolah*
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Kecamatan Asal Sekolah*
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">
            Alamat Asal Sekolah*
          </label>
          <textarea
            className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
            required
          ></textarea>
        </div>

        {/* Bagian Data Orang Tua/Wali */}
        <h2 className="text-lg font-bold text-gray-700">Data Orang Tua/Wali</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Ayah/Wali */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Nama Ayah/Wali*
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                Profesi Ayah/Wali*
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                No Whatsapp Ayah/Wali*
              </label>
              <input
                type="tel"
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                Usia Ayah/Wali (Tahun)*
              </label>
              <input
                type="number"
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                Alamat Ayah/Wali*
              </label>
              <textarea
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
                required
              ></textarea>
            </div>
          </div>

          {/* Ibu/Wali */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Nama Ibu/Wali*
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                Profesi Ibu/Wali*
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                No Whatsapp Ibu/Wali*
              </label>
              <input
                type="tel"
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                Usia Ibu/Wali (Tahun)*
              </label>
              <input
                type="number"
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                Alamat Ibu/Wali*
              </label>
              <textarea
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
                required
              ></textarea>
            </div>
          </div>
        </div>

        {/* Tombol Submit */}
        <div className="flex justify-center pt-4">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-96 rounded-lg"
          >
            Kirim Data
          </button>
        </div>
      </form>
    </main>
  );
}
