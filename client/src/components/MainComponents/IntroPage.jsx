import React from "react";

const IntroPage = () => {
  return (
    <div className="w-full h-full flex-col gap-4 p-5 flex justify-center items-center relative">
      <div className="w-full h-fit animate-fade-up animate-delay-[0.75s] text-3xl tracking-wider font-bold">
        Introduction
      </div>
      <div className="w-full h-full animate-fade-up animate-delay-[1.25s] justify-center items-center flex overflow-y-auto gap-8 p-3 rounded-lg">
        <iframe
          src="https://www.youtube.com/embed/vCOSTG10Y4o"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-[8rem] md:h-[18rem] lg:h-[24rem] w-[16rem] md:w-[36rem] lg:w-[48rem]"
        ></iframe>
      </div>
    </div>
  );
};

export default IntroPage;
