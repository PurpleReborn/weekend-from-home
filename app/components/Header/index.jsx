import React from 'react'
import NextImage from "next/image";
import './style.css';
import SVGLegoLarge from "../../../public/assets/svg/SVGLegoLarge.svg";
import SVGLegoSmall from "../../../public/assets/svg/SVGLegoSmall.svg";
import SVGRight from "../../../public/assets/svg/SVGRight.svg";
import SVGOvalSmall from "../../../public/assets/svg/header/SVGOvalSmall.svg"
import SVGPathFloat from "../../../public/assets/svg/header/SVGPathFloat.svg"

function Header() {
  return (
    <div className="bg-customPink relative">
      <div className="z-40 flex flex-col items-center pb-[197px]  ">
        <div className=" w-full relative top-header">
          <div className="px-[26px] lg:px-0 z-10 pt-[151px] text-white text-[52px] lg:text-[62px] font-black pb-[20px] leading-[51px] text-center">
            WEEKEND FROM HOME
          </div>
          <div className="z-10 text-white text-[16px] lg:text-[21px] font-semibold leading-[18.75px] lg:leading-[25px] italic pb-[67px] text-center">
            Stay active with a little workout.
          </div>
          <div className="flex items-start justify-center ">
            <button className="z-50 absolute bg-white hover:bg-slate-100 px-[83.5px] pt-[20px] pb-[19px] rounded-[29px] mt-[200px]">
              Let’s Go
            </button>
            <NextImage
              src={SVGLegoLarge}
              alt="Lego"
              className="z-10 lego lg:mb-[180.5px] mb-[51.5px]"
            />
          </div>
          <NextImage
            src={SVGPathFloat}
            alt="Lego"
            className="absolute top-[303px] right-[161px] lg:block hidden"
          />
        </div>

        <div className="flex items-center flex-row justify-end w-full pb-[63px] lg:pb-[25.5px]">
          <NextImage src={SVGLegoSmall} alt="Lego" className="z-10" />
          <NextImage src={SVGRight} alt="SVGRight" className="absolute" />
        </div>
        <div className="lg:w-[619px] text-right text-[16px] lg:text-[21px] px-[32px] lg:px-0">
          <div className=" text-black font-medium leading-[32px]  tracking-[-0.75px] ">
            <span className="text-[#0B24FB] font-bold">Deffinition; </span>
            a practice or exercise to test or improve one&apos;s fitness for
            athletic competition, ability, or performance to exhaust (something,
            such as a mine) by working to devise, arrange, or achieve by
            resolving difficulties. <br /> Merriam-Webster.com Dictionary.
          </div>
          <div className="italic text-white text-right pt-[20px] lg:pt-[30px] font-semibold">
            -weekend team
          </div>
        </div>
      </div>
      <NextImage
        src={SVGOvalSmall}
        alt="SVGOvalSmall"
        className="absolute bottom-[93px] lg:bottom-[70px] left-[57px] lg:left-[283px]"
      />
    </div>
  );
}

export default Header