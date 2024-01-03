import Link from "next/link";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { LinkedIn } from "@mui/icons-material";

const Header = () => {

  return (
    <>
      <header
        id="home"
        className="flex justify-between items-center py-8 text-white"
      >
        <Link href="/" className="text-2xl sm:text-[35px] tracking-widest">
          PortFolio
        </Link>
        <ul className="flex justify-around min-w-[10rem] sm:w-[20%] text-light">
          <Link target="_blank" href="https://www.youtube.com/@infinityweb11">
            <li className="cursor-pointer"><YouTubeIcon /></li>
          </Link>
          <Link target="_blank" href="https://www.facebook.com/profile.php?id=100010493134542">
            <li className="cursor-pointer"><FacebookIcon /></li>
          </Link>
          <Link target="_blank" href="https://www.instagram.com/santosh.ghimire_/">
            <li className="cursor-pointer"><InstagramIcon /></li>
          </Link>
          <Link target="_blank" href="https://www.linkedin.com/in/santosh-ghimire-1a3b25193/">
            <li className="cursor-pointer"><LinkedIn /></li>
          </Link>
          <Link target="_blank" href="https://github.com/sg606618">
            <li className="cursor-pointer"><GitHubIcon /></li>
          </Link>
        </ul>
      </header>
    </>
  );
};

export default Header;
