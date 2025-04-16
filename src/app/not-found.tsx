"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 100;
      const y = (e.clientY / window.innerHeight - 0.5) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-graphite-base text-snow-base flex items-center justify-center relative overflow-hidden">
      <div
        className="absolute w-[800px] h-[800px] rounded-full bg-[#2a2a2a]/20 blur-3xl"
        style={{
          transform: `translate(${mousePosition.x * 1.5}px, ${
            mousePosition.y * 1.5
          }px)`,
          transition: "transform 0.3s ease-out",
        }}
      />
      <div
        className="absolute w-[600px] h-[600px] rounded-full bg-[#333333]/20 blur-2xl"
        style={{
          transform: `translate(${mousePosition.x * -1.2}px, ${
            mousePosition.y * -1.2
          }px)`,
          transition: "transform 0.4s ease-out",
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full bg-[#1a1a1a]/30 blur-xl"
        style={{
          transform: `translate(${mousePosition.x * 0.8}px, ${
            mousePosition.y * 0.8
          }px)`,
          transition: "transform 0.5s ease-out",
        }}
      />

      <div className="relative z-10 text-center space-y-8 px-4">
        <h1 className="text-[12rem] font-bold leading-none tracking-tighter">
          404
        </h1>
        <h2 className="text-4xl font-light">
          Oops! Looks like this design got lost in the artboard
        </h2>
        <p className="text-snow-base/80 text-xl max-w-2xl mx-auto">
          Don&apos;t worry, even the best designers sometimes misplace their
          layers. Let&apos;s head back to the main canvas.
        </p>
        <Link
          href="/"
          className="inline-block font-bold px-8 py-4 bg-[#1a1a1a] hover:bg-[#2a2a2a] border border-snow-dark/20 hover:border-snow-base/20
                   text-snow-base rounded-lg transition-all duration-300 
                   backdrop-blur-sm text-lg transform hover:-translate-y-0.5
                   active:translate-y-0 active:scale-95 active:brightness-90"
        >
          Take me Back
        </Link>
      </div>
    </div>
  );
}
