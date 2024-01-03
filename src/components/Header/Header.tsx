import Link from "next/link";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { LinkedIn } from "@mui/icons-material";

const Header = () => {
  const profileIconLists = [
    ["https://www.youtube.com/@infinityweb11", <YouTubeIcon />],
    ["https://www.facebook.com/profile.php?id=100010493134542", <FacebookIcon />],
    ["https://www.instagram.com/santosh.ghimire_/", <InstagramIcon />],
    ["https://www.linkedin.com/in/santosh-ghimire-1a3b25193/", <LinkedIn />],
    ["https://github.com/sg606618", <GitHubIcon />],
  ];

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
          {profileIconLists.map(([url, icon], index) => (
            <>
              <Link target="_blank" href={url}>
                <li className="cursor-pointer">{icon}</li>
              </Link>
            </>
          ))}
        </ul>
      </header>
    </>
  );
};

export default Header;
