import React from "react";
import Wrapper from "../shared/wrapper";
import Image from "next/image";
import HeroPoster from "@/assets/hero-poster.png"

const Hero = () => {
  return (
    <section>
      <Wrapper>
        <div className="flex items-center">
            {/* Left Hand side */}
            <div className="flex-1">
                <h4 className="text-teal-800 font-semibold text-lg">Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h4>
                <h1 className="text-6xl font-bold my-6">Certified Web 3.0 and Metaverse Developer</h1>
                <p className="text-lg text-slate-600">A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet <br /> <br /> Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies</p>
                <button className="p-4 bg-teal-800">Learn More</button>
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
