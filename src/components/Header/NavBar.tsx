
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const NavBar = () => {
  const navbarLists = ["Home", "About", "Services", "Projects", "Contact"];

  return (
    <>
      {/* <Hamburger src={"/images/hamburger.png"} alt={""} width={30} height={30} className="sm:hidden float-right text-white" /> */}
      <FontAwesomeIcon icon={faBars} className="text-white w-8 h-8 float-right mr-5 sm:hidden" />
      <nav className="hidden sm:flex sm:justify-between justify-end sm:items-center py-3">
        <ul className="sm:flex w-fit justify-end items-end text-right sm:justify-between sm:items-center lg:w-[50%] sm:w-full font-medium text-xl sm:text-[25px] text-white tracking-wider">
          {navbarLists.map((items, index) => (
            <>
              <li>{items}</li>
            </>
          ))}
        </ul>
        <input type="hidden" className="hidden" />
      </nav>
    </>
  );
};

export default NavBar;
