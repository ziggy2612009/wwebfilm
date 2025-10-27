import React from "react";
import Link from "next/link";
import Image from "next/image";
import xx1 from "./xx1.png";
import jum from "./jum.jpg";
import mas from "./mas.png";
import JOK from "./JOK.jpg";
import sel from "./sel.jpg";

export default function page() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-gray-900 shadow-md">
        <div className="container mx-auto p-3 flex items-center justify-between">
          <Image
            src={xx1}
            alt="logo"
            width={50}
            height={50}
            className="object-contain"
          />

          {/* Search */}
          <div className="hidden sm:block w-80 bg-gray-800 border mr-auto rounded-xl">
            <input
              type="text"
              placeholder="Cari film..."
              className="w-full p-2 bg-transparent outline-none text-white "
            />
          </div>

          {/* Menu */}
          <div className="flex gap-11 font-semibold">
            <h1 className="cursor-pointer hover:text-yellow-400">Home</h1>
            <h1 className="cursor-pointer hover:text-yellow-400">Tiket</h1>
            <h1 className="cursor-pointer hover:text-yellow-400">Info</h1>
          </div>
        </div>
      </nav>

      {/* FILM LIST */}
      <div className="container mx-auto px-20 mt-10 gap-7 p-10 grid  xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:px-5 md-px-5">
        {/* CARD 1 */}
        <div className="bg-gray-700 rounded-lg text-white flex flex-col w-full ">
          <Image src={jum} alt="film1" className="rounded-t-lg w-full h-110" />
          <h1 className="font-bold mt-2 text-center">JUMBO</h1>
          <h1 className="font-sans text-xs w-11/12 mx-auto mt-1 mb-1 flex-grow">
            Jenis Film : Persahabatan, keunikan diri, dan keberanian menghadapi
            perundungan.
          </h1>

          <Link href="/pesan">
            <button className="bg-gray-900 hover:bg-neutral-950 w-10/12 mx-3 p-2 rounded-md mt-auto mb-3 text-white flex justify-center items-center">
              Pesan Tiket
              <Image
                src={mas}
                alt="arrow"
                width={20}
                height={10}
                className="inline-block ml-2"
              />
            </button>
          </Link>
        </div>

        {/* CARD 2 */}
        <div className="bg-gray-700 rounded-lg text-white flex flex-col w-full ">
          <Image src={JOK} alt="film2" className="rounded-t-lg w-full h-110" />
          <h1 className="font-bold mt-2 text-center">JOKER</h1>
          <h1 className="font-sans text-xs w-11/12 mx-auto mt-1 mb-1 flex-grow">
            Jenis Film : Kegilaan, trauma, kesepian, dan kebutuhan manusia untuk
            diakui.
          </h1>
          <Link href="/pesan">
            <button className="bg-gray-900 hover:bg-neutral-950 w-10/12 mx-3 p-2 rounded-md mt-auto mb-3 text-white flex justify-center items-center">
              Pesan Tiket
              <Image
                src={mas}
                alt="arrow"
                width={20}
                height={10}
                className="inline-block ml-2"
              />
            </button>
          </Link>
        </div>

        {/* CARD 3 */}
        <div className="bg-gray-700 rounded-lg text-white flex flex-col w-full ">
          <Image src={sel} alt="film3" className="rounded-t-lg w-full h-110" />
          <h1 className="font-bold mt-2 text-center">SHELBY</h1>
          <h1 className="font-sans text-xs w-11/12 mx-auto mt-1 mb-1 flex-grow">
            Jenis Film : Kekuasaan, kejahatan terorganisir, keluarga, dan
            ambisi.
          </h1>
          <Link href="/pesan">
            <button className="bg-gray-900 hover:bg-neutral-950 w-10/12 mx-3 p-2 rounded-md mt-auto mb-3 text-white flex justify-center items-center">
              Pesan Tiket
              <Image
                src={mas}
                alt="arrow"
                width={20}
                height={10}
                className="inline-block ml-2"
              />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
