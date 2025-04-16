"use client";

import { useEffect, useRef } from "react";

export default function SplineViewer() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if script already exists
    const existingScript = document.querySelector('script[src*="splinetool"]');
    if (!existingScript) {
      const script = document.createElement("script");
      script.type = "module";
      script.src =
        "https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js";

      script.onload = () => {
        console.log("Spline script loaded successfully");
      };

      script.onerror = (error) => {
        console.error("Error loading Spline script:", error);
      };

      document.head.appendChild(script);
    }

    return () => {
      const script = document.querySelector('script[src*="splinetool"]');
      if (script) {
        script.remove();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-screen h-screen"
      style={{ zIndex: -1 }}
    >
      {/* @ts-expect-error - Spline Viewer is not yet supported in TypeScript */}
      <spline-viewer
        url="https://prod.spline.design/7v0-U5xMxsv9-PEk/scene.splinecode"
        style={{ width: "100vw", height: "100vh" }}
        loading="eager"
        branding="false"
      />
    </div>
  );
}
