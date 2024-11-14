import React from "react";
import Wrapper from "@/components/shared/wrapper";
import QuarterBox from "../shared/quarterBox";
import Image from "next/image";

interface IspTrack {
  title: string;
  des: string;
  number: number;
}

const SpTracks: IspTrack[] = [
  {
    title: "Quarter IV",
    des: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
    number: 4,
  },
  {
    title: "Quarter V",
    des: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
    number: 5,
  },
];

const SpecializedTracks = () => {
  return (
    <section>
      <Wrapper>
        {/* Header */}
        <div className="max-w-screen-sm">
          <h2 className="font-bold text-4xl mt-10">Specialized Tracks:</h2>
          <p className="mt-2 text-slate-600 text-xl">
            After completing the first three quarters the participants will
            select one or more specializations consisting of two courses each:{" "}
          </p>
        </div>
        {/* Content left */}
        <div className="flex mt-10 gap-7">
          <div className="border rounded-xl shadow-xl border-slate-300 p-8 basis-8/12">
            <h4 className=" text-teal-700 text-lg">Specialized Program</h4>
            <h3 className="text-2xl font-bold">
              Web 3.0 (Blockchain) and Metaverse Specialization
            </h3>
            <p className="text-xl text-slate-600 mt-2">
              This Web 3.0 and Metaverse specialization focuses on developing
              full-stack Web 3.0 and Metaverse experiences for the next
              generation of the internet by specializing in building worlds that
              merge the best of cutting-edge decentralized distributed
              blockchains with 3D metaverse client experiences.
            </p>
            <button className="text-teal-700 text-xl mt-4 underline flex items-center gap-x-2">
              Learn More{" "}
              <svg
                width="10"
                height="13"
                viewBox="0 0 8 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994"
                  stroke="#00616C"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {SpTracks.map((track: IspTrack, index: number) => (
                <QuarterBox
                  title={track.title}
                  des={track.des}
                  number={track.number}
                  haveBorder={false}
                  key={index}
                />
              ))}
            </div>
          </div>
          {/* Content right */}
          <div className="p-5  basis-4/12 ">
            <div className="flex items-center gap-4 cursor-pointer">
              <div>
               <div className="h-16 w-20 bg-red-500">

               </div>
                {/* <Image src={"/"} alt="" height={100} width={100} /> */}
              </div>
              <div>
                <h4 className="text-primary font-medium">
                  Specialized Program
                </h4>
                <h3 className="text-xl font-semibold">Web 3.0 (Blockchain) and Metaverse Specialization</h3>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default SpecializedTracks;
