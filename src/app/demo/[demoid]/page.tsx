import Image from "next/image";
import pakokta from "./pakokta.jpg";
export default async function Page({ params }) {
  const { demoid } = await params;

  return (
    <div className="bg-gradient-to-br from-blue-400 to-white min-h-screen">
      <nav className="flex justify-between p-7 bg-white  border-gray-200">
        <ul className="flex items-center gap-12 text-gray-600">
          <li>
            <a href="#">XI RPL4</a>
          </li>

          <li>
            <a href="#">Frontend</a>
          </li>
          <li>
            <a href="#">Ziggy</a>
          </li>
        </ul>
      </nav>

      <div className="  m-20 gap text-black 4">
        <div>
          <div>
            <p className="text-3xl font-bold text-gray-800 mb-6">
              kelas frontend smk telkom adalah kelas belajar dan berbagi wawasan
              tentang UI/UX.yang diajari lansung oleh pak okta.
            </p>
            <p className="text-xl font-sans text-gray-800 mb-6">
              dialah guru yg berkorban demi kami supaya kami bisa menjadi murid
              yg jago"
            </p>
          </div>
          <p className="text-gray-500 mb-6">
            {" "}
            belajar dan lanjutkan petualangan bersama {demoid}
          </p>
          <button className="bg-gradient-to-br from-blue-600 to-yellow-100 text-black font-semibold py-3 px-8 rounded-full">
            Log in
          </button>
        </div>
        <div className="md:justify-end flex justify-center ">
          <p className="flex flex-col text-black  text-2xl mr-5 ">
            ini pak okta
          </p>
          <Image
            src={pakokta}
            alt="pak_okta"
            width={350}
            height={350}
            className="rounded-2xl   "
          />
        </div>
      </div>
    </div>
  );
}
