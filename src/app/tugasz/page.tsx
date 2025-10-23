import React from "react";
import Image from "next/image";
import lgtelkom from "./lgtelkom.png";
import vlm from "./vlm.png";
import ar from "./ar.png";

export default function page() {
  return (
    <div className="bg-gray-200 min-h-screen ">
      <div>
        <nav>
          <div className="text-black flex justify-between items-center p-4">
            <div className="flex">
              <Image src={lgtelkom} alt="lgtelkom" width={25} height={25} />
              <h1 className="text-lg ml-1 font-bold">SMK TELKOM MAKASSAR </h1>
            </div>
            <div className="gap-6 mr-3 flex">
              <h1 className="text-lg font-bold ml-3">OKTAVIANTO</h1>
              <Image src={ar} alt="ar" width={30} height={20} />
            </div>
          </div>
        </nav>

        <div className="flex flex-row">
          <div className="grid grid-cols">
            <div className="px-5  flex gap-3">
              <div className="flex flex-row gap-3">
                {/* kotak abu-abu / Jurnal Mengajar */}
                <div className="w-145 h-40 bg-neutral-100 rounded-lg shadow ">
                  {/* Header */}
                  <div className="flex justify-between h-10 bg-gray-300 items-center rounded-t-lg px-3">
                    <Image src={vlm} alt="vlm" width={25} height={25} />
                    <p className="font-semibold mr-62 text-gray-700">
                      Jurnal Mengajar
                    </p>
                    <div className="flex gap-2 items-center">
                      <div className="bg-white w-15 h-6 rounded-sm">
                        <p className="text-black font-bold text-xs text-center items-center mt-1">
                          XI RPL 4
                        </p>
                      </div>
                      <div className="bg-white w-25 h-6 rounded-sm">
                        <p className="text-black font-bold text-xs text-center mt-1">
                          26/06/2009
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Isi */}
                  <div className="grid grid-cols-2 divide-x mt-2 text-center">
                    <p className="text-black">Status Jurnal</p>
                    <p className="text-black">Status Kehadiran</p>
                    {/* Status Kehadiran */}
                    <div className="flex justify-around">
                      <div>
                        <p className="text-xl font-bold text-blue-600">0</p>
                        <p className="text-sm text-gray-600">Hadir</p>
                      </div>
                      <div>
                        <p className="text-xl font-bold text-blue-600">0</p>
                        <p className="text-sm text-gray-600">Tidak Hadir</p>
                      </div>
                    </div>

                    {/* Status Jurnal */}
                    <div className="flex justify-around">
                      <div>
                        <p className="text-xl font-bold text-blue-600">0</p>
                        <p className="text-sm text-gray-600">Belum</p>
                      </div>
                      <div>
                        <p className="text-xl font-bold text-blue-600">0</p>
                        <p className="text-sm text-gray-600">Draft</p>
                      </div>
                      <div>
                        <p className="text-xl font-bold text-blue-600">0</p>
                        <p className="text-sm text-gray-600">Simpan</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* kotakblack*/}
                <div className="w-76 h-40 bg-neutral-100 rounded-lg flex flex-col justify-center items-center">
                  <p className="text-black text-center font-semibold">
                    Guru terbaik
                  </p>
                  <p className="text-black text-center text-sm font-sans">
                    Belum ada guru terbaik
                  </p>
                </div>
              </div>
            </div>

            <div className="flex px-5 mb-5">
              <div className="flex flex-row gap-3">
                {/* kotak biru */}
                <div className="w-153 h-96 bg-neutral-100 rounded-lg flex flex-col">
                  {/* Header */}
                  <div className="flex justify-between h-7 bg-gray-300 items-center rounded-t-lg px-3">
                    <Image src={vlm} alt="vlm" width={25} height={25} />
                    <p className="font-semibold mr-150 text-gray-700">
                      Aplikasi
                    </p>
                  </div>

                  {/* Isi ketengah */}
                  <div className="flex-1 flex items-center justify-center">
                    <div className="flex flex-row gap-5">
                      <div className="h-15 w-15 bg-gray-800 rounded-sm"></div>
                      <div className="h-15 w-15 bg-gray-800 rounded-sm"></div>
                      <div className="h-15 w-15 bg-gray-800 rounded-sm"></div>
                      <div className="h-15 w-15 bg-gray-800 rounded-sm"></div>
                      <div className="h-15 w-15 bg-gray-800 rounded-sm"></div>
                    </div>
                  </div>
                </div>

                {/* kotak hijau */}
                <div className="w-68 h-96 bg-neutral-100 rounded-lg">
                  <div className="flex justify-between h-7 bg-gray-300 items-center rounded-t-lg px-3">
                    <Image src={vlm} alt="vlm" width={25} height={25} />
                    <p className="font-semibold mr-47 text-gray-700">News</p>
                  </div>
                  <div className="flex flex-col items-center justify-center mt-3">
                    <div className="bg-gray-400 w-60 items-center flex justify-center rounded-sm h-30">
                      <p className="text-center justify-center flex text-cyan-50">
                        image
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col  justify-center border-b border-gray-300 mt-1">
                    <p className="text-black border-b border-gray-300 text-xs px-2">
                      Aplikasi CUTI 3.0
                    </p>
                    <p className="text-black text-xs px-2 mt-1 mb-1">
                      "Flex yang mau kesamping" kemungkinan merujuk pada
                      fleksibilitas tubuh atau latihan fisik yang melatih
                      gerakan ke samping,
                    </p>
                  </div>
                  <div className="flex flex-row b  mt-1 px-2">
                    <p className=" text-gray-500  text-xs">6 hari yang lalu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-75 h-150  bg-neutral-100 rounded-lg">
            <div className="flex justify-between h-7 bg-gray-300 items-center rounded-t-lg px-3">
              {" "}
              <Image src={vlm} alt="vlm" width={25} height={25} />
              <p className="font-semibold text-gray-700 mr-45">Sapa guru</p>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="flex flex-col mt-3 gap-3">
                <div className="h-25 w-60 bg-gray-300 rounded-sm">
                  {" "}
                  <div className="flex flex-col  justify-center mb-1  border-black mt-1">
                    <p className="text-black border-b border-black text-lg px-2">
                      Ziggy
                    </p>
                  </div>
                  <div className="flex flex-col  justify-center border-b border-black">
                    <p className="text-black text-xs px-2 mt-1.5 mb-1.5">
                      "Flex yang mau kesamping"
                    </p>
                  </div>
                  <div className="flex flex-row b  mt-2 px-2">
                    <p className=" text-gray-500  text-xs">6 hari yang lalu</p>
                  </div>
                </div>

               <div className="h-25 w-60 bg-gray-300 rounded-sm">
                  {" "}
                  <div className="flex flex-col  justify-center mb-1  border-black mt-1">
                    <p className="text-black border-b border-black text-lg px-2">
                      Ziggy
                    </p>
                  </div>
                  <div className="flex flex-col  justify-center border-b border-black">
                    <p className="text-black text-xs px-2 mt-1.5 mb-1.5">
                      "Flex yang mau kesamping"
                    </p>
                  </div>
                  <div className="flex flex-row b  mt-2 px-2">
                    <p className=" text-gray-500  text-xs">6 hari yang lalu</p>
                  </div>
                </div>


                <div className="h-25 w-60 bg-gray-300 rounded-sm">
                  {" "}
                  <div className="flex flex-col  justify-center mb-1  border-black mt-1">
                    <p className="text-black border-b border-black text-lg px-2">
                      Ziggy
                    </p>
                  </div>
                  <div className="flex flex-col  justify-center border-b border-black">
                    <p className="text-black text-xs px-2 mt-1.5 mb-1.5">
                      "Flex yang mau kesamping"
                    </p>
                  </div>
                  <div className="flex flex-row b  mt-2 px-2">
                    <p className=" text-gray-500  text-xs">6 hari yang lalu</p>
                  </div>
                </div>


                <div className="h-25 w-60 bg-gray-300 rounded-sm">
                  {" "}
                  <div className="flex flex-col  justify-center mb-1  border-black mt-1">
                    <p className="text-black border-b border-black text-lg px-2">
                      Ziggy
                    </p>
                  </div>
                  <div className="flex flex-col  justify-center border-b border-black">
                    <p className="text-black text-xs px-2 mt-1.5 mb-1.5">
                      "Flex yang mau kesamping"
                    </p>
                  </div>
                  <div className="flex flex-row b  mt-2 px-2">
                    <p className=" text-gray-500  text-xs">6 hari yang lalu</p>
                  </div>
                </div>


                <div className="h-25 w-60 bg-gray-300 rounded-sm">
                  {" "}
                  <div className="flex flex-col  justify-center mb-1  border-black mt-1">
                    <p className="text-black border-b border-black text-lg px-2">
                      Ziggy
                    </p>
                  </div>
                  <div className="flex flex-col  justify-center border-b border-black">
                    <p className="text-black text-xs px-2 mt-1.5 mb-1.5">
                      "Flex yang mau kesamping"
                    </p>
                  </div>
                  <div className="flex flex-row b  mt-2 px-2">
                    <p className=" text-gray-500  text-xs">6 hari yang lalu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
