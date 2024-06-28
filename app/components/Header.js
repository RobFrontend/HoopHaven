"use client";

import Headroom from "react-headroom";
import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <Headroom>
      <header className="flex justify-between items-center px-8 py-8">
        <Logo />
        <Navigation />
      </header>
    </Headroom>
  );
}

export default Header;
