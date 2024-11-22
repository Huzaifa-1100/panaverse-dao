"use client";
import React, { useState } from "react";
import Wrapper from "@/components/shared/wrapper";
import QuarterBox from "../shared/quarterBox";
import Image from "next/image";
import { ProgramData } from "../../../utils/data";

const SpecializedTracks = () => {
  const [selectedItems, setSelectedItems] = useState("wmd");

  const selectedItemsData = ProgramData.find(
    (item) => item.slug === selectedItems
  );
  console.log(selectedItems);

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
        <div className="flex flex-col-reverse lg:flex-row mt-10 gap-7">
          <div className="border self-start sticky top-28 rounded-xl shadow-xl border-slate-300 p-8 basis-8/12">
            <h4 className=" text-primary text-lg font-medium">
              Specialized Program
            </h4>
            <h3 className="text-2xl font-bold mt-2">
              {selectedItemsData?.header}
            </h3>
            <p className="text-lg text-slate-600 mt-2 text-justify">
              {selectedItemsData?.description}
            </p>
            <button className="text-primary text-xl mt-4 underline flex items-center gap-x-2">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              {selectedItemsData?.quarters.map((item) => (
                <QuarterBox
                  title={item.header}
                  des={item.description}
                  number={item.number}
                  haveBorder={false}
                  key={item.number}
                />
              ))}
            </div>
          </div>
          {/* Content right */}
          <div className="px-4 py-6 basis-4/12 flex-1  ">
            {ProgramData.map((item, i) => (
              <div>
                <div
                  onClick={() => setSelectedItems(item.slug)}
                  key={item.slug}
                  className="flex items-center gap-x-4 cursor-pointer group   "
                >
                  <div className="flex-shrink-0 w-36 bg-gradient-to-r from-cyan-500 to-primary rounded-md">
                    <Image
                      src={item.path}
                      alt={item.header}
                      height={100}
                      width={200}
                      className="h-24 object-cover rounded-md group-hover:-translate-y-1 group-hover:translate-x-1 duration-500 "
                    />
                  </div>
                  <div>
                    <h4 className="text-primary text-lg font-medium">
                      Specialized Program
                    </h4>
                    <h3 className="text- font-bold"> {item.header} </h3>
                  </div>
                </div>
                <div className="bg-gray-200 h-[1px] my-6"></div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default SpecializedTracks;
