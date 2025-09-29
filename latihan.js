// function prosesAngka(angkaPengguna, kumpulanAngka) {

//   const nilaiMaksimum = Math.max(...kumpulanAngka);

//   console.log(`Nilai maksimum dari kumpulan angka adalah: ${nilaiMaksimum}`);
// }

// let kumpulanNomor = [14, 60, 43, 57, 21];
// let angkaYangDiuji = 43; // Ganti angka ini untuk menguji

// prosesAngka(angkaYangDiuji, kumpulanNomor);

// tugas 1 menntukan bilangan genap atau ganjil
//  let nomor= 30

//  if(nomor % 2 ===0)
// {
//     console.log (`${nomor}  adalah bilangan genap`);
// }else{
//     console.log(`${nomor} adalah bilangan ganjil`);
// }
// // tugas 2 mencari nilai maksimum

// {'tugas 1 dan 2 '}
// const readline = require("readline-sync");
// let Nomor = readline.questionInt("Masukan angka: ");

// if (Nomor % 2 === 0) {
//   console.log(`Angka ${Nomor} adalah bilangan genap.`);
// } else {
//   console.log(`Angka ${Nomor} adalah bilangan ganjil.`);
// }

// let nomor1 = 10;
// let nomor2 = 20;
// let nomor3 = 30;
// let hasil = Math.max(nomor1, nomor2, nomor3);
// console.log ("hasil dari nilai maksimum adalah " + hasil);

import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navlist = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          pages
        </a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Blocks
        </a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Docs
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            Material Tailwind
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navlist}</div>
            <div className=" flex items-center gap-4">
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>log In</span>
              </Button>

              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>sign In</span>
              </Button>
            </div>

            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-6 w-6"
                >
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-6 w-6"
                >
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>

        <MobileNav open={openNav}>
          {navlist}
          <div className=" flex items-center gap-x-1">
            <Button variant="text" size="sm" fullWidth className="">
              <span>Log In</span>
            </Button>

            <Button variant="gradient" size="sm" fullWidth className="">
              <span>Sign Up</span>
            </Button>
          </div>
        </MobileNav>
      </Navbar>
      <div className="mx-auto max-w-screen-xl py-12">
        <Card className="mb-12 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Card image"
            className="h-72 w-full object-cover"
          />
        </Card>

        <Typography variant="h2" color="blue-gray" className="mb-2">
          what is material Tailwind
        </Typography>

        <Typography color="gray" className="font-normal">
          Can you help me out? you will get a lot of free exposure doing this
          can my website be in english?. There is too much white space do less
          with more, so that will be a conversation piece can you rework to make
          the pizza look more delicious other agencies charge much lesser can
          you make the blue bluer?, I think we need to start from scratch can my
          website be in english?, yet make it sexy I&apos;ll pay you in a week
          we don&apos;t need to pay upfront i hope you understand can you make
          it stand out more?. Make the font bigger can you help me out? you will
          get a lot of free exposure doing this that&apos;s going to be a chunk
          of change other agencies charge much lesser. Are you busy this
          weekend? I have a new project with a tight deadline that&apos;s going
          to be a chunk of change. There are more project lined up change extra
          the next time.
        </Typography>
      </div>
    </div>
  );
}


