import React from 'react'
import Speaker from "../assets/arrival/Speaker.svg";
import Spekaers from "../assets/arrival/Speakers.svg";
import woman from "../assets/arrival/woman.svg";
import Perfume from "../assets/arrival/Perfume.svg";
import rectangle from "../assets/category/rectangle.svg"

const Arrival = () => {
  return (
    <div className="ml-36 mr-36 mt-14">
           <div className='flex gap-3 mb-5'>
          <img src={rectangle} alt="Rectangle" />
          <p className="text-red-700">Featured</p>
        </div>
     <div className='mb-5'>
     <h1 className="text-black font-bold text-2xl">Browse Categories</h1>
     
     </div>
    <div className="grid grid-cols-2 gap-3 ">
      <div className=" relative w-[511px] h-[520px] bg-black row-span-2">
        <img className="absolute  left-0 p-4 object-contain w-full h-full" src={Speaker} alt="Image 1" />
        <div className='text-white'>
          <h1  className='text-2xl '>     Playstation5     </h1>
          <p>Buy These Speakers</p>

        </div>
      </div>
      <div className="h-[240px] w-[511px] bg-black">
        <img className="object-contain w-full h-full" src={woman} alt="Image 2" />
      </div>
      <div className="h-[240px] w-[511px] grid grid-cols-2 gap-3">
        <img className="bg-black w-full h-full object-contain" src={Spekaers} alt="Image 3" />
        <img className="bg-black w-full h-full object-contain" src={Perfume} alt="Image 4" />
      </div>
    </div>
  </div>
  )
}

export default Arrival