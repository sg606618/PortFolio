import Image from "next/image";
import React from "react";

const Background = () => {
  return (
    <>
      <div className="absolute top-0 right-0 -z-20">
        <Image
          src={"./images/ProfileImage.png"}
          alt="profile image"
          className="saturate-100 grayscale-[20%] contrast-150 brightness-50"
        />
      </div>
    </>
  );
};

export default Background;
