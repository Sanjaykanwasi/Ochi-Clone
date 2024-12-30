import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import sydney from "../Images/main.webp";

const LandingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen bg-zinc-900 pt-2"
    >
      {/* TEXT STRUCTURE */}
      <div className="textstructure  mt-52 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => (
          <div className="masker" key={index}>
            <div className="w-fit flex items-center">
              {index === 1 && (
                <div className="Img">
                  <motion.img
                    initial={{ width: "0" }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="rounded-md mr-[0.5vw] w-[9vw] h-[5vw] mt-4"
                    src={sydney}
                    alt=""
                  />
                </div>
              )}
              <h1 className="flex items-center uppercase leading-[5.8vw] h-full font-bold tracking-tighter text-[6vw] font-['Founders Grotesk X-Cond']">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>

      {/* LINE */}
      <div className="mt-40 border-t-[1px] border-zinc-600 flex justify-between items-center py-6 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            className="text-md text-xl font-light tracking-tight leading-none"
            key={index}
          >
            {item}
          </p>
        ))}

        {/* START BUTTON */}
        <div className="start flex items-center gap-5">
          <div className="py-2 px-5 border-[2px] font-light text-lg border-zinc-200 rounded-full">
            START THE PROJECT
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-[2px] border-zinc-200">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
