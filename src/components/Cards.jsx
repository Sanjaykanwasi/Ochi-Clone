import React from "react";
import sydney from "../Images/sydney9.jpg";
import daisy from "../Images/daisy2.webp";
import nicolle from "../Images/nicolle2.jpg";

const Cards = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 flex gap-5 items-center px-24">
      <div className="cardcontainer w-1/2 h-[50vh]">
        <div className="card relative w-full  h-full ">
          <img
            className="rounded-xl w-full h-full bg-cover"
            src={sydney}
            alt="Sydney"
          />
        </div>
      </div>
      <div className="cardcontainer flex gap-5 w-1/2 h-[50vh]">
        <div className="card h-full w-1/2 ">
          <img
            className="rounded-xl w-full h-full bg-cover"
            src={daisy}
            alt="Daisy"
          />
        </div>
        <div className="card h-full w-1/2 rounded-xl ">
          <img
            className="rounded-xl w-full h-full bg-cover"
            src={nicolle}
            alt="Nicolle"
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
