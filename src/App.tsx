import { useState } from "react";
import "./App.css";
import Dock from "./components/Dock";
import DockDetail from "./components/DockDetail";
import profileImage from "./assets/profile.jpg";

function App() {
  const [dockId, setDockId] = useState<string | null>(null);

  return (
    <>
      <div className="h-screen w-screen flex flex-col justify-center items-center relative">
        <div
          className={`flex flex-col justify-center items-center fixed ${
            dockId && "blur"
          }`}
        >
          <div
            className="text-blue-500 w-60 h-60 rounded-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${profileImage})`,
            }}
          ></div>

          {/* <div className="absolute w-4 h-4 bg-blue-500 rounded-full top-0 left-1/2 transform -translate-x-1/2"></div>
          <div className="absolute w-4 h-4 bg-blue-500 rounded-full top-1/2 left-0 transform -translate-y-1/2"></div>
          <div className="absolute w-4 h-4 bg-blue-500 rounded-full top-1/2 right-0 transform -translate-y-1/2"></div>
          <div className="absolute w-4 h-4 bg-blue-500 rounded-full bottom-0 left-1/2 transform -translate-x-1/2"></div>

          <div className="absolute w-4 h-4 bg-blue-500 rounded-full top-1/4 left-1/4"></div>
          <div className="absolute w-4 h-4 bg-blue-500 rounded-full top-1/4 right-1/4"></div>
          <div className="absolute w-4 h-4 bg-blue-500 rounded-full bottom-1/4 left-1/4"></div> */}
          {/* <div
            className="absolute w-4 h-4 bg-blue-100 rounded-full bottom-1/4 right-1/4"
            onClick={() => setDockId(true)}
          ></div> */}

          {/* <div className="mt-4 text-center flex">
          <p className="text-xl font-semibold">Home</p>
          <p className="text-lg text-gray-600">About</p>
        </div> */}
          <Dock setDockId={setDockId} />
        </div>
        {dockId && <DockDetail setDockId={setDockId} dockId={dockId} />}
      </div>

      {/* <div className="h-screen w-screen flex flex-col justify-center items-center">
        <div className="text-blue-500 center w-60 h-60 rounded-full bg-[url('./images/bks.JPG')] bg-cover bg-center"></div>
        <div className="mt-4 text-center flex ">
          <p className="text-xl font-semibold">Home</p>
          <p className="text-lg text-gray-600">About Me</p>
          <p className="text-lg text-gray-600">Portfolio</p>
          <p className="text-lg text-gray-600">Contact</p>
        </div>
      </div> */}
    </>
  );
}

export default App;
