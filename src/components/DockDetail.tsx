import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useRef } from "react";
import ContactForm from "./ContactForm";

interface IDockDetailProps {
  setDockId: React.Dispatch<React.SetStateAction<string | null>>;
  dockId: string;
}

const DockDetail: React.FC<IDockDetailProps> = ({ setDockId, dockId }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setDockId(null);
      }
    };

    if (dockId) {
      document.addEventListener("mousedown", handleClickOutside);
    }
  }, [dockId, setDockId]);

  return (
    <AnimatePresence>
      <motion.div
        ref={modalRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="z-30 w-1/2 min-h-96"
      >
        <ContactForm />
        {/* <button onClick={() => setDockId(null)}>Close Modal</button> */}
      </motion.div>
    </AnimatePresence>
  );
};

export default DockDetail;
