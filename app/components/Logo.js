import Image from "next/image";
import Link from "next/link";
import logo from "@/app/icon.png";

function Logo() {
  return (
    <Link href="/" className="z-50">
      <Image src={logo} width="60" height="60" alt="logo" />
    </Link>
  );
}

export default Logo;
