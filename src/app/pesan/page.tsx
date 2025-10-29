"use client";
import Image from "next/image";
import xx1 from "./xx1.png";

import { useState } from "react";

const TICKET_PRICE = 50000; // harga per tiket

export default function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [film, setFilm] = useState("JUMBO");
  const [qty, setQty] = useState(1);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState<{
    name: string;
    email: string;
    film: string;
    qty: number;
    total: number;
  } | null>(null);

  const total = qty * TICKET_PRICE;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) return setError("Nama tidak boleh kosong.");
    if (!email.includes("@") || !email.includes("."))
      return setError("Format email tidak valid.");
    if (qty < 1 || qty > 10) return setError("Jumlah tiket harus 1 - 10.");

    setSuccess({ name, email, film, qty, total });
  };

 return (
  <div className="min-h-screen bg-gray-900 text-white">

    <nav className="relative w-full bg-gray-800 p-3 flex items-center">
  {/* Logo kiri */}
  <Image
    src={xx1}
    alt="logo"
    width={50}
    height={50}
    className="object-contain"
  />

  {/* Judul di tengah */}
  <p className="absolute left-1/2 -translate-x-1/2 font-semibold text-lg">
    PESAN TIKET FILM
  </p>
</nav>



      <div className="flex justify-center items-center p-6">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 w-full max-w-md p-6 rounded-lg"
        >
          <h1 className="text-xl font-bold mb-4">Pemesanan Tiket</h1>

          {error && (
            <p className="bg-red-600 p-2 rounded text-sm mb-3">{error}</p>
          )}

          <label className="text-sm">Nama</label>
          <input
            className="w-full p-2 bg-gray-700 rounded mb-3 outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nama lengkap..."
          />

          <label className="text-sm">Email</label>
          <input
            className="w-full p-2 bg-gray-700 rounded mb-3 outline-none"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="gmail kamu"
          />

          <label className="text-sm">Pilih Film</label>
          <select
            className="w-full p-2 bg-gray-700 rounded mb-3"
            value={film}
            onChange={(e) => setFilm(e.target.value)}
          >
            <option>JUMBO</option>
            <option>JOKER</option>
            <option>SHELBY</option>
          </select>

          <label className="text-sm">Jumlah Tiket</label>
          <input
            className="w-full p-2 bg-gray-700 rounded mb-3"
            type="number"
            min="1"
            max="10"
            value={qty}
            onChange={(e) => setQty(Number(e.target.value))}
          />

          <p className="text-sm mb-3">
            Total Harga: <b>Rp {total.toLocaleString("id-ID")}</b>
          </p>

          <button
            className="w-full bg-yellow-400 text-gray-900 font-semibold p-2 rounded hover:brightness-90"
            type="submit"
          >
            Pesan
          </button>

          {success && (
            <div className="bg-green-700 mt-4 p-3 font-sans rounded text-sm">
              <p>
                <b>Pemesanan Berhasil!</b>
              </p>
              <p>Nama: {success.name}</p>
              <p>Email: {success.email}</p>
              <p>Film: {success.film}</p>
              <p>Jumlah: {success.qty}</p>
              <p>Total: Rp {success.total.toLocaleString("id-ID")}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
