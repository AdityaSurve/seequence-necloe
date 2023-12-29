import { useState } from "react";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

export default function App() {
  const [activeState, setActiveState] = useState("sample-projects");
  const [loader, setLoader] = useState(false);
  return (
    <div className="h-screen font-workSans w-screen overflow-hidden relative flex justify-center items-center">
      <Sidebar activeState={activeState} setActiveState={setActiveState} />
      <Navbar />
      <Main activeState={activeState} setLoader={setLoader} />
      {loader && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary-500"></div>
        </div>
      )}
    </div>
  );
}
