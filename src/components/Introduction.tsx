import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
  return (
    <>
      <div className="text-4xl font-bold text-center text-gray-800 mb-4">
        Bikesh Sitikhu
      </div>
      <TypeAnimation
        sequence={["I'm a Computer Engineer", 1000, "I'm a Developer", 1000]}
        speed={50}
        repeat={Infinity}
        style={{ fontSize: "2em", textAlign: "center", color: "#4A5568" }} // Tailwind's gray-700 color
      />
    </>
  );
};

export default Introduction;
