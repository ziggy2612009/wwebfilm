"use client";
import React, { useState } from "react";
import Image from "next/image";
import xx1 from "./xx1.png";
import jum from "./jum.jpg";
import mas from "./mas.png";
import JOK from "./JOK.jpg";
import sel from "./sel.jpg";

export default function Page() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedFilm, setSelectedFilm] = useState("");

  return (
    <div className="bg-gray-900 min-h-screen text-white">
    
      <nav className="sticky top-0 z-50 bg-gray-900 shadow-md">
        <div className="container mx-auto p-3 flex items-center justify-between">
          <Image src={xx1} alt="logo" width={50} height={50} className="object-contain" />

        
          <div className="hidden sm:block w-80 bg-gray-800 border mr-auto rounded-xl">
            <input
              type="text"
              placeholder="Cari film..."
              className="w-full p-2 bg-transparent outline-none text-white"
            />
          </div>

         
          <div className="flex gap-11 font-semibold">
            <h1 className="cursor-pointer hover:text-yellow-400">Home</h1>
            <h1 className="cursor-pointer hover:text-yellow-400">Tiket</h1>
            <h1 className="cursor-pointer hover:text-yellow-400">Info</h1>
          </div>
        </div>
      </nav>

     
      <div className="container mx-auto px-20 mt-10 gap-7 p-10 grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:px-5">

        {/* CARD 1 */}
        <div className="bg-gray-700 rounded-lg text-white flex flex-col w-full">
          <Image src={jum} alt="film1" className="rounded-t-lg w-full h-110" />
          <h1 className="font-bold mt-2 text-center">JUMBO</h1>
          <p className="text-xs w-11/12 font-sans mx-auto mt-1 mb-1 flex-grow">
            Jenis Film : Persahabatan, keunikan diri, dan keberanian menghadapi perundungan.
          </p>
          <button
            onClick={() => { setOpenModal(true); setSelectedFilm("JUMBO"); }}
            className="bg-gray-900 hover:bg-neutral-950 w-10/12 mx-3 p-2 rounded-md mt-auto mb-3 flex justify-center items-center"
          >
            Pesan Tiket
            <Image src={mas} alt="arrow" width={20} className="inline-block ml-2" />
          </button>
        </div>

        {/* CARD 2 */}
        <div className="bg-gray-700 rounded-lg text-white flex flex-col w-full">
          <Image src={JOK} alt="film2" className="rounded-t-lg w-full h-110" />
          <h1 className="font-bold mt-2 text-center">JOKER</h1>
          <p className="text-xs w-11/12 font-sans mx-auto mt-1 mb-1 flex-grow">
            Jenis Film : Kegilaan, trauma, kesepian, dan kebutuhan manusia untuk diakui.
          </p>
          <button
            onClick={() => { setOpenModal(true); setSelectedFilm("JOKER"); }}
            className="bg-gray-900 hover:bg-neutral-950 w-10/12 mx-3 p-2 rounded-md mt-auto mb-3 flex justify-center items-center"
          >
            Pesan Tiket
            <Image src={mas} alt="arrow" width={20} className="inline-block ml-2" />
          </button>
        </div>

        {/* CARD 3 */}
        <div className="bg-gray-700 rounded-lg text-white flex flex-col w-full">
          <Image src={sel} alt="film3" className="rounded-t-lg w-full h-110" />
          <h1 className="font-bold mt-2 text-center">SHELBY</h1>
          <p className="text-xs w-11/12 font-sans mx-auto mt-1 mb-1 flex-grow">
            Jenis Film : Kekuasaan, kejahatan terorganisir, keluarga, dan ambisi.
          </p>
          <button
            onClick={() => { setOpenModal(true); setSelectedFilm("SHELBY"); }}
            className="bg-gray-900 hover:bg-neutral-950 w-10/12 mx-3 p-2 rounded-md mt-auto mb-3 flex justify-center items-center"
          >
            Pesan Tiket
            <Image src={mas} alt="arrow" width={20} className="inline-block ml-2" />
          </button>
        </div>
      </div>

   
      {openModal && (
        <div onClick={() => setOpenModal(false)} className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div onClick={(e) => e.stopPropagation()} className="bg-white w-11/12 sm:w-96 p-5 rounded-lg shadow-lg text-black">
            <div className="flex justify-between mb-3">
              <h2 className="text-lg font-bold">Pesan Tiket — {selectedFilm}</h2>
              <button onClick={() => setOpenModal(false)}>✕</button>
            </div>

            <div className="space-y-3">
              <select className="w-full border p-2 rounded">
                <option>Pilih Jadwal</option><option>10:00</option><option>13:00</option><option>16:00</option><option>19:00</option>
              </select>
              <select className="w-full border p-2 rounded">
                <option>Pilih Kursi</option><option>A-1</option><option>A-2</option><option>B-1</option><option>B-2</option>
              </select>
              <input type="number" className="w-full border p-2 rounded" placeholder="Jumlah Tiket" />
              <input type="text" className="w-full border p-2 rounded" placeholder="Nama Pemesan" />
            </div>

            <button className="w-full bg-gray-900 hover:bg-black mt-4 py-2 rounded-md text-white">
              Pesan Sekarang
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
