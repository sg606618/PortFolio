"use client";

import React from "react";
// import { TypeAnimation } from "react-type-animation";

const Slogan = () => {
  return (
    <>
      <div className="container w-[90%] sm:w-[75%] md:w-[60%] lg:w-[50%] py-3 h-[75vh] justify-center flex flex-col">
        <h1 className="font-bold text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-primary relative tracking-wider">
          Santosh Ghimire
          <div className="slightLine absolute w-20 h-[0.4rem] bg-black -bottom-1 sm:bottom-1"></div>
        </h1>
        <section className="sm:text-[1.5rem] font-semibold text-white my-2 tracking-wide">
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
        <p className="text-white tracking-wide text-[14px] sm:text-[16px] my-5 font-extralight">
          As a frontend developer, I&apos;m dedicated to crafting exceptional user
          experiences through responsive and visually appealing designs. In my
          portfolio, I showcase my work, providing direct access to the projects
          I&apos;ve undertaken.
        </p>
        <button className="bg-black text-white text-[20px] px-5 w-fit py-1 rounded-3xl">
          Subscribe
        </button>
      </div>
    </>
  );
};

export default Slogan;
