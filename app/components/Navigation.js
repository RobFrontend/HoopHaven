import Link from "next/link";

function Navigation() {
  return (
    <nav className="text-4xl font-light text-neutral-50 cursor-pointer z-50">
      <ul className="flex gap-12">
        <Link
          className="hover:opacity-80 transition duration-300 max-sm:hidden md:block"
          href="/"
        >
          Home
        </Link>
        <Link
          className="hover:opacity-80 transition duration-300 max-sm:text-2xl"
          href="/courts"
        >
          Courts
        </Link>
        <Link
          className="hover:opacity-80 transition duration-300 max-sm:text-2xl"
          href="/about"
        >
          About
        </Link>
        <Link
          className="hover:opacity-80 transition duration-300 max-sm:text-2xl"
          href="/account"
        >
          Account
        </Link>
      </ul>
    </nav>
  );
}

export default Navigation;
