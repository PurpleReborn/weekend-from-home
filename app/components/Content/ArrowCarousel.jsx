import React from 'react'
import Carousel, { consts } from "react-elastic-carousel";
import NextImage from "next/image";
import SVGArrowLeft from "../../../public/assets/svg/SVGArrowLeft.svg";
import SVGArrowRight from "../../../public/assets/svg/SVGArrowRight.svg";

const ArrowCarousel = ({ type, onClick, isEdge }) => {
  const arrowStyle =
    "bg-white w-[32px] h-[32px] flex items-center justify-center rounded-full ";
  const pointer =
    type === consts.PREV ? (
      <div className={arrowStyle}>
        <NextImage src={SVGArrowLeft} alt="Arrow left" />
      </div>
    ) : (
      <div className={arrowStyle}>
        <NextImage src={SVGArrowRight} alt="Arrow Right" />
      </div>
    ); ;
  return (
    <button onClick={onClick} disabled={isEdge} className="disabled:opacity-70 lg:block hidden">
      {pointer}
    </button>
  );
}

export default ArrowCarousel