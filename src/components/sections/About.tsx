"use client";

import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center  backdrop-blur-sm bg-[#1A1A1A]/1 text-snow-base py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-24">
          <div className="md:col-span-8">
            <h2 className="text-5xl font-bold mb-20 uppercase">About Me</h2>
            <p className="text-2xl font-light text-snow-base/80 mb-6">
              Hi, I’m Jess — Love to create intuitive, minimal experiences.“less
              is more” and love designing clean, thoughtful interfaces that feel
              effortless to use.
            </p>
            <p className="text-2xl font-light text-snow-base/80 mb-6">
              I’ve built 0→100 products in fast-paced startups, often as a solo
              designer. I shape design systems, ship high-fidelity work, and
              thrive in curious, collaborative teams.
            </p>
            <p className="text-2xl font-light text-snow-base/80">
              Outside of work, you’ll usually find me exercising, doing yoga, or
              curating oddly specific playlists Check them here. I&apos;m all
              about building with intention and having fun while we&apos;re at
              it.
            </p>
          </div>

          <div className="relative md:col-span-4 h-[600px]">
            <Image
              src="/images/profile-pic.png"
              alt="Jess"
              fill
              className="object-contain object-top rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
