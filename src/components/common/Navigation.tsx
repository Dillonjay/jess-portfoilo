"use client";

import { Link as ScrollLink } from "react-scroll";
import { Logo } from "./Icons";

interface NavLink {
  to: string;
  label: string;
}

const NAV_LINKS: NavLink[] = [
  { to: "projects", label: "Projects" },
  { to: "about", label: "About Me" },
  { to: "experience", label: "Experience" },
  { to: "references", label: "References" },
  { to: "contact", label: "Contact" },
];

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-graphite-base">
      <div className="mx-8 border-b border-snow-base/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center py-4">
            <ScrollLink
              to="hero"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="cursor-pointer text-snow-base hover:text-snow-dark transition-colors"
            >
              <Logo className="h-10 w-10" />
            </ScrollLink>

            <div className="hidden md:flex space-x-12">
              {NAV_LINKS.map((link) => (
                <ScrollLink
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className="text-snow-base hover:text-snow-dark transition-colors cursor-pointer text-lg"
                >
                  {link.label}
                </ScrollLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
