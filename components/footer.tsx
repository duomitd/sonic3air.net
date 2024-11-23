import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600 mb-4">
          &copy; 2024 Sonic 3 A.I.R. Project. All rights reserved.
        </p>
        <div className="space-x-4">
          {/* <Link
            href="#"
            className="text-gray-600 hover:text-gray-900 transition duration-300"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-gray-600 hover:text-gray-900 transition duration-300"
          >
            Terms of Service
          </Link> */}
          <Link
            href="https://github.com/duomitd/sonic3air.net"
            className="text-gray-600 hover:text-gray-900 transition duration-300"
          >
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}
