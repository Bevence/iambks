import { useState } from "react";
import "./App.css";
import Dock from "./components/Dock";
import DockDetail from "./components/DockDetail";
import profileImage from "./assets/profile.jpg";
import Introduction from "./components/Introduction";

function App() {
  const [dockId, setDockId] = useState<string | null>(null);

  return (
    <>
      <div className="h-screen w-screen flex flex-col justify-center items-center relative">
        <div className="z-30 w-1/2 min-h-96 fixed">
          {dockId && <DockDetail setDockId={setDockId} dockId={dockId} />}
        </div>
        <div className="h-1/3 flex flex-col justify-center items-center">
          <Introduction />
        </div>
        <div
          className={`flex flex-col justify-center items-center h-2/3 ${
            dockId && "blur"
          }`}
        >
          <div
            className="text-blue-500 w-60 h-60 rounded-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${profileImage})`,
            }}
          ></div>

          <Dock setDockId={setDockId} />
        </div>
      </div>
      <footer className="w-full h-16 fixed bottom-0 left-0 bg-gray-800 text-white flex justify-center items-center">
        <p className="text-center">© 2024 iambks. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
