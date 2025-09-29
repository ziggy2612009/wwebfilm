import React from "react";
import Image from "next/image";
import seacrh from "./search.png";
import Cat from "@/app/Cat/page";
import gstatistik from "./gstatistik.png";

export default function page() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <Cat />
      <div>
        <div className="text-3xl font-bold text-white mb-6 p-4 ">
          Dasbor Monitor Jaringan
          <p className="text-sm text-gray-500">
            Status koneksi internet dan perangkat lokal secar real time.
          </p>
        </div>
      </div>

      <div>
        <div>
          <div className="flex items-center space-y-3 gap-4  px-4 py-4 bg-gray-800 text-white rounded-lg mx-4">
            <p className="text-sm text-white mt-2">Rentang IP Lokal (CIDR) :</p>
            <div className="grid grid-cols-4 gap-4">
              <div className="  w-50 h-10 bg-gray-400/45 backdrop-blur-md rounded-lg  text-sm">
                <p className="mt-2.5 font-sans px-4">192.169.0.0/21</p>
              </div>
              <div className=" flex items-center justify-between w-47 h-10 bg-indigo-600 rounded-lg ">
                <Image
                  src={seacrh}
                  alt="seacrh"
                  width={25}
                  height={25}
                  className="  justify-between ml-4 "
                ></Image>
                <p className="   font-sans mr-6">Mulai scan lokal</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 my-4 mt-7">
          {/*ktak 1 */}
          <div className="  w-71 h-30 px-15 py-9 bg-emerald-950 rounded-lg mx-4">
            <div className="text-xs font-sans text-white ">
              Status internet
              <p className="text-2xl font-bold text-green-600">Online</p>
            </div>
          </div>
          {/*ktak 2 */}
          <div className="  w-71 h-30 px-15 py-9 bg-gray-800 rounded-lg mx-4">
            <div className="text-xs font-sans text-white ">
              Packet Loss
              <div className="flex font-bold gap-1">
                <p className="text-2xl  text-white">0.7</p>
                <p className="text-xl text-white mt-1">ms</p>
              </div>
            </div>
          </div>
          {/*ktak 3 */}
          <div className="   w-71 h-30 px-15 py-9 bg-gray-800 rounded-lg mx-4">
            <div className="text-xs font-sans text-white ">
              Latensi internet
              <div className="flex font-bold gap-1">
                <p className="text-2xl text-white">0.7</p>
                <p className="text-xl text-white mt-1">%</p>
              </div>
            </div>
          </div>
          {/*ktak 4 */}
          <div className="   w-71  h-30 px-15 py-9 bg-gray-800 rounded-lg mx-4">
            <div className="text-xs font-sans text-white ">
              Latensi internet
              <div className="flex font-bold gap-1">
                <p className="text-2xl text-white">0.7</p>
                <p className="text-xl text-white mt-1">%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex grid-cols-3 py-7  gap-5 my-1">
        <div className="flex justify-between items-center space-y-3 gap-4  w-185 h-96 py-5 bg-gray-800 text-white rounded-lg mx-4">
          <Image
            src={gstatistik}
            alt="gstatistik"
            width={750}
            height={500}
            className="  justify-between rounded-lg  "
          ></Image>
        </div>

        <div className=" mt-9 w-100 h-28 py-5 bg-gray-800 text-white rounded-lg mx-4">
          <p className="text-xl text-white px-4">Top 20 Pengguna internet</p>
          <div>
            <p className=" font-sans text-gray-500 ml-27 mt-5">
              tidak ada perangkat online
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="justify-between items-center space-y-3 gap-4 mb-3 w-306 h-56 mt-4 bg-gray-800 text-white rounded-lg mx-4">
          <div className="mt-5 py-1  text-white mx-4 flex justify-center items-center">
            <p>Nama-Nama</p>
          </div>

          <div className="mt-5  w-297 h-36 py-5 bg-gray-500 text-white rounded-lg mx-4"><p className="flex justify-center items-center mt-9">A.AYDIN KHALFAN ZIGGY</p></div>
        </div>
      </div>
    </div>
  );
}
