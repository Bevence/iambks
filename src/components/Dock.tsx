import {
  AnimatePresence,
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import React, { useRef, useState } from "react";

interface IDockDetailProps {
  setDockId: React.Dispatch<React.SetStateAction<string | null>>;
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

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [80, 200, 80]);
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
  const items = ["Home", "About Me", "Portfolio", "Contact"];

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
