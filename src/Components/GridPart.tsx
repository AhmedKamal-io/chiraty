import Image from "next/image";
import React from "react";
import { FaArrowAltCircleRight, FaHeart, FaSmile } from "react-icons/fa";

const GridPart = () => {
  return (
    <div className="w-full h-[50%] px-6 pb-2">
      <div className="grid grid-cols-5 grid-rows-4 gap-4 h-full">
        {/* Grid  1*/}
        <div className="relative row-span-3 rounded-3xl flex flex-col justify-between items-center bg-green-800 pt-4 px-3.5">
          <div className="text-white">
            <h2 className="text-6xl font-bold text-center mb-3.5">62%</h2>
            <p>
              17 thousand died,thousand injured,building and houses are
              destroied.
            </p>
          </div>
          <div className="border-1 border-green-500 Flexy gap-1.5 z-40 p-3 text-xl rounded-full bg-green-900 font-bold text-white mb-2">
            <p>donate now</p>
            <FaArrowAltCircleRight className="text-lime-400 text-3xl " />
          </div>
        </div>
        {/* Grid  2*/}
        <div className="relative col-start-1 row-start-4 rounded-3xl">
          <div
            className="Flexy col-start-5 row-start-4 relative rounded-3xl text-2xl text-white bg-black pl-2 p-1.5
        "
          >
            <FaSmile className="text-5xl" />
            <p className="text-center">let them be heard</p>
          </div>
        </div>
        {/* Grid  3*/}
        <div className="relative row-span-3 col-start-2  row-start-2 rounded-3xl">
          <Image
            src={`/Image/child2.jpg`}
            alt="child2"
            fill
            className="object-cover rounded-3xl grayscale-25"
          />
        </div>
        {/* Grid  4*/}
        <div className="flex justify-between flex-col items-center relative row-span-2 col-start-3 row-start-3 rounded-3xl bg-gray-300">
          <h2 className="text-xl px-2.5 text-center pt-5">
            join 5000+ people Donate
          </h2>

          <div className="border-1 border-gray-700 Flexy gap-1.5 z-40 p-3 text-md rounded-full bg-gray-400 font-bold text-black mb-2">
            <p>join community</p>
            <FaArrowAltCircleRight className="text-black text-3xl " />
          </div>
        </div>
        {/* Grid  5*/}
        <div className="row-span-3 relative col-start-4 row-start-2 rounded-3xl">
          <Image
            src={`/Image/child1.jpg`}
            alt="child1"
            fill
            className="object-cover rounded-3xl grayscale-25"
          />
        </div>
        {/* Grid  6*/}
        <div className="row-span-3 col-start-5 relative row-start-1 rounded-3xl bg-lime-400 flex justify-center items-end ">
          <Image
            src={`/Image/hands2.png`}
            alt="child1"
            fill
            className="object-cover grayscale-100  rounded-3xl z-0"
          />
          <div className="border-1 border-lime-950 Flexy gap-1.5 z-40 p-3 text-xl rounded-full bg-lime-700 font-bold text-white mb-2">
            <p>explore more</p>
            <FaArrowAltCircleRight className="text-black text-3xl " />
          </div>
        </div>
        {/* Grid  7*/}
        <div
          className="Flexy col-start-5 row-start-4 relative rounded-3xl text-2xl text-lime-300 bg-black pl-2 p-1.5
        "
        >
          <FaHeart className="text-5xl" />
          <p className="text-center">your home for help</p>
        </div>
      </div>
    </div>
  );
};

export default GridPart;
