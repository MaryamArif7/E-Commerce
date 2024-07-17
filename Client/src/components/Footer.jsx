import React from "react";
import copyrightSign from "../assets/icons/copyright-sign.svg";
import { socialMedia, footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className='mt-10 bg-black p-10 pb-5 pr-28 pl-10'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <p className="mt-6 text-base leading-7 font-montserrat text-gray-400 sm:max-w-sm">Get anything you want</p>
          <div className="flex items-center gap-3 mt-8">
            {socialMedia.map((icon, index) => (
              <div key={index} className="flex justify-center items-center w-10 h-10 bg-white rounded-full">
                <img src={icon.src} alt={icon.alt} className="w-6 h-6" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-10 flex-wrap">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">{section.title}</h4>
              <ul>
                {section.links.map((link, idx) => (
                  <li key={idx} className="mt-3 text-gray-400 font-montserrat text-base leading-normal hover:text-gray-300 cursor-pointer">
                    <a href={link.url || "#"}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-gray-400 mt-5 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img src={copyrightSign} alt="copyright" className="w-5 h-5 rounded-full m-0" />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
