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


const Nav = () => {
  const currentRoute = usePathname();

  return (
    <div className="flex justify-between max-w-7xl px-2 sm:px-4 items-center mx-auto py-10 relative z-[20]">
      <div className="hidden lg:block cursor-pointer">
        <Link href="/" className="text-2xl font-semibold !text-black">
          Gustave<span className="text-blue-600"> Kuetenang</span>
        </Link>
      </div>
      <div className="block lg:hidden">
        <Link href="/" className="text-2xl font-semibold !text-black">
          G.<span className="text-blue-600"> CKT</span>
        </Link>
      </div>
      <ul className="md:flex space-x-8 nav-links hidden">
        {textLinks.map((link, index) => (
          <li key={index} className="nav-item">
            <Link
              href={link.href}
              className={`nav-link ${currentRoute === link.href ? 'text-blue-600' : ''}`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <Link href="/contact" className="rounded-full btn-primary ">
          Me contacter
        </Link>
      </div>
    </div>
  );
};

export default Nav;
