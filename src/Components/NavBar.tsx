import React from "react";
import { FaBars } from "react-icons/fa";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="w-full flex justify-between items-center px-15 fixed top-5 z-50 border-b border-gray-400 pb-3">
      <h1 className="text-green-900 text-3xl font-extrabold Flexy">
        <Image src="/Image/tree.png" alt="" width={40} height={40} />
        Prasimo
      </h1>
      <div className="justify-between gap-5 items-center flex gap">
        <a href="#" className="text-xl font-bold">
          home
        </a>
        <p className="text-green-600">-</p>
        <a href="#" className="text-xl font-bold">
          About
        </a>
        <p className="text-green-600">-</p>
        <a href="#" className="text-xl font-bold">
          Resorces
        </a>
        <p className="text-green-600">-</p>
        <a href="#" className="text-xl font-bold">
          Contact
        </a>
      </div>
      <FaBars className="text-2xl" />
    </nav>
  );
};

export default NavBar;
