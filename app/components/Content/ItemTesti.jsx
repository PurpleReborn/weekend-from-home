import React from 'react'

function ItemTesti(props) {
  const {item} = props;
  return (
    <div
      key={item?.id}
      className=" text-left bg-white text-black w-[247px] h-[140px] flex flex-col justify-between p-[20px] mr-[10px]"
    >
      <div className="text-[32px]  font-black pb-[20px] leading-[37.54px]">
        {item?.by}
      </div>
      <div className="text-[12px] leading-[14.08px] tracking-[-0.43px]">
        {item?.testimony}
      </div>
    </div>
  );
}

export default ItemTesti