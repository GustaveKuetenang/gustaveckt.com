"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const textLinks: { label: string; href: string }[] = [
  { label: "Accueil", href: "/" },
  { label: "Travaux", href: "/works" },
  { label: "A-propos", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Footer = () => {
const currentRoute = usePathname();
    
  return (
    <nav className="flex flex-col justify-center items-center space-y-6 max-w-7xl mx-auto py-10 mt-8">
      <div>
        <Link href="/" className="text-2xl font-semibold !text-black">
          Gustave<span className="text-blue-600"> Kuetenang</span>
        </Link>
      </div>
      <ul className="flex space-x-6 nav-links d-none text-gray-600">
        {textLinks.map((link, index) => (
          <li key={index} className="nav-item">
            <Link
              href={link.href}
              className={`nav-link-footer ${
                currentRoute === link.href ? "text-blue-600" : ""
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <p className="text-gray-500">
        &copy; Designed by{" "}
        <span className="text-blue-60">Gustave Kuetenang</span>
      </p>
    </nav>
  );
};

export default Footer;
