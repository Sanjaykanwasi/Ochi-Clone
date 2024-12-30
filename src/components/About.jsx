import React from "react";
import img from "../Images/img.webp";

const About = () => {
  return (
    <div className="w-full py-20 px-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl">
      <h1 className="text-black font-['Neue Montreal'] text-[4vw] tracking-tight leading-[4vw]">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>
      {/* Line */}
      <div className="w-full border-t-[2px] mt-20 p-10 border-[#a1b562] flex gap-5">
        <div className="w-1/2 text-black">
          <h1 className="text-7xl font-['Neue Montreal'] font-normal tracking-tighter">
            Our approach:
          </h1>
          <button className="px-10 uppercase py-6 bg-zinc-800 mt-10 flex gap-10 items-center rounded-full text-white">
            Read More
            <div className="w-3 h-3 rounded-full bg-zinc-100 "></div>
          </button>
        </div>
        <div className="w-1/2">
          <img className="rounded-3xl h-[70vh]" src={img} alt="Sydney" />
        </div>
      </div>
    </div>
  );
};

export default About;
