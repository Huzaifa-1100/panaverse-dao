import React from "react";
import Wrapper from "../shared/wrapper";
import Button from "../shared/button";
import QuarterBox from "../shared/quarterBox";

interface Itracks {
  title: string;
  des: string;
  number: number;
}

const coreTrackData = [
  {
    title: "Quarter I",
    des: "CS-101: Object-Oriented Programming using TypeScript",
    number: 1,
  },
  {
    title: "Quarter II",
    des: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
    number: 2,
  },
  {
    title: "Quarter III",
    des: "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
    number: 3,
  },
];

export const CoreTracks = () => {
  return (
    <section className="mt-16 lg:mt-28">
      <Wrapper>
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
