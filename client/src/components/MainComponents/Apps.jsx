import React from "react";
import Screen2 from "../../assets/Screens2.png";

const Apps = () => {
  return (
    <div className="w-full h-full flex-col gap-4 p-5 flex justify-center items-center relative">
      <div className="w-full h-fit animate-fade-up animate-delay-[0.75s] text-3xl tracking-wider font-bold">
        Apps
      </div>
      <div className="w-full h-full overflow-hidden gap-8 p-3 rounded-lg">
        <img
          src={Screen2}
          alt=""
          className="w-full animate-fade animate-delay-[1.25s] h-full object-contain"
        />
      </div>
      <div className="absolute animate-fade-right animate-delay-[1.25s] top-0 flex-col text-4xl lg:text-9xl bg-screen bg-clip-text bg-primary-100 text-transparent font-extrabold bg-center left-0 h-full w-full flex justify-center items-center">
        COMING SOON
      </div>
    </div>
  );
};

export default Apps;
