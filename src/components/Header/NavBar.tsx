"use client";

import { faArrowUp, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll/modules";
import "./header.css";

const NavBar = () => {
  const [display, setDisplay] = useState(true);

  const navbarLists = [
    ["/", "Home"],
    ["about", "About"],
    ["services", "Services"],
    ["projects", "Projects"],
    ["contact", "Contact"],
  ];

  const clickHandler = () => {
    setDisplay((display) => !display);
  };

  return (
    <>
      <FontAwesomeIcon
        onClick={clickHandler}
        icon={faBars}
        className={`${
          display ? "flex" : "hidden"
        } text-white w-8 h-8 float-right mr-5 sm:hidden cursor-pointer absolute right-0`}
      />
      <FontAwesomeIcon
        onClick={clickHandler}
        icon={faXmark}
        className={`${
          !display ? "flex" : "hidden"
        } text-white w-8 h-8 float-right mr-5 sm:hidden cursor-pointer absolute right-0 z-30`}
      />
      {display ? (
        <nav className="hidden sm:flex sm:justify-between justify-end sm:items-center py-3">
          <ul className="sm:flex w-fit justify-end items-end text-right sm:justify-between sm:items-center lg:w-[50%] sm:w-full font-medium text-xl sm:text-[25px] text-white tracking-wider">
            {navbarLists.map(([url, title], index) => (
              <>
                <Link
                  to={url}
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  <li className="cursor-pointer">{title}</li>
                </Link>
              </>
            ))}
          </ul>
          <input type="hidden" className="hidden" />
        </nav>
      ) : (
        <nav
          className={`flex w-fit ml-auto px-3 justify-end items-center py-3 pt-8 absolute transition duration-200 ease-in-out delay-10000 right-3`}
        >
          <ul className="flex flex-col w-fit justify-end items-end text-right lg:w-[50%] font-medium text-xl text-white tracking-[.2rem] right">
            {navbarLists.map(([url, title], index) => (
              <>
                <Link
                  to={url}
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  <li className="cursor-pointer my-3">{title}</li>
                </Link>
              </>
            ))}
          </ul>
          <input type="hidden" className="hidden" />
        </nav>
      )}

      <Link
        to="home"
        spy={true}
        smooth={true}
        duration={500}
        className="upIcon bg-black w-10 h-10 fixed right-3 bottom-10 flex justify-center items-center rounded-full cursor-pointer"
      >
        <FontAwesomeIcon icon={faArrowUp} className="text-3xl text-white" />
      </Link>
    </>
  );
};

export default NavBar;
