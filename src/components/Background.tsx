import Image from "next/image";
import React from "react";

const Background = () => {
  return (
    <>
      <div className="absolute top-0 -right-14 sm:right-0 -z-20">
        <Image
          src={"/images/ProfileImage.png"}
          alt="profile image"
          width={500}
          height={500}
          className="saturate-100 grayscale-[20%] contrast-150 brightness-50"
        />
      </div>
    </>
  );
};

export default Background;
