"use client";

import Headroom from "react-headroom";
import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <Headroom>
      <header className="flex justify-between items-center  px-12  h-24">
        <Logo />
        <Navigation />
      </header>
    </Headroom>
  );
}

export default Header;
