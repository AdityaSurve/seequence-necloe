import React, { useState, useEffect, useRef } from "react";
import LogoShort from "../assets/N.png";
import LogoLong from "../assets/ecleo.png";
import Logo from "../assets/Logo";

const Sidebar = ({ activeState, setActiveState }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [key, setKey] = useState(Math.random());

  const [mouseOver, setMouseOver] = useState("");

  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setKey(Math.random());
  }, [isOpen]);

  return (
    <div
      className="h-full z-40 fixed w-fit left-0 top-0 flex justify-center items-center p-3 bg-white transition-all duration-300 border-r-[1px] border-secondary-500 border-opacity-60"
      ref={sidebarRef}
    >
      <div
        className={`${
          isOpen ? "w-48" : "w-8"
        } transition-all duration-300 flex flex-col justify-between items-center h-full`}
      >
        <div className="h-full w-full flex flex-col gap-2">
          <div className="h-16 w-full flex items-center justify-center">
            <img
              src={LogoShort}
              alt="Logo"
              className="h-fit w-fit scale-90 animate-fade-up animate-once"
            />
            {isOpen && (
              <img
                key={key}
                src={LogoLong}
                alt="Logo"
                className="h-fit w-fit scale-90 animate-fade animate-once animate-duration-[0.5s] animate-delay-[0.25s]"
              />
            )}
          </div>
          <div className="h-[0.75px] bg-secondary-500 w-full scale-90 animate-fade-up animate-once" />
          <div className="flex flex-col gap-2 my-4 font-medium">
            <div>
              <div
                className={`flex ${
                  !isOpen ? "justify-center" : "justify-start"
                } items-center p-2 h-10 ${
                  mouseOver === "my-projects" || activeState === "my-projects"
                    ? "text-primary-500"
                    : "text-secondary-500"
                } rounded-lg group cursor-pointer`}
                onMouseOver={() => setMouseOver("my-projects")}
                onMouseLeave={() => setMouseOver("")}
                onClick={() => {
                  setActiveState("my-projects");
                  setIsOpen(false);
                }}
              >
                <div className="animate-fade-up animate-once">
                  <Logo
                    color={
                      mouseOver === "my-projects" ||
                      activeState === "my-projects"
                        ? "primary-500"
                        : "secondary-500"
                    }
                    width="24"
                    height="24"
                    type="my-projects"
                  />
                </div>
                <span
                  key={key + 1}
                  className={`ms-3 ${
                    !isOpen && "hidden"
                  } animate-fade-right animate-once`}
                >
                  My Projects
                </span>
              </div>
            </div>
            <div>
              <div
                className={`flex ${
                  !isOpen ? "justify-center" : "justify-start"
                } items-center p-2 h-10 ${
                  mouseOver === "sample-projects" ||
                  activeState === "sample-projects"
                    ? "text-primary-500"
                    : "text-secondary-500"
                } rounded-lg group cursor-pointer`}
                onMouseOver={() => setMouseOver("sample-projects")}
                onMouseLeave={() => setMouseOver("")}
                onClick={() => {
                  setActiveState("sample-projects");
                  setIsOpen(false);
                }}
              >
                <div className="animate-fade-up animate-once">
                  <Logo
                    color={
                      mouseOver === "sample-projects" ||
                      activeState === "sample-projects"
                        ? "primary-500"
                        : "secondary-500"
                    }
                    width="24"
                    height="24"
                    type="sample-projects"
                  />
                </div>
                <span
                  key={key + 2}
                  className={`ms-3 ${
                    !isOpen && "hidden"
                  } animate-fade-right animate-once`}
                >
                  Sample Projects
                </span>
              </div>
            </div>
          </div>
          <div className="h-[0.75px] bg-secondary-500 w-full scale-90 animate-fade-up animate-once" />
          <div className="flex flex-col gap-2 my-4 font-medium">
            <div>
              <div
                className={`flex ${
                  !isOpen ? "justify-center" : "justify-start"
                } items-center p-2 h-10 ${
                  mouseOver === "apps" || activeState === "apps"
                    ? "text-primary-500"
                    : "text-secondary-500"
                } rounded-lg group cursor-pointer`}
                onMouseOver={() => setMouseOver("apps")}
                onMouseLeave={() => setMouseOver("")}
                onClick={() => {
                  setActiveState("apps");
                  setIsOpen(false);
                }}
              >
                <div className="animate-fade-up animate-once">
                  <Logo
                    color={
                      mouseOver === "apps" || activeState === "apps"
                        ? "primary-500"
                        : "secondary-500"
                    }
                    width="24"
                    height="24"
                    type="apps"
                  />
                </div>
                <span
                  key={key + 3}
                  className={`ms-3 ${
                    !isOpen && "hidden"
                  } animate-fade-right animate-once`}
                >
                  Apps
                </span>
              </div>
            </div>
            <div>
              <div
                className={`flex ${
                  !isOpen ? "justify-center" : "justify-start"
                } items-center p-2 h-10 ${
                  mouseOver === "intro" || activeState === "intro"
                    ? "text-primary-500"
                    : "text-secondary-500"
                } rounded-lg group cursor-pointer`}
                onMouseOver={() => setMouseOver("intro")}
                onMouseLeave={() => setMouseOver("")}
                onClick={() => {
                  setActiveState("intro");
                  setIsOpen(false);
                }}
              >
                <div className="animate-fade-up animate-once">
                  <Logo
                    color={
                      mouseOver === "intro" || activeState === "intro"
                        ? "primary-500"
                        : "secondary-500"
                    }
                    width="24"
                    height="24"
                    type="intro"
                  />
                </div>
                <span
                  key={key + 4}
                  className={`ms-3 ${
                    !isOpen && "hidden"
                  } animate-fade-right animate-once`}
                >
                  Intro to Necleo
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 font-medium">
          <div
            className={`flex ${
              !isOpen ? "justify-center" : "justify-start"
            } items-center p-2 h-10 ${
              mouseOver === "help" || activeState === "help"
                ? "text-primary-500"
                : "text-secondary-500"
            } rounded-lg group cursor-pointer`}
            onMouseOver={() => setMouseOver("help")}
            onMouseLeave={() => setMouseOver("")}
            onClick={() => {
              setActiveState("help");
              setIsOpen(false);
            }}
          >
            <div className="animate-fade-up animate-once">
              <Logo
                color={
                  mouseOver === "help" || activeState === "help"
                    ? "primary-500"
                    : "secondary-500"
                }
                width="24"
                height="24"
                type="help"
              />
            </div>
            <span
              key={key + 5}
              className={`ms-3 ${
                !isOpen && "hidden"
              } animate-fade-right animate-once`}
            >
              Help & Support
            </span>
          </div>
          <div
            className={`flex ${
              !isOpen ? "justify-center" : "justify-start"
            } items-center p-2 h-10 ${
              mouseOver === "feedback" || activeState === "feedback"
                ? "text-primary-500"
                : "text-secondary-500"
            } rounded-lg group cursor-pointer`}
            onMouseOver={() => setMouseOver("feedback")}
            onMouseLeave={() => setMouseOver("")}
            onClick={() => {
              setActiveState("feedback");
              setIsOpen(false);
            }}
          >
            <div className="animate-fade-up animate-once">
              <Logo
                color={
                  mouseOver === "feedback" || activeState === "feedback"
                    ? "primary-500"
                    : "secondary-500"
                }
                width="24"
                height="24"
                type="feedback"
              />
            </div>
            <span
              key={key + 6}
              className={`ms-3 ${
                !isOpen && "hidden"
              } animate-fade-right animate-once`}
            >
              Feedback
            </span>
          </div>
          <div
            className={`flex ${
              !isOpen ? "justify-center" : "justify-start"
            } items-center p-2 h-10 ${
              mouseOver === "collapse" ? "text-black" : "text-secondary-500"
            } rounded-lg group cursor-pointer`}
            onMouseOver={() => setMouseOver("collapse")}
            onMouseLeave={() => setMouseOver("")}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <div className="animate-fade-up animate-once">
              <Logo
                color={mouseOver === "collapse" ? "black" : "secondary-500"}
                width="24"
                height="24"
                type="collapse"
              />
            </div>
            <span
              key={key + 7}
              className={`ms-3 ${
                !isOpen && "hidden"
              } animate-fade-right animate-once`}
            >
              Collapse
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
