import Image from "next/image";
import Link from "next/link";
import logo from "@/app/icon.png";

function Logo() {
  return (
    <Link href="/" className="z-50">
      <Image
        src={logo}
        width="60"
        height="60"
        alt="logo"
        className="hover:opacity-80 hover:drop-shadow-lg drop-shadow-md transition duration-300 max-sm:h-12 max-sm:w-12"
      />
    </Link>
  );
}

export default Logo;
