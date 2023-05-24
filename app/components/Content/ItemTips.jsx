import React from "react";
import NextImage from "next/image";
import SVGArrow from "../../../public/assets/svg/SVGArrow.svg";

function ItemTips(props) {
  const { item } = props;

  const title = item?.title;
  const image = item?.image;

  const backgroundImageStyle = {
    backgroundImage: image ? "url(" + image + ")" : "none",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <div
      className="z-30 cursor-pointer w-full lg:w-[311px] h-[176px] flex flex-col justify-end bg-slate-300 hover:text-slate-300"
      style={backgroundImageStyle}
    >
      <div className="flex flex-row justify-between items-center pr-[20px] pl-[25px] py-[17px]">
        <button className="z-10 text-[16px] leading-[18.75px] tracking-[-0.57px] mr-[16px] font-semibold">
          {title}
        </button>
        <div className="bg-black opacity-20 absolute left-0 h-[72px] w-full" />
        <NextImage src={SVGArrow} alt="Arrow" className="arrow" />
      </div>
    </div>
  );
}

export default ItemTips;
