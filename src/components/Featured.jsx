import React from "react";
import sydney1 from "../Images/sydney5.jpg";
import sydney2 from "../Images/sydney2.webp";
import daisy1 from "../Images/daisy1.webp";
import daisy2 from "../Images/daisy4.jpg";
import nicolle1 from "../Images/nicolle4.jpg";
import nicolle2 from "../Images/nicolle3.jpg";
import { motion, useAnimation } from "framer-motion";
// import { Power4 } from "gsap/all";

const Featured = () => {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-20 ">
      <div className="w-full px-20 border-b-[1px] border-zinc-600 pb-20">
        <h1 className="text-7xl font-['Neue Montreal'] tracking-tight">
          Featured projects
        </h1>
      </div>
      {/* CARD ROW 1 */}
      <div className="px-20">
        <div className="cards w-full flex gap-20 mt-20">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-1/2  h-[72vh] "
          >
            <h1 className="absolute flex overflow-hidden text-purple-300	font-bold left-full -translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] text-[20vh] leading-none tracking-tight">
              {"SYDNEY".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.76, 0, 0.24, 1], delay: index * 0.1 }}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full overflow-hidden rounded-3xl">
              <img
                className="w-full h-full bg-cover"
                src={sydney1}
                alt="Sydney"
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-1/2  h-[72vh]"
          >
            <h1 className="absolute text-purple-300	flex overflow-hidden font-bold right-full translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] text-[20vh] leading-none tracking-tight">
              {"SWEENEY".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.76, 0, 0.24, 1], delay: index * 0.1 }}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-3xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src={sydney2}
                alt="Sydney"
              />
            </div>
          </motion.div>
        </div>
      </div>
      {/* CARD ROW 2 */}
      <div className="px-20">
        <div className="cards w-full flex gap-20 mt-20">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-1/2  h-[72vh] "
          >
            <h1 className="absolute flex overflow-hidden text-purple-300	font-bold left-full -translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] text-[20vh] leading-none tracking-tight">
              {"DAISY".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.76, 0, 0.24, 1], delay: index * 0.1 }}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full overflow-hidden rounded-3xl">
              <img
                className="w-full h-full bg-cover"
                src={daisy1}
                alt="Daisy"
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-1/2  h-[72vh]"
          >
            <h1 className="absolute flex overflow-hidden text-purple-300	font-bold right-full translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] text-[20vh] leading-none tracking-tight">
              {"JHONES".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.76, 0, 0.24, 1], delay: index * 0.1 }}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-3xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src={daisy2}
                alt="Daisy"
              />
            </div>
          </motion.div>
        </div>
      </div>
      {/* CARD ROW 3 */}
      <div className="px-20">
        <div className="cards w-full flex gap-20 mt-20">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-1/2  h-[72vh] "
          >
            <h1 className="absolute flex overflow-hidden text-purple-300	font-bold left-full -translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] text-[20vh] leading-none tracking-tight">
              {"NICOLLE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.76, 0, 0.24, 1], delay: index * 0.1 }}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full overflow-hidden rounded-3xl">
              <img
                className="w-full h-full bg-cover"
                src={nicolle1}
                alt="Nicolle"
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-1/2  h-[72vh]"
          >
            <h1 className="absolute flex overflow-hidden text-purple-300	font-bold right-full translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] text-[20vh] leading-none tracking-tight">
              {"WALLACE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.76, 0, 0.24, 1], delay: index * 0.1 }}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-3xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src={nicolle2}
                alt="Nicolle"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
