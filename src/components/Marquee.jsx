import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="w-full py-16 bg-[#004d43] rounded-tl-3xl rounded-tr-3xl"
    >
      <div className="text border-t-2 border-b-2 border-zinc-400 flex overflow-hidden whitespace-nowrap ">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 10, repeat: Infinity }}
          className="text-[12vw] leading-none font-['Founders Grotesk X-Cond'] tracking-tighter font-bold mb-10 pt-10 pr-10"
        >
          SANJAY SINGH KANWASI
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 10, repeat: Infinity }}
          className="text-[12vw] leading-none font-['Founders Grotesk X-Cond'] tracking-tighter font-bold mb-10 pt-10 pr-10"
        >
          SANJAY SINGH KANWASI
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
