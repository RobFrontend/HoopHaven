import Link from "next/link";

function Navigation() {
  return (
    <nav className="text-4xl font-light text-neutral-50 cursor-pointer z-50">
      <ul className="flex gap-12">
        <Link href="/">Home</Link>
        <Link href="/courts">Courts</Link>
        <Link href="/about">About</Link>
      </ul>
    </nav>
  );
}

export default Navigation;
