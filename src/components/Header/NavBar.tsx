import Link from "next/link";
import React from "react";

const NavBar = () => {
  const navbarLists = ["Home", "About", "Services", "Projects", "Contact"];

  return (
    <>
      <nav className="flex justify-between items-center py-3">
        <ul className="flex justify-between items-center min-w-[20rem] lg:w-[50%] w-full font-medium text-xl sm:text-[25px] text-white tracking-wider">
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
