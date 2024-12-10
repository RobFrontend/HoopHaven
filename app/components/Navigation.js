import Link from "next/link";
import Avatar from "./Avatar";

function Navigation() {
  return (
    <nav className="text-4xl font-light text-neutral-50 cursor-pointer z-50 max-sm:hidden md:block">
      <ul className="flex gap-12">
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
          <Link
            className="hover:opacity-80 transition duration-300 h-6 w-6 self-start"
            href="/account"
          >
            <Avatar />
          </Link>
        </div>
      </ul>
    </nav>
  );
}

export default Navigation;
