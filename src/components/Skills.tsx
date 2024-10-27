import { skills } from "../constants";

const Skills = () => {
  const getRandomBounceDuration = () => {
    // Generate a random duration between 1s and 3s
    return `${Math.random() * 2 + 1}s`;
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {Object.values(skills).map((skill) => (
        <div className="relative flex space-x-4 space-y-4">
          {skill.map((d) => (
            <div
              key={d.name}
              className="w-24 h-24 rounded-full bg-sagegreen flex items-center justify-center shadow-lg transform transition-transform hover:scale-110 animate-bounce"
              style={{ animationDuration: getRandomBounceDuration() }}
            >
              <img src={d.logo} alt={d.name} className="w-12 h-auto" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Skills;
