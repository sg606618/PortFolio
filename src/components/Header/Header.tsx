import Link from "next/link";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { LinkedIn } from "@mui/icons-material";

const Header = () => {
  const profileIconLists = [
    [<YouTubeIcon />, "https://www.youtube.com/@infinityweb11"],
    [
      <FacebookIcon />,
      "https://www.facebook.com/profile.php?id=100010493134542",
    ],
    [<InstagramIcon />, "https://www.instagram.com/santosh.ghimire_/"],
    [<LinkedIn />, "https://www.linkedin.com/in/santosh-ghimire-1a3b25193/"],
    [<GitHubIcon />, "https://github.com/sg606618"],
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
          {profileIconLists.map(([icon, url], index) => (
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
