// "use client";
// import React, { useEffect } from "react";
// import Image from "next/image";

// export default function Home() {
//   console.log("Buku page loaded");

//   useEffect(() => {
//     window.alert("ini blog");
//   }, []);

//   return (
//     <div className="bg-gradient-to-br from-green-200 to-white min-h-screen">
//       <main className="container mx-auto md:p-8">
//         {/* Header */}
//         <header className="flex justify-between p-4 bg-white rounded-lg border-gray-200">
//           <div>
//             <h1 className="font-sans text-xl font-medium text-gray-700">mybook</h1>
//           </div>
//           <nav>
//             <ul className="flex items-center gap-12 text-gray-600">
//               <li><a href="#">type</a></li>
//               <li><a href="#">bookmark</a></li>
//               <li><a href="#">profile</a></li>
//             </ul>
//           </nav>
//         </header>

//         {/* Kata utama */}
//         <section className="mt-16 flex md:flex-row items-center md:items-start justify-between gap-12">
//           <div>
//             <p className="text-4xl font-light leading-relaxed text-gray-800 mb-6">
//               "MyBook adalah platform membaca dan berbagi buku digital. Temukan,
//               baca, dan diskusikan buku favoritmu bersama komunitas pembaca
//               lainnya."
//             </p>
//             <p className="text-gray-500 mb-6">
//               Masuk dan lanjutkan petualangan membaca kamu.
//             </p>
//             <button className="bg-green-300 text-white font-semibold py-3 px-8 rounded-full">
//               Log in
//             </button>
//           </div>

//           {/* contoh gambar */}
//           <div className="md:justify-end">
//             <Image src="/Buku.jpg" alt="Buku" width={200} height={300} />
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }
// // 