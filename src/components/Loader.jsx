import React, { memo } from 'react';
import LogoImage from "../images/mhcd-logo.png";

const Loader = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-[#EF6330] fixed top-0 left-0 right-0 flex justify-center items-center z-10">
        <img className="animate-ping" src={LogoImage} width={197} height={197} alt="LogoImage" />
    </div>
  )
}

export default memo(Loader);