import React from 'react'
import NextImage from "next/image";
import SVGLogo from "../../../public/assets/svg/SVGLogo.svg";
import './style.css';

function Navbar() {
  return (
    <div className="w-full z-50 absolute flex flex-row items-center bg-white py-[17px] lg:px-[213px] px-[24px]">
      <NextImage
        src={SVGLogo}
        width={33}
        height={33}
        alt="Logo"
        className="logo"
      />
      <div>
        <div className="text-xs morning">Good Morning</div>
        <div className="text-base font-bold username">Fellas</div>
      </div>
    </div>
  );
}

export default Navbar