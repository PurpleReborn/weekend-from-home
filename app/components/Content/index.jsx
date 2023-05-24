"use client";
import React, { useEffect, useState } from "react";
import NextImage from "next/image";
import Description from "../Description";
import ItemTips from "./ItemTips";
import "./style.css";
import Carousel, { consts } from "react-elastic-carousel";
import ItemTesti from "./ItemTesti";
import SVGLegoMedium from "../../../public/assets/svg/SVGLegoMedium.svg";
import SVGBgBottom from "../../../public/assets/svg/content/SVGBgBottom.svg"
import SVGBgTips from "../../../public/assets/svg/content/SVGBgTips.svg"
import ArrowCarousel from "./ArrowCarousel"

function Content() {
  const [dataTesti, setDataTesti] = useState();
  const [dataTips, setDataTips] = useState();

  const fetchTesti = async () => {
    try {
      const response = await fetch(
        "https://challenge.fe.weekendinc.com/testimonial"
      );
      if (response) {
        const res = await response.json();
        setDataTesti(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTips = async () => {
    try {
      const response = await fetch(
        "https://challenge.fe.weekendinc.com/help-tips"
      );
      if (response) {
        const res = await response.json();
        setDataTips(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTesti();
    fetchTips();
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 2.5 },
    { width: 900, itemsToShow: 2.5 },
  ];

  return (
    <div className="bg-black text-white flex flex-col items-center text-center relative">
      <div className="content px-[32px] lg:px-0">

        {dataTesti?.length > 0 ? (
          <div className="">
            <div className="text-[32px] leading-[37.5px] font-extrabold pb-[30px]">
              Testimonial
            </div>

            <div className="lg:px-[150px]">
              <Carousel
                renderArrow={ArrowCarousel}
                breakPoints={breakPoints}
                pagination={false}
                itemPosition={consts.CENTER}
              >
                {dataTesti?.map?.((item) => (
                  <ItemTesti key={item?.id} item={item} />
                ))}
              </Carousel>
            </div>
          </div>
        ) : null}

        <Description
          title="POV"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
          className="pt-[67px] lg:pt-[96px]"
        />
        <Description
          title="Resource"
          description="These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best"
          className="pt-[67px]"
        />

        <div className="pt-[100px] pb-[30px]">
          <div className="text-[32px] leading-[37.5px] font-extrabold pb-[30px] z-10 text-left lg:text-center">
            Help & Tips
          </div>
          <div className="flex flex-col lg:items-center lg:flex-row lg:space-x-[10px] space-y-[10px] lg:space-y-0">
            {dataTips?.slice(0, 3)?.map((item) => {
              return <ItemTips key={item?.id} item={item} />;
            })}
          </div>
        </div>

        <Description
          title="You’re all set."
          description="The wise man therefore always holds in these matters to this principle of selection."
          className="pt-[67px] pb-[404px] lg:pb-[203px] "
        />
      </div>
      <div className="left-0 w-full flex justify-start absolute bottom-0">
        <NextImage
          src={SVGLegoMedium}
          alt="lego medium"
          className="z-10 absolute left-[31px] lg:left-[32px]"
        />
        <NextImage src={SVGBgBottom} alt="bg bottom" className="pt-[35px]" />
      </div>
      <div className="absolute bottom-[501px] right-[127px] z-10 hidden lg:flex">
        <NextImage src={SVGBgTips} alt="bg tips" />
      </div>
    </div>
  );
}

export default Content;
