"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-gray-200 sticky top-0 bg-white z-10">
      <nav className="max-w-2xl mx-auto w-full px-6 py-4 flex justify-center gap-8 text-sm">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`transition-colors hover:text-blue-600 ${
              pathname === href
                ? "text-blue-600 font-semibold"
                : "text-gray-600"
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
