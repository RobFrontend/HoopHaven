"use client";
import Link from "next/link";

import { useState } from "react";

function MobileNavigation({ children }) {
  const [isOn, setIsOn] = useState(false);

  return (
    <nav className="text-4xl font-light text-neutral-50 cursor-pointer z-50 sm:hidden">
      <div className="flex items-center gap-2">
        <button className="cursor-pointer" onClick={() => setIsOn(!isOn)}>
          MENU
        </button>
        <Link
          className="hover:opacity-80 transition duration-300 h-6 w-6 self-start"
          href="/account"
        >
          {children}
        </Link>
      </div>
      {isOn && (
        <ul
          className="absolute top-0 left-0 h-screen w-full grid gap-10 justify-end content-start p-4  bg-neutral-800/95"
          onClick={() => setIsOn(!isOn)}
        >
          <Link
            className="hover:opacity-80 transition duration-300 max-md:text-2xl"
            href="/"
          >
            Home
          </Link>
          <Link
            className="hover:opacity-80 transition duration-300 max-md:text-2xl"
            href="/courts"
          >
            Courts
          </Link>
          <Link
            className="hover:opacity-80 transition duration-300 max-md:text-2xl"
            href="/about"
          >
            About
          </Link>
          <div className="flex gap-2 items-center">
            <Link
              className="hover:opacity-80 transition duration-300 max-md:text-2xl"
              href="/account"
            >
              Account
            </Link>
          </div>
        </ul>
      )}
    </nav>
  );
}

export default MobileNavigation;
