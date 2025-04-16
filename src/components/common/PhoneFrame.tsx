"use client";

import Image from "next/image";
import { useState, useRef, useCallback } from "react";

interface PhoneFrameProps {
  gifSrc: string;
  alt?: string;
  className?: string;
  scale?: "none" | "small" | "medium" | "large";
}

export default function PhoneFrame({
  gifSrc,
  alt = "Phone demo",
  className = "",
  scale = "medium", // Default scale
}: PhoneFrameProps) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const phoneRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | undefined>(undefined);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!phoneRef.current) return;

    // Clear any existing timeout
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    const rect = phoneRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate distance from center (-1 to 1)
    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (e.clientY - centerY) / (rect.height / 2);

    // Set a timeout for smoother updates
    timeoutRef.current = window.setTimeout(() => {
      setRotation({
        x: y * -8,
        y: x * 8,
      });
    }, 50); // Small delay for smoother movement
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  const scaleClasses = {
    none: "scale-100",
    small: "scale-[1.02]",
    medium: "scale-[1.045]",
    large: "scale-[1.1]",
  };

  return (
    <div
      className={`relative group cursor-pointer ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={phoneRef}
    >
      {/* iPhone Frame */}
      <div
        className={`relative mx-auto w-[280px] h-[580px] rounded-[2.5rem] shadow-[0_0_20px_rgba(0,0,0,0.15)] transition-all duration-300 ease-out hover:shadow-2xl will-change-transform ${
          !isHovered ? "animate-gentle-pulse" : ""
        }`}
        style={{
          transform: `
            perspective(1500px) 
            rotateX(${rotation.x}deg) 
            rotateY(${rotation.y}deg)
            ${isHovered ? "scale(1.01)" : "scale(1)"}
          `,
          transition: "transform 0.6s cubic-bezier(0.33, 1, 0.68, 1)",
        }}
      >
        {/* Side shadows for 3D effect */}
        <div
          className="absolute inset-0 rounded-[2.5rem] transition-all duration-600"
          style={{
            background: `
              linear-gradient(
                ${90 + rotation.y * 3}deg,
                rgba(0,0,0,${0.15 - rotation.y * 0.01}) 0%,
                rgba(0,0,0,0) 50%,
                rgba(0,0,0,${0.15 + rotation.y * 0.01}) 100%
              )
            `,
            opacity: isHovered ? 1 : 0,
            transition: "all 0.6s cubic-bezier(0.33, 1, 0.68, 1)",
          }}
        />

        {/* Outer metallic frame */}
        <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-[#c0c0c0] via-[#d8d8d8] to-[#c0c0c0]">
          {/* Metallic highlights */}
          <div
            className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-[#b0b0b0] via-transparent to-[#ffffff] opacity-50 transition-all duration-600"
            style={{
              opacity: isHovered ? 0.6 : 0.5,
              transition: "opacity 0.6s cubic-bezier(0.33, 1, 0.68, 1)",
            }}
          />
          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-[#ffffff20] via-transparent to-[#00000020]" />
        </div>

        {/* Side Buttons */}
        {/* Volume Up */}
        <div className="absolute -left-[2px] top-[100px] w-[3px] h-[25px] bg-gradient-to-r from-[#b8b8b8] via-[#d8d8d8] to-[#c0c0c0] rounded-l-sm shadow-[-1px_0_1px_rgba(0,0,0,0.15)] before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/20 before:via-transparent before:to-black/20" />
        {/* Volume Down */}
        <div className="absolute -left-[2px] top-[135px] w-[3px] h-[25px] bg-gradient-to-r from-[#b8b8b8] via-[#d8d8d8] to-[#c0c0c0] rounded-l-sm shadow-[-1px_0_1px_rgba(0,0,0,0.15)] before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/20 before:via-transparent before:to-black/20" />
        {/* Silent Switch */}
        <div className="absolute -left-[2px] top-[60px] w-[3px] h-[15px] bg-gradient-to-r from-[#b8b8b8] via-[#d8d8d8] to-[#c0c0c0] rounded-l-sm shadow-[-1px_0_1px_rgba(0,0,0,0.15)] before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/20 before:via-transparent before:to-black/20" />
        {/* Power Button */}
        <div className="absolute -right-[2px] top-[100px] w-[3px] h-[35px] bg-gradient-to-l from-[#b8b8b8] via-[#d8d8d8] to-[#c0c0c0] rounded-r-sm shadow-[1px_0_1px_rgba(0,0,0,0.15)] before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/20 before:via-transparent before:to-black/20" />

        {/* Inner black band */}
        <div className="absolute inset-[8px] rounded-[2.2rem] bg-black">
          {/* Screen Content */}
          <div className="absolute inset-[4px] rounded-[2rem] overflow-hidden bg-white">
            <Image
              src={gifSrc}
              alt={alt}
              width={256}
              height={556}
              className={`object-cover w-full h-full transition-transform duration-300 ${scaleClasses[scale]}`}
              priority
              unoptimized // Important for GIFs to play
            />
          </div>
        </div>

        {/* Dynamic Island */}
        <div className="absolute top-[8px] left-1/2 -translate-x-1/2 w-[95px] h-[35px] bg-black rounded-full z-10">
          {/* Camera & Sensors */}
          <div className="absolute top-1/2 -translate-y-1/2 right-5 w-3 h-3 rounded-full bg-[#1a1a1a] ring-[2px] ring-black/30">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#2a2a2a]" />
          </div>
        </div>

        {/* Bottom Speaker & Port */}
        <div className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-[35%] h-[4px] bg-[#a0a0a0] rounded-b-sm flex items-center justify-center">
          <div className="w-[40%] h-[1px] bg-[#808080] rounded-full opacity-50" />
        </div>
      </div>
    </div>
  );
}
