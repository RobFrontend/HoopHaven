import Link from "next/link";

function NotFound() {
  return (
    <main className="text-center space-y-6 mt-4">
      <h1 className="text-3xl font-semibold">This court could not be found</h1>
      <Link
        href="/courts"
        className="inline-block bg-accent-500 text-slate-50 px-6 py-3 text-lg"
      >
        Go back to all courts
      </Link>
    </main>
  );
}

export default NotFound;
