import Link from "next/link";

export default function NotFound() {
  return (
    <div className=" flex-col  items-center justify-center flex">

     <h1 className="text-gray-300 text-3xl text-center mb-5 font-bold drop-shadow-[2px_2px_2px_black]">
  404 - Halaman Tidak Ditemukan Kanda
</h1>

      <Link href="/filmweb">
        <button className="w-50 h-10 bg-cyan-400  text-white font-bold rounded-full shadow-md hover:bg-cyan-300 transition drop-shadow-[0_0_5px_rgba(34,211,238,0.9)]">
          kembali ke filmweb
        </button>
      </Link>
    </div>
  );
}
