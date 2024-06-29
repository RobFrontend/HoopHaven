import Link from "next/link";

function Navigation() {
  return (
    <nav className="text-4xl font-light text-neutral-50 cursor-pointer z-50">
      <ul className="flex gap-12">
        <Link className="hover:opacity-80 transition duration-300" href="/">
          Home
        </Link>
        <Link
          className="hover:opacity-80 transition duration-300"
          href="/courts"
        >
          Courts
        </Link>
        <Link
          className="hover:opacity-80 transition duration-300"
          href="/about"
        >
          About
        </Link>
      </ul>
    </nav>
  );
}

export default Navigation;
