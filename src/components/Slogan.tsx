"use client";

import React from "react";
// import { TypeAnimation } from "react-type-animation";

const Slogan = () => {
  return (
    <>
      <div className="container w-[50%] py-3 h-[75vh] justify-center flex flex-col">
        <h1 className="font-bold text-[60px] text-primary relative tracking-wider">
          Santosh Ghimire
          <div className="slightLine absolute w-20 h-[0.4rem] bg-black bottom-1"></div>
        </h1>
        <section className="text-[1.5rem] font-semibold text-white my-2 tracking-wide">
          Let&apos;s Do This Together
          <span className="ml-2 text-secondary font-bold tracking-wider">
            {/* <TypeAnimation
              sequence={[
                "EAT",
                1000,
                "SLEEP",
                1000,
                "CODE",
                1000,
                "REPEAT",
                1000,
              ]}
              wrapper="span"
              speed={1}
              style={{ fontSize: "1.5rem", display: "inline-block" }}
              repeat={Infinity}
            /> */}
          </span>
        </section>
        <p className="text-white text-[16px] my-5 font-extralight">
          As a frontend developer, I'm dedicated to crafting exceptional user
          experiences through responsive and visually appealing designs. In my
          portfolio, I showcase my work, providing direct access to the projects
          I've undertaken.
        </p>
        <button className="bg-black text-white text-[20px] px-5 w-fit py-1 rounded-3xl">
          Subscribe
        </button>
      </div>
    </>
  );
};

export default Slogan;
