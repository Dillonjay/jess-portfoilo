import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-xl font-bold">
            Jess Portfolio
          </Link>
          <div className="hidden sm:flex space-x-8">
            <Link href="/" className="hover:text-gray-600">
              Home
            </Link>
            <Link href="/projects" className="hover:text-gray-600">
              Projects
            </Link>
            <Link href="/about" className="hover:text-gray-600">
              About
            </Link>
            <Link href="/contact" className="hover:text-gray-600">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 