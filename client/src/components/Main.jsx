import React from "react";
import {
  SampleProjects,
  MyProjects,
  IntroPage,
  Apps,
  Help,
  Feedback,
} from "./MainComponents";

const Main = ({ activeState, setLoader }) => {
  const getComponent = (activeState) => {
    switch (activeState) {
      case "sample-projects":
        return <SampleProjects setLoader={setLoader} />;
      case "my-projects":
        return <MyProjects setLoader={setLoader} />;
      case "intro":
        return <IntroPage />;
      case "apps":
        return <Apps />;
      case "help":
        return <Help />;
      case "feedback":
        return <Feedback setLoader={setLoader} />;
      default:
        return <SampleProjects />;
    }
  };

  return (
    <div className="w-full z-0 flex justify-center items-center bg-secondary-300 h-full">
      <div className="w-16 h-full" />
      <div className="flex flex-col w-full h-full">
        <div className="w-full h-16" />
        <div className="w-full h-full pt-16">
          <div className="w-full h-full overflow-y-auto">
            {getComponent(activeState)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
