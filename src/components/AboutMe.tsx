import { useEffect, useRef } from "react";
import { supabase } from "../config/supabase";
import { browserName } from "react-device-detect";
import axios from "axios";

interface IDockDetailProps {
  setDockId: React.Dispatch<React.SetStateAction<string | null>>;
}

const AboutMe: React.FC<IDockDetailProps> = ({ setDockId }) => {
  const hasRegistered = useRef(false);

  const registerVisitor = async () => {
    const res = await axios.get("https://api.ipify.org/?format=json");
    await supabase.from("Visitor").insert({
      browser: browserName,
      ip_address: res.data.ip,
    });
  };

  useEffect(() => {
    if (!hasRegistered.current) {
      registerVisitor();
      hasRegistered.current = true;
    }
  }, []);

  return (
    <>
      <div className="font-sans">
        <div className="text-center max-w-2xl max-md:max-w-md mx-auto">
          <div>
            <h2 className="text-gray-800 md:text-4xl text-3xl font-extrabold mb-4 md:!leading-[45px]">
              Mastering Software Development -{" "}
              <span className="text-blue-600">Powering </span>
              Dynamic Applications
            </h2>
            <p className="text-gray-600 mt-6 text-sm leading-relaxed">
              Passionate about building scalable software solutions, I leverage
              modern development practices to create robust applications that
              drive user engagement and satisfaction.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 items-center mt-12">
              <div className="flex flex-col items-center text-center">
                <h5 className="font-bold text-2xl text-blue-600 mb-2">4+</h5>
                <p className="text-gray-600 text-sm font-semibold">
                  Years Experience
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <h5 className="font-bold text-2xl text-blue-600 mb-2">15+</h5>
                <p className="text-gray-600 text-sm font-semibold">Projects</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <h5 className="font-bold text-2xl text-blue-600 mb-2">5</h5>
                <p className="text-gray-600 text-sm font-semibold">Partners</p>
              </div>
            </div>

            <div className="mt-12 flex gap-x-6 gap-y-4 justify-center max-sm:flex-col">
              <button
                type="button"
                className="bg-blue-600 hover:bg-transparent hover:text-blue-600 border border-blue-600 transition-all text-white font-bold text-sm rounded px-6 py-3"
                onClick={() => setDockId("Contact")}
              >
                Hire Me!!!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
