import React from "react";

const About = () => {
  return (
    <>
      <div className="items-center sm:px-20 flex flex-col sm:my-20 mb-40">
        <h1 id="about" className="font-semibold tracking-widest text-white text-4xl uppercase">
          ABOUT
        </h1>
        <p className="my-10 text-[20px] text-justify sm:text-center text-light">
          I am a results-driven software developer with a passion for creating
          robust and scalable solutions. With a strong foundation in programming
          languages such as PHP, Python, and JavaScript, I excel at designing
          and implementing software applications that meet business objectives.
          My expertise extends to front-end and back-end development, database
          design, and API integration. I am committed to writing clean,
          maintainable code and staying up-to-date with emerging technologies to
          deliver innovative solutions. Explore my portfolio to see examples of
          my work and how I can contribute to your next software project.
        </p>
        <code className="text-3xl text-center text-semibold text-white tracking-wider my-5">“Code what you think, then learning process will more easier to you.”</code>
      </div>
    </>
  );
};

export default About;
