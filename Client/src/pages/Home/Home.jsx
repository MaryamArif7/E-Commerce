import  { useState } from "react";
import plogo from "../../assets/plogo.svg";
import phone from "../../assets/phone.svg";
import arrowRight from "../../assets/arrowRight.svg";
import Sale from "../Sale/Sale"
import Categorys from "../category/Category";
import Bigger from "../bigger/bigger";
import Explore from "../Explore/Explore";

const Home = () => {
  const [isDoubleDropdownOpen, setDoubleDropdownOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDoubleDropdown = () => {
    setDoubleDropdownOpen(!isDoubleDropdownOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
    <div className="flex justify-between mt-8 ml-16 mr-36">
      <div>
        <div>
          <ul className="py-2 text-sm text-black">
            <li className="relative">
              <button
                id="DropdownButton"
                data-dropdown-toggle="doubleDropdown"
                data-dropdown-placement="right-start"
                onClick={toggleDropdown}
                type="button"
                className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-200 "
              >
                Men Fashion
                <svg
                  className={`w-2.5 h-2.5 ms-3 ${isDropdownOpen ? 'rotate-90' : ''}`}
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
                className={`absolute left-full top-0 z-10 ${isDropdownOpen ? "" : "hidden"}
                   bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}
              >
                <ul className="py-2 text-sm text-black">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                      Shirts
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                      Pants
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="relative">
              <button
                id="doubleDropdownButton"
                onClick={toggleDoubleDropdown}
                type="button"
                className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-200 "
              >
                Women Fashion
                <svg
                  className={`w-2.5 h-2.5 ms-3 ${isDoubleDropdownOpen ? 'rotate-90' : ''}`}
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
                className={`absolute left-full top-0 z-10 ${isDoubleDropdownOpen ? "" : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}
              >
                <ul className="py-2 text-sm text-black">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                      tops
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">
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
      <div className="bg-black flex w-3/4 ">
        <div className="mt-10 ml-16">
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
          <img src={phone} alt="Phone" />
        </div>
      </div>
    </div>
    <Sale />
    <Categorys />
    <Bigger/>
    <Explore />
    </>
  );
};

export default Home;
