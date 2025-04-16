"use client";

import { useEffect } from "react";

export default function SplineViewer() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js";
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      {/* @ts-expect-error - Spline Viewer is not yet supported in TypeScript */}
      <spline-viewer
        url="https://prod.spline.design/7v0-U5xMxsv9-PEk/scene.splinecode"
        className="w-full h-full"
        loading="lazy"
        branding="false"
      />
    </div>
  );
}
