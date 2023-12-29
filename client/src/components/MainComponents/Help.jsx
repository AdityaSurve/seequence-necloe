import React from "react";

const Help = () => {
  return (
    <div className="w-full h-full flex-col gap-4 p-5 flex justify-center items-center relative">
      <div className="w-full h-fit animate-fade-up animate-delay-[0.5s] text-3xl tracking-wider font-bold">
        Help
      </div>
      <div className="w-full h-full bg-white animate-fade-up animate-delay-[0.7s] bg-opacity-50 border-[1px] border-gray-500 rounded-lg flex flex-col gap-2 p-5">
        <div className="w-full h-fit animate-fade-right animate-delay-[0.9s] text-lg tracking-wider">
          Frequently Asked Questions
        </div>
        <div className="w-fit h-fit text-sm animate-fade-right animate-delay-[1.1s] hover:text-sky-500 hover:underline cursor-pointer">
          1. How do I reset my password?
        </div>
        <div className="w-fit h-fit text-sm animate-fade-right animate-delay-[1.3s] hover:text-sky-500 hover:underline cursor-pointer">
          2. How do I update my profile information?
        </div>
        <div className="w-fit h-fit text-sm animate-fade-right animate-delay-[1.5s] hover:text-sky-500 hover:underline cursor-pointer">
          3. How do I contact customer support?
        </div>
        <div className="w-full h-fit text-lg animate-fade-right animate-delay-[1.7s] tracking-wider mt-5">
          Contact Us
        </div>
        <div className="w-full h-fit animate-fade-right animate-delay-[1.9s] text-sm">
          Email: support@example.com
        </div>
        <div className="w-full h-fit animate-fade-right animate-delay-[2.1s] text-sm">
          Phone: +1 123-456-7890
        </div>
      </div>
    </div>
  );
};

export default Help;
