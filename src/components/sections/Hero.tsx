"use client";

import SplineViewer from "../common/SplineViewer";

export default function Hero() {
  return (
    <>
      <SplineViewer />

      <section
        id="hero"
        className="min-h-screen flex items-center justify-center -mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <h1 className="text-5xl md:text-5xl font-bold mb-6">
            Hi, I&apos;m Jess —{" "}
            <span className="text-white">Product Designer.</span>
          </h1>
          <p className="text-5xl md:text-5xl  font-light text-snow-base/80">
            Enhancing human-centered design and building products from 0 to 100.
          </p>
        </div>
      </section>
    </>
  );
}
