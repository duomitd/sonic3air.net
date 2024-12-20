import Link from "next/link";

export function Header() {
  return (
    <header className="bg-white bg-opacity-90 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-900">Sonic 3 A.I.R.</div>
        <div className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-900 transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/sonic-3-air-android-guide"
            className="text-gray-600 hover:text-gray-900 transition duration-300"
          >
            Android Guide
          </Link>
        </div>
      </nav>
    </header>
  );
}
