import React from "react";
import Image from "next/image";
import s from "./s.png";
import instagram from "./instagram.png";
import tiktok from "./tiktok.png";
import wa from "./wa.png";
import linked from "./linked.png";
import cod from "./cod.png";
import bro from "./bro.png";
import vs from "./vs.png";

export default function page() {
  return (
    <div className="bg-gray-900 min-h-screen  text-white flex flex-col">
      <div className="">
        <nav className="sticky top-0 z-50">
          <div className="bg-gray-900 w-full p-4 flex justify-between items-center shadow-md">
            <h1 className="text-xl ml-22 font-bold">Ziggy </h1>
            <div className="gap-6 mr-20 flex">
              <h1 className="text-xl font-bold">Home </h1>
              <h1 className="text-xl font-bold">About </h1>
              <h1 className="text-xl font-bold">Skills </h1>
              <h1 className="text-xl font-bold">Portofolio </h1>
              <h1 className="text-xl font-bold">Contact </h1>
            </div>
          </div>
        </nav>

        <div className="text-2xl font-bold text-white ml-1 ">
          Instagram
          <p className="text-sm text-white">@Aziggy</p>
        </div>

        <div className="text-2xl flex font-bold text-white items-center justify-center gap-10">
          <div>
            <p>Hello, it's me</p>
            <p className="text-5xl text-cyan-500">A.Aydin Khalfan Ziggy</p>
            <p>And I'm a frontend kid</p>
            <p className="text-gray-500 text-lg mt-2">
              i am kid rpl in shcool smk telkom makassar
            </p>

            <div className="flex gap-3 mt-1">
              {/* Instagram */}
              <div className="w-10 h-10 flex items-center justify-center border-2 border-cyan-400 rounded-full hover:bg-cyan-300 transition drop-shadow-[0_0_10px_rgba(34,211,238,0.9)]">
                <Image
                  src={instagram}
                  alt="instagram"
                  width={24}
                  height={24}
                  className="object-contain "
                />
              </div>

              {/* TikTok */}
              <div className="w-10 h-10 flex items-center justify-center border-2 border-cyan-400 rounded-full hover:bg-cyan-300 transition drop-shadow-[0_0_10px_rgba(34,211,238,0.9)]">
                <Image
                  src={tiktok}
                  alt="tiktok"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>

              {/* WhatsApp */}
              <div className="w-10 h-10 flex items-center justify-center border-2 border-cyan-400 rounded-full hover:bg-cyan-300 transition drop-shadow-[0_0_10px_rgba(34,211,238,0.9)]">
                <Image
                  src={wa}
                  alt="whatsapp"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>

              {/* LinkedIn */}
              <div className="w-10 h-10 flex items-center justify-center border-2 border-cyan-400 rounded-full hover:bg-cyan-300 transition drop-shadow-[0_0_10px_rgba(34,211,238,0.9)]">
                <Image
                  src={linked}
                  alt="linkedin"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
            </div>

            <button className="bg-cyan-400 hover:bg-cyan-300 p-2  h-12 w-25 text-lg font-sans mt-3 drop-shadow-[0_0_7px_rgba(34,211,238,0.9)] rounded-full ">
              enter
            </button>
          </div>
          <div className="flex justify-between items-center w-96 h-96 rounded-full overflow-hidden drop-shadow-[0_0_39px_rgba(34,211,238,0.9)] ">
            <Image
              src={s}
              alt="foto"
              width={370}
              height={50}
              className="  object-cover  "
            ></Image>
          </div>
        </div>
        <section className="flex flex-col md:flex-row items-center justify-center gap-16 px-10 py-20">
          {/* Foto Profil */}
          <div className="flex justify-center items-center w-80 h-80 rounded-full overflow-hidden drop-shadow-[0_0_39px_rgba(34,211,238,0.9)]">
            <Image
              src={s}
              alt="foto"
              width={320}
              height={320}
              className="object-cover "
            />
          </div>

          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-2">
              About <span className="">Me</span>
            </h2>
            <h3 className="text-xl font-semibold mb-6">
              Andi Aydin Khalfan Ziggy
            </h3>
            <p className="text-gray-300 leading-relaxed">
              saya lahir dimakassar tinggal gowa saya sekolah di smk telkom
              makassar dan hobi bermain futsal dan kenapa saya masuk telkom saya
              ingin mendapatkan banyak pelajaran yang tidak ada disekolah lain
              dan syamasuk futsal telkom ingin mendapatkan banyak prestasi dan
              juara dengan futsal dan saya ingin bawa mau futsal telkom .
            </p>
            <button className="mt-6 px-6 py-3 bg-cyan-400 text-white font-semibold rounded-full shadow-md hover:bg-cyan-300 transition drop-shadow-[0_0_10px_rgba(34,211,238,0.9)]">
              More About Me
            </button>
          </div>
        </section>
        <div className="flex items-center justify-center mt-10">
          <p className="text-3xl font-bold">My Service</p>
        </div>
        <div className=" items-center justify-center flex grid-cols-4 my-4 mt-15">
          {/*ktak 1 */}
          <div className="  w-80 h-96 px-15 py-9 bg-gray-800 border-2 border-cyan-400 rounded-lg mx-4 drop-shadow-[0_0_10px_rgba(34,211,238,0.9)]">
            <Image
              src={cod}
              alt="code"
              width={30}
              height={24}
              className="object-contain"
            />
            <div className="text-xl font-sans text-white ">
              UI/UX DESIGN
              <p className="text-xs font-sans mt-3 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                mattis neque augue, eu sagittis ipsum commodo non. Proin semper
                eget arcu non ultrices. Vestibulum commodo, ex a tincidunt
                vehicula, elit turpis rhoncus diam, rutrum aliquam tortor sem
                vel magna.
              </p>
              <button className="mt-6 px-3 py-3 bg-cyan-400 text-white font-sans rounded-full shadow-md hover:bg-cyan-300 transition drop-shadow-[0_0_10px_rgba(34,211,238,0.9)]">
                More About Me
              </button>
            </div>
          </div>
          {/*ktak 2 */}
          <div className="  w-80 h-96 px-15 py-9 bg-gray-800 border-2 border-cyan-400 rounded-lg mx-4 drop-shadow-[0_0_10px_rgba(34,211,238,0.9)]">
            <Image
              src={bro}
              alt="bro"
              width={30}
              height={24}
              className="object-contain"
            />
            <div className="text-xl font-sans text-white mt-1 ">
              GRAPICH DESIGN
              <p className="text-xs font-sans mt-3 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                mattis neque augue, eu sagittis ipsum commodo non. Proin semper
                eget arcu non ultrices. Vestibulum commodo, ex a tincidunt
                vehicula, elit turpis rhoncus diam, rutrum aliquam tortor sem
                vel magna.
              </p>
              <button className="mt-6 px-3 py-3 bg-cyan-400 text-white font-sans rounded-full shadow-md hover:bg-cyan-300 transition drop-shadow-[0_0_10px_rgba(34,211,238,0.9)]">
                More About Me
              </button>
            </div>
          </div>
          {/*ktak 3 */}
          <div className="  w-80 h-96 px-15 py-9 bg-gray-800 border-2 border-cyan-400 rounded-lg mx-4 drop-shadow-[0_0_10px_rgba(34,211,238,0.9)]">
            <Image
              src={vs}
              alt="vs"
              width={30}
              height={24}
              className="object-contain"
            />
            <div className="text-xl font-sans text-white mt-1 ">
              FRONTEND DEV
              <p className="text-xs font-sans mt-3 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                mattis neque augue, eu sagittis ipsum commodo non. Proin semper
                eget arcu non ultrices. Vestibulum commodo, ex a tincidunt
                vehicula, elit turpis rhoncus diam, rutrum aliquam tortor sem
                vel magna.
              </p>
              <button className="mt-6 px-3 py-3 bg-cyan-400 text-white font-sans rounded-full shadow-md hover:bg-cyan-300 transition drop-shadow-[0_0_10px_rgba(34,211,238,0.9)]">
                More About Me
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-center  gap-2 text-3xl font-bold mt-10 px-10 py-20">
            My
            <p className=" text-cyan-400"> Skills </p>
          </div>
          <div>
            <div className="grid md:grid-cols-2 gap-8 px-8">
              {/* Skill Bars */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mt-7  mb-1">
                    <svg
                      className="w-5 "
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M6 28L4 3H28L26 28L16 31L6 28Z"
                          fill="#E44D26"
                        ></path>{" "}
                        <path
                          d="M26 5H16V29.5L24 27L26 5Z"
                          fill="#F16529"
                        ></path>{" "}
                        <path
                          d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z"
                          fill="white"
                        ></path>{" "}
                      </g>
                    </svg>
                    <div className="flex mr-125">HTML</div>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-gray-700 h-2 rounded-full">
                    <div className="bg-cyan-400 h-2 rounded-full w-90"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mt-7 mb-1">
                    <svg
                      className="w-5 "
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M6 28L4 3H28L26 28L16 31L6 28Z"
                          fill="#1172B8"
                        ></path>{" "}
                        <path
                          d="M26 5H16V29.5L24 27L26 5Z"
                          fill="#33AADD"
                        ></path>{" "}
                        <path
                          d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z"
                          fill="white"
                        ></path>{" "}
                      </g>
                    </svg>
                    <div className="flex mr-126">CSS</div>
                    <span>60%</span>
                  </div>
                  <div className="w-full bg-gray-700 h-2 rounded-full">
                    <div className="bg-cyan-400 h-2 rounded-full w-60"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mt-7 mb-1">
                    <svg
                      className="w-5"
                      viewBox="0 0 256 256"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      preserveAspectRatio="xMidYMid"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g>
                          {" "}
                          <path
                            d="M0,0 L256,0 L256,256 L0,256 L0,0 Z"
                            fill="#F7DF1E"
                          >
                            {" "}
                          </path>{" "}
                          <path
                            d="M67.311746,213.932292 L86.902654,202.076241 C90.6821079,208.777346 94.1202286,214.447137 102.367086,214.447137 C110.272203,214.447137 115.256076,211.354819 115.256076,199.326883 L115.256076,117.528787 L139.313575,117.528787 L139.313575,199.666997 C139.313575,224.58433 124.707759,235.925943 103.3984,235.925943 C84.1532952,235.925943 72.9819429,225.958603 67.3113397,213.93026"
                            fill="#000000"
                          >
                            {" "}
                          </path>{" "}
                          <path
                            d="M152.380952,211.354413 L171.969422,200.0128 C177.125994,208.433981 183.827911,214.619835 195.684368,214.619835 C205.652521,214.619835 212.009041,209.635962 212.009041,202.762159 C212.009041,194.513676 205.479416,191.592025 194.481168,186.78207 L188.468419,184.202565 C171.111213,176.81473 159.597308,167.53534 159.597308,147.944838 C159.597308,129.901308 173.344508,116.153295 194.825752,116.153295 C210.119924,116.153295 221.117765,121.48094 229.021663,135.400432 L210.29059,147.428775 C206.166146,140.040127 201.699556,137.119289 194.826159,137.119289 C187.78047,137.119289 183.312254,141.587098 183.312254,147.428775 C183.312254,154.646349 187.78047,157.568406 198.089956,162.036622 L204.103924,164.614095 C224.553448,173.378641 236.067352,182.313448 236.067352,202.418387 C236.067352,224.071924 219.055137,235.927975 196.200432,235.927975 C173.860978,235.927975 159.425829,225.274311 152.381359,211.354413"
                            fill="#000000"
                          >
                            {" "}
                          </path>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                    <div className=" mr-119">Javascript</div>
                    <span>45%</span>
                  </div>
                  <div className="w-full bg-gray-700 h-2 rounded-full">
                    <div className=" bg-cyan-400 h-2 rounded-full w-45"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mt-7 mb-1">
                    <svg
                      className="w-5"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M13.0164 2C10.8193 2 9.03825 3.72453 9.03825 5.85185V8.51852H15.9235V9.25926H5.97814C3.78107 9.25926 2 10.9838 2 13.1111L2 18.8889C2 21.0162 3.78107 22.7407 5.97814 22.7407H8.27322V19.4815C8.27322 17.3542 10.0543 15.6296 12.2514 15.6296H19.5956C21.4547 15.6296 22.9617 14.1704 22.9617 12.3704V5.85185C22.9617 3.72453 21.1807 2 18.9836 2H13.0164ZM12.0984 6.74074C12.8589 6.74074 13.4754 6.14378 13.4754 5.40741C13.4754 4.67103 12.8589 4.07407 12.0984 4.07407C11.3378 4.07407 10.7213 4.67103 10.7213 5.40741C10.7213 6.14378 11.3378 6.74074 12.0984 6.74074Z"
                          fill="url(#paint0_linear_87_8204)"
                        ></path>{" "}
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M18.9834 30C21.1805 30 22.9616 28.2755 22.9616 26.1482V23.4815L16.0763 23.4815L16.0763 22.7408L26.0217 22.7408C28.2188 22.7408 29.9998 21.0162 29.9998 18.8889V13.1111C29.9998 10.9838 28.2188 9.25928 26.0217 9.25928L23.7266 9.25928V12.5185C23.7266 14.6459 21.9455 16.3704 19.7485 16.3704L12.4042 16.3704C10.5451 16.3704 9.03809 17.8296 9.03809 19.6296L9.03809 26.1482C9.03809 28.2755 10.8192 30 13.0162 30H18.9834ZM19.9015 25.2593C19.1409 25.2593 18.5244 25.8562 18.5244 26.5926C18.5244 27.329 19.1409 27.9259 19.9015 27.9259C20.662 27.9259 21.2785 27.329 21.2785 26.5926C21.2785 25.8562 20.662 25.2593 19.9015 25.2593Z"
                          fill="url(#paint1_linear_87_8204)"
                        ></path>{" "}
                        <defs>
                          {" "}
                          <linearGradient
                            id="paint0_linear_87_8204"
                            x1="12.4809"
                            y1="2"
                            x2="12.4809"
                            y2="22.7407"
                            gradientUnits="userSpaceOnUse"
                          >
                            {" "}
                            <stop stop-color="#327EBD"></stop>{" "}
                            <stop offset="1" stop-color="#1565A7"></stop>{" "}
                          </linearGradient>{" "}
                          <linearGradient
                            id="paint1_linear_87_8204"
                            x1="19.519"
                            y1="9.25928"
                            x2="19.519"
                            y2="30"
                            gradientUnits="userSpaceOnUse"
                          >
                            {" "}
                            <stop stop-color="#FFDA4B"></stop>{" "}
                            <stop offset="1" stop-color="#F9C600"></stop>{" "}
                          </linearGradient>{" "}
                        </defs>{" "}
                      </g>
                    </svg>
                    <div className="mr-120">Python</div>
                    <span>50%</span>
                  </div>
                  <div className="w-full bg-gray-700 h-2 rounded-full">
                    <div className="bg-cyan-400 h-2 rounded-full w-50"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mt-7 mb-1">
                    <svg
                      className="w-5"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z"
                          fill="#53C1DE"
                        ></path>{" "}
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z"
                          fill="#53C1DE"
                        ></path>{" "}
                      </g>
                    </svg>
                    <div className="mr-123">React</div>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-gray-700 h-2 rounded-full">
                    <div className="bg-cyan-400 h-2 rounded-full w-75"></div>
                  </div>
                </div>
              </div>

              {/* Circle Skills */}
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col items-center">
                  <div className="relative w-35 h-35">
                    <svg className="w-full h-full -rotate-90">
                      <circle
                        cx="50%"
                        cy="50%"
                        r="32%"
                        stroke="gray"
                        strokeWidth="6"
                        fill="none"
                      />
                      <circle
                        cx="50%"
                        cy="50%"
                        r="32%"
                        stroke="cyan"
                        strokeWidth="6"
                        fill="none"
                        strokeDasharray="201"
                        strokeDashoffset={201 - (201 * 90) / 100}
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-bold">
                      90%
                    </span>
                  </div>
                  <p className="mt-1 text-sm">Creativity</p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="relative w-35 h-35">
                    <svg className="w-full h-full -rotate-90">
                      <circle
                        cx="50%"
                        cy="50%"
                        r="32%"
                        stroke="gray"
                        strokeWidth="6"
                        fill="none"
                      />
                      <circle
                        cx="50%"
                        cy="50%"
                        r="32%"
                        stroke="cyan"
                        strokeWidth="6"
                        fill="none"
                        strokeDasharray="201"
                        strokeDashoffset={201 - (201 * 80) / 100}
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-bold">
                      80%
                    </span>
                  </div>
                  <p className="mt-1 text-sm">Communication</p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="relative w-35 h-35">
                    <svg className="w-full h-full -rotate-90">
                      <circle
                        cx="50%"
                        cy="50%"
                        r="32%"
                        stroke="gray"
                        strokeWidth="6"
                        fill="none"
                      />
                      <circle
                        cx="50%"
                        cy="50%"
                        r="32%"
                        stroke="cyan"
                        strokeWidth="6"
                        fill="none"
                        strokeDasharray="201"
                        strokeDashoffset={201 - (201 * 75) / 100}
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-bold">
                      75%
                    </span>
                  </div>
                  <p className="mt-1 text-sm">Problem Solve</p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="relative  w-35 h-35">
                    <svg className="w-full h-full -rotate-90">
                      <circle
                        cx="50%"
                        cy="50%"
                        r="32%"
                        stroke="gray"
                        strokeWidth="6"
                        fill="none"
                      />
                      <circle
                        cx="50%"
                        cy="50%"
                        r="32%"
                        stroke="cyan"
                        strokeWidth="6"
                        fill="none"
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-bold">
                      85%
                    </span>
                  </div>
                  <p className="mt-1 text-sm">Teamwork</p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="flex items-center justify-center  gap-2 text-3xl font-bold mt-10 px-10 py-20">
                  Latest
                  <p className=" text-cyan-400"> Project </p>`
                </div>
                <div>
                  <div className="grid md:grid-cols-3 gap-6 px-8 mb-20">
                    <div
                      className="group w-90 h-70 px-15 py-9 bg-gray-800 border-2 border-cyan-400 rounded-lg mx-4 
             drop-shadow-[0_0_5px_rgba(34,211,238,0.9)] cursor-pointer 
             hover:bg-cyan-400 transition duration-300"
                    >
                      <p className="opacity-0 group-hover:opacity-100 transition duration-300 text-center text-2xl text-black font-bold">
                        contoh
                      </p>
                    </div>

                    <div
                      className="group w-90 h-70 px-15 py-9 bg-gray-800 border-2 border-cyan-400 rounded-lg mx-4 
             drop-shadow-[0_0_5px_rgba(34,211,238,0.9)] cursor-pointer 
             hover:bg-cyan-400 transition duration-300"
                    >
                      <p className="opacity-0 group-hover:opacity-100 transition duration-300 text-center text-2xl text-black font-bold">
                        contoh
                      </p>
                    </div>

                    <div
                      className="group w-90 h-70 px-15 py-9 bg-gray-800 border-2 border-cyan-400 rounded-lg mx-4 
             drop-shadow-[0_0_5px_rgba(34,211,238,0.9)] cursor-pointer 
             hover:bg-cyan-400 transition duration-300"
                    >
                      <p className="opacity-0 group-hover:opacity-100 transition duration-300 text-center text-2xl text-black font-bold">
                        contoh
                      </p>
                    </div>

                    <div
                      className="group w-90 h-70 px-15 py-9 bg-gray-800 border-2 border-cyan-400 rounded-lg mx-4 
             drop-shadow-[0_0_5px_rgba(34,211,238,0.9)] cursor-pointer 
             hover:bg-cyan-400 transition duration-300"
                    >
                      <p className="opacity-0 group-hover:opacity-100 transition duration-300 text-center text-2xl text-black font-bold">
                        contoh
                      </p>
                    </div>

                    <div
                      className="group w-90 h-70 px-15 py-9 bg-gray-800 border-2 border-cyan-400 rounded-lg mx-4 
             drop-shadow-[0_0_5px_rgba(34,211,238,0.9)] cursor-pointer 
             hover:bg-cyan-400 transition duration-300"
                    >
                      <p className="opacity-0 group-hover:opacity-100 transition duration-300 text-center text-2xl text-black font-bold">
                        contoh
                      </p>
                    </div>

                    <div
                      className="group w-90 h-70 px-15 py-9 bg-gray-800 border-2 border-cyan-400 rounded-lg mx-4 
             drop-shadow-[0_0_5px_rgba(34,211,238,0.9)] cursor-pointer 
             hover:bg-cyan-400 transition duration-300"
                    >
                      <p className="opacity-0 group-hover:opacity-100 transition duration-300 text-center text-2xl text-black font-bold">
                        contoh
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-2 mt-20 px-10">
                  <div className="flex-col flex">
                  <div className="text-7xl font-bold">
                    <span>Contact </span>
                    <span className="text-cyan-400">Me</span>
                  </div>
                  <div>
                    <p className="mt-4 text-lg font-bold text-white">
                      lets work together
                    </p>
                  </div>
                  <div>
                    <p className="mt-2 text-gray-300 font-sans max-w-xl">
                      “Setiap langkah kecil yang kita ambil hari ini adalah
                      pondasi bagi kesuksesan di masa depan. Jangan pernah
                      meremehkan usaha sekecil apapun, karena konsistensi akan
                      mengubah impian menjadi kenyataan. Belajar, bekerja keras,
                      dan berani mencoba adalah kunci untuk membuka pintu
                      kesempatan yang lebih besar.”
                    </p>
                  </div>
                  </div>
                  <div>
                    <div className="flex justify-between w-150 h-15  bg-gray-800 border-2 border-cyan-400 rounded-3xl mx-4 "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-[#043351] text-white text-center py-4">
        &copy; 2024 Andi Aydin Khalfan Ziggy. All rights reserved.
      </footer>
    </div>
  );
}
