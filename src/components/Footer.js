import React from "react";

const Footer = () => {
  return (
    <div className=" absolute bg-black mt-[700px] text-white w-full h-80 ">
      <ul className="  mt-32 flex  p-4 flex-wrap justify-around">
        <span>Question? Call 000-800-919-1694</span>
        <li className="m-4 p-4 underline">FAQs</li>
        <li className="m-4 p-4 underline">Help Center</li>
        <li className="m-4 p-4 underline">Terms of Use</li>
        <li className="m-4 p-4 underline">Privacy</li>
        <li className="m-4 p-4 underline">Cookies Prefrence</li>
        <li className="m-4 p-4 underline">Corporate Info</li>
      </ul>
    </div>
  );
};

export default Footer;
