import React from "react";
import GridPart from "./GridPart";
import { FaPlay } from "react-icons/fa";

const HomePart = () => {
  return (
    <section className="w-full h-[100vb] flex justify-between items-center flex-col">
      <div className="pt-33 w-[80%] h-[50%] flex flex-col justify-center items-center text-center">
        <h1 className=" text-nowrap text-6xl">Great futures are built</h1>
        <h2 className="  text-nowrap text-6xl my-4">with small a chairty</h2>
        <p className="text-md my-4 text-green-950 w-[50%]">
          the world&apos;s largest social fundraising platform, optimized for
          your chairty in a more easy way
        </p>
        <div className="Flexy gap-3.5">
          <a
            href="@"
            className="px-5.5 py-3 rounded-full text-white bg-black text-md"
          >
            Donate now
          </a>
          <a
            href="@"
            className="px-5.5 py-3 gap-2 border-1 border-black rounded-full text-black Flexy bg-white text-md"
          >
            <FaPlay />
            Watch video
          </a>
        </div>
      </div>
      <GridPart />
    </section>
  );
};

export default HomePart;
