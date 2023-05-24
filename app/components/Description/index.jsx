import React from 'react'

function Description(props) {
  const {title, description, className} = props;
  return (
    <div className={`text-white ${className} flex flex-col lg:items-center items-start text-left lg:text-center`}>
      <div className="text-[32px] leading-[37.5px] font-extrabold">{title}</div>
      <div className="pt-[30px] text-[16px] lg:text-[18px] leading-[24px] lg:leading-[27px] lg:w-[619px] tracking-[-0.64px]">
        {description}
      </div>
    </div>
  );
}

export default Description