import React from "react";
import Wrapper from "@/components/shared/wrapper";
import Image from "next/image";
import HeroPoster from "@/assets/hero-poster.png";
import Button from "@/components/shared/button";

const Hero = () => {
  return (
    <section>
      <Wrapper>
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Hand side */}
          <div className="flex-1">
            <h4 className="text-teal-800 font-semibold text-lg mt-4">
              Presidential Initiative for Artificial Intelligence and Computing
              (PIAIC)
            </h4>
            <h1 className="text-5xl sm:text-6xl font-bold my-6">
              Certified Web 3.0 and Metaverse Developer
            </h1>
            <p className="text-xl text-slate-600">
              A One and Quarter Years Panaverse DAO Earn as you Learn Program
              Getting Ready for the Next Generation of the Internet <br />{" "}
              <br /> Consolidating Web 3.0, Metaverse, Artificial Intelligence
              (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and
              Bioinformatics Technologies
            </p>
            {/* Button */}
            <div className="mt-5 w-fit">
              <Button text="Learn More" />
            </div>
          </div>
          {/* Right Hand side */}
          <div className="flex-1">
            <Image src={HeroPoster} alt="Hero Poster" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
