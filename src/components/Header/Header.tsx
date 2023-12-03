import Link from "next/link";
import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center py-8 text-white">
        <Link href="/" className="text-2xl sm:text-[35px] tracking-widest">
          PortFolio
        </Link>
        <ul className="flex justify-around min-w-[10rem] sm:w-[20%] text-light">
          <Link href="https://www.youtube.com">
            <li><YouTubeIcon /></li>
          </Link>
          <Link href="https://www.facebook.com">
            <li><FacebookIcon /></li>
          </Link>
          <Link href="https://www.instagram.com">
            <li><InstagramIcon /></li>
          </Link>
          <Link href="https://www.twitter.com">
            <li><TwitterIcon /></li>
          </Link>
          <Link href="https://www.github.com">
            <li><GitHubIcon /></li>
          </Link>
        </ul>
      </header>
    </>
  );
};

export default Header;
