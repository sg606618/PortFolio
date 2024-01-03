"use client";

import React, { useEffect, useRef } from "react";
import About from "./About";
import Services from "./Services";

const MainSection = () => {
  return (
    <>
      <section className="">
        <About />
        <Services />
      </section>
    </>
  );
};

export default MainSection;
