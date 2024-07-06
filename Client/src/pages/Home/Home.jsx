import React, { useState } from "react";
import plogo from "../../assets/plogo.svg";
import phone from "../../assets/phone.svg";
import arrowRight from "../../assets/arrowRight.svg";
const Home = () => {
  const [isMultiDropdownOpen, setMultiDropdownOpen] = useState(false);
  const [isDoubleDropdownOpen, setDoubleDropdownOpen] = useState(false);

  const toggleMultiDropdown = () => {
    setMultiDropdownOpen(!isMultiDropdownOpen);
  };

  const toggleDoubleDropdown = () => {
    setDoubleDropdownOpen(!isDoubleDropdownOpen);
  };

  return (
    <div className="flex justify-between mt-8 ml-16 mr-16">
      <div>
        <div>
          <ul className="py-2 text-sm text-black">
            <li>
              <button
                id="doubleDropdownButton"
                onClick={toggleDoubleDropdown}
                type="button"
                className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-200 "
              >
                Men Fashion
                <svg
                  className="w-2.5 h-2.5 ms-3 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </button>

              <div
                id="doubleDropdown"
                className={`relative right-0 top-0 z-10 ${
                  isDoubleDropdownOpen ? "" : "hidden"
                } bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}
              >
                <ul className="py-2 text-sm text-black ">
                  <li> 
                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                      Shirts
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-200 ">
                      Pants
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <button
                id="doubleDropdownButton"
                onClick={toggleDoubleDropdown}
                type="button"
                className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-200 "
              >
                women fashion
                <svg
                  className="w-2.5 h-2.5 ms-3 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </button>

              <div
                id="doubleDropdown"
                className={`relative right-0 top-0 z-10 ${
                  isDoubleDropdownOpen ? "" : "hidden"
                } bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}
              >
                <ul className="py-2 text-sm text-black ">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                      Shirts
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-200 ">
                      Jeans
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                Grocery
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                Electronics
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                Lifestyle
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                Sports
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-black flex ">
        <div className="mt-10 ml-24">
          <div className="flex  ">
            <img src={plogo} alt="Logo" height={56} width={56} />
            <h6 className="text-white mt-5 ml-10 ">iPhone 14 Series</h6>
          </div>
          <div className="mt-5 gap-10">
            <h1 className="text-white text-4xl">Up to 10%</h1>
            <h1 className="text-white text-4xl">off Voucher</h1>
          </div>
          <div className="flex ">
            <button className="border-none text-white text-center mt-5 underline decoration-solid ">
              Shop Now
            </button>
            <img className="mt-6 ml-2" src={arrowRight} alt="" />
          </div>
        </div>

        <div>
          <img src={phone}
           />
        </div>
      </div>
    </div>
  );
};

export default Home;
