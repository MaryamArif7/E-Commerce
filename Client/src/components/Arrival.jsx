import React from "react";
import Speaker from "../assets/arrival/Speaker.svg";
import Speakers from "../assets/arrival/Speakers.svg";
import woman from "../assets/arrival/woman.svg";
import Perfume from "../assets/arrival/Perfume.svg";
import rectangle from "../assets/category/rectangle.svg";

const Arrival = () => {
  return (
    <div className="ml-36 mr-36 mt-14">
      <div className="flex gap-2 mb-5">
        <img src={rectangle} alt="Rectangle" />
        <p className="text-red-700">Featured</p>
      </div>
      <div className="mb-5">
        <h1 className="text-black font-bold text-2xl">New Arrivals</h1>
      </div>
      <div className="grid grid-cols-2 gap-3 ">
        <div className="relative w-[511px] h-[520px] bg-black row-span-2">
          <img className="p-4 object-contain w-full h-full" src={Speaker} alt="Image 1" />
          <div className="absolute bottom-28 left-5 text-white">
            <h1 className="text-2xl">Playstation5</h1>
            <p>Buy These Speakers</p>
            <button className="border-none text-white text-center mt-1 underline decoration-solid">
              Shop Now
            </button>
          </div>
        </div>
        <div className="relative h-[240px] w-[511px] bg-black">
          <img className="object-contain w-full h-full" src={woman} alt="Image 2" />
          <div className="absolute bottom-14 left-5 text-white">
            <h1 className="text-2xl">Women Collection</h1>
            <p>Featured Women Collection that <br /> give you another vibe</p>
            <button className="border-none text-white text-center mt-1 underline decoration-solid">
              Shop Now
            </button>
          </div>
        </div>
        <div className="relative h-[240px] w-[511px] grid grid-cols-2 gap-3">
          <div className="relative">
            <img className="bg-black w-full h-full object-contain" src={Speakers} alt="Image 3" />
            <div className="absolute bottom-10 left-5 text-white">
              <h1 className="text-2xl">Speakers</h1>
              <p>Amazon Wireless Speakers</p>
              <button className="border-none text-white text-center mt-1 underline decoration-solid">
                Shop Now
              </button>
            </div>
          </div>
          <div className="relative">
            <img className="bg-black w-full h-full object-contain" src={Perfume} alt="Image 4" />
            <div className="absolute bottom-10 left-5 text-white">
              <h1 className="text-2xl">Perfume</h1>
              <p>Amazon Perfume Collection</p>
              <button className="border-none text-white text-center mt-1 underline decoration-solid">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arrival;
