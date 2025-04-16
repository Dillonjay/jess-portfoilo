"use client";

import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Icons";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface NavLink {
  to: string;
  label: string;
  href: string;
}

interface NavigationProps {
  className?: string;
}

const NAV_LINKS: NavLink[] = [
  { to: "projects", label: "Projects", href: "/#projects" },
  { to: "about", label: "About Me", href: "/#about" },
  { to: "experience", label: "Experience", href: "/#experience" },
  { to: "references", label: "References", href: "/#references" },
  { to: "contact", label: "Contact", href: "/#contact" },
];

export default function Navigation({ className }: NavigationProps) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl h-[var(--nav-height)]",
        className
      )}
    >
      <Container className="h-full px-8">
        <div className="border-b border-snow-base/20 h-full">
          <div className="flex justify-between items-center h-full">
            <Link
              href="/"
              className="cursor-pointer text-snow-base hover:text-snow-dark transition-colors"
            >
              <Logo className="h-10 w-10" />
            </Link>

            <div className="hidden md:flex space-x-16">
              {NAV_LINKS.map((link) =>
                isHomePage ? (
                  <ScrollLink
                    key={link.to}
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className="text-snow-base hover:text-snow-dark transition-colors cursor-pointer text-xl font-bold"
                  >
                    {link.label}
                  </ScrollLink>
                ) : (
                  <Link
                    key={link.to}
                    href={link.href}
                    className="text-snow-base hover:text-snow-dark transition-colors cursor-pointer text-xl font-bold"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
}
