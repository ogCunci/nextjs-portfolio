"use client";
import Link from "next/link";
import NavLink from "./NavLink";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navLinks = [
  {
    title: "Home",
    path: "/"
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

export default function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <nav className="fixed lg:px-20 md:px-10 px-5 mr-auto top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl sm:text-5xl text-white font-semibold"
        >
          <Image
            src="/images/logo.png"
            alt="hero-image"
            width={64}
            height={64}
          />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!isNavbarOpen ? (
            <button
              onClick={() => setIsNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setIsNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
            {navLinks.map((navLink, index) => (
              <li key={index}>
                <NavLink title={navLink.title} href={navLink.path} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isNavbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
}
