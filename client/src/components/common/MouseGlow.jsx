import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-[140px] transition-all duration-150"
      style={{
        left: pos.x - 160,
        top: pos.y - 160,
      }}
    />
  );
}