import { useState, useEffect } from "react";

const CursorEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      className="fixed w-32 h-32 bg-blue-500 opacity-20 rounded-full blur-2xl pointer-events-none transition-transform duration-75 ease-out"
      style={{
        transform: `translate(${position.x - 64}px, ${position.y - 64}px)`,
      }}
    />
  );
};

export default CursorEffect;
