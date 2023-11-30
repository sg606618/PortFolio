import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center py-8 text-white">
        <Link href="/" className="text-2xl sm:text-[35px] tracking-widest">PortFolio</Link>
        <ul className="flex justify-around min-w-[5rem] sm:w-[20%] text-light">
          <Link href="https://www.youtube.com"><li>Y</li></Link>
          <Link href="https://www.facebook.com"><li>F</li></Link>
          <Link href="https://www.instagram.com"><li>I</li></Link>
          <Link href="https://www.twitter.com"><li>T</li></Link>
          <Link href="https://www.github.com"><li>G</li></Link>
        </ul>
      </header>
    </>
  );
};

export default Header;
