import {
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import React, { useRef } from "react";

interface IDockDetailProps {
  setDockId: React.Dispatch<React.SetStateAction<string | null>>;
}

function getTextWidth(text: string, font: string): number {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  if (!context) return 0; // Handle error gracefully
  context.font = font; // Set the font style
  const metrics = context.measureText(text); // Measure the text
  return metrics.width; // Return the width
}

function AppItems({
  mouseX,
  title,
  setSelectedId,
}: {
  mouseX: MotionValue;
  title: string;
  setSelectedId: any;
}) {
  let ref = useRef<HTMLDivElement>(null);
  const fontString =
    "16px 'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif";
  const titleWidth = getTextWidth(title, fontString) + 10;

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(
    distance,
    [-150, 0, 150],
    [titleWidth, titleWidth + 120, titleWidth]
  );
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <>
      <motion.div
        ref={ref}
        style={{ width }}
        className="cursor-pointer"
        onClick={() => setSelectedId(title)}
      >
        {title}
      </motion.div>
    </>
  );
}

const Dock: React.FC<IDockDetailProps> = ({ setDockId }) => {
  let mouseX = useMotionValue(Infinity);
  const items = [
    "About Me",
    "Portfolio",
    "Skills",
    "Resume",
    "Blog",
    "Contact",
  ];

  return (
    <>
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="mx-auto flex h-16 w-auto items-end gap-4 px-4 pb-3"
      >
        {items.map((value, i) => (
          <AppItems
            mouseX={mouseX}
            key={i}
            title={value}
            setSelectedId={setDockId}
          />
        ))}
      </motion.div>
    </>
  );
};

export default Dock;
