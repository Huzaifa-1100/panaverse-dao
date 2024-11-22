import React, { FC } from "react";

interface Iprops {
  title: string;
  des: string;
  number: number;
  haveBorder?: boolean;
}

const QuarterBox: FC<Iprops> = ({ title, des, number, haveBorder = true }) => {
  return (
    <div className="flex items-stretch">
      <div
        className={`${
          haveBorder && "border"
        } rounded-md  px-8 py-6 my-2 relative flex flex-col justify-center`}
      >
        <h4 className="font-bold text-lg mt-10">{title}</h4>
        <p className="mt-2 text-slate-600 ">{des}</p>
        <span className="absolute text-gray-200 -top-10 right-10 text-[12rem] font-bold -z-10">
          {number}
        </span>
      </div>
    </div>
  );
};

export default QuarterBox;
