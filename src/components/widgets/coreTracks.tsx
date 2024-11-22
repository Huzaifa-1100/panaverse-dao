import React from "react";
import Wrapper from "../shared/wrapper";
import Button from "../shared/button";
import QuarterBox from "../shared/quarterBox";
import { coreTrackData } from "../../../utils/data";


interface Itracks {
  title: string;
  des: string;
  number: number;
}
export const CoreTracks = () => {
  return (
    <section className="mt-16 lg:mt-28">
      <Wrapper>
      <div className="absolute left-0-0 hidden sm:block 4xl:hidden -z-20 2xl:hidden">
          <div className="blur-[150px] -z-20 bg-backDrop w-64 h-64 rounded-full lg:h-80 lg:w-80 "></div>
        </div>
        {/* Content */}
        <div className="max-w-screen-sm">
          <h4 className="text-teal-800 font-semibold text-lg mt-4">
            Program of Studies
          </h4>
          <h2 className="text-4xl font-bold my-4 whitespace-pre-line">
            {"Core Courses \n (Common in All Specializations):"}
          </h2>
          <p className="text-xl text-slate-600">
            Every participant of the program will start by completing the
            following three core courses:
          </p>
          <div className="w-fit mt-6">
            <Button text="Learn More" />
          </div>
        </div>
        {/* boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-screen-xl items-stretch ">
          {coreTrackData.map((track: Itracks, index: number) => (
            // <div key={index} >
            <QuarterBox
              key={index}
              title={track.title}
              des={track.des}
              number={index + 1}
            />
            // </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};
