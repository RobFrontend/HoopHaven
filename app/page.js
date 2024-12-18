import Image from "next/image";
import background from "@/public/background.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mt-12">
      <Image
        fill
        src={background}
        placeholder="blur"
        className="object-cover object-top"
        alt="basketball court"
        loading="lazy"
        quality={90}
      />

      <div className="relative  text-center max-md:grid items-center">
        <h1 className="text-neutral-100 mb-10 md:mt-24 tracking-tight font-bold drop-shadow-xl shadow-neutral-950 max-sm:text-5xl max-md:text-7xl">
          Hoops Haven
        </h1>
        <h2 className="text-neutral-50 mb-10 tracking-tight font-semibold drop-shadow-xl shadow-neutral-950 max-sm:hidden max-md:text-2xl max-lg:text-3xl">
          <Link
            className="px-4 border-b-4 border-neutral-600 transition-all duration-300 hover:border-neutral-100  hover:px-6 "
            href="/courts"
          >
            Discover Unique Basketball Courts for Rent Worldwide
          </Link>{" "}
        </h2>
        <h2 className="text-neutral-50 mb-4 tracking-tight  hidden font-semibold drop-shadow-xl shadow-neutral-950  max-sm:block text-2xl">
          {" "}
          Discover<br></br>
          <Link
            className="px-2 border-b-2  border-neutral-600 transition-all duration-300 hover:border-neutral-100  hover:px-6 "
            href="/courts"
          >
            Unique Basketball Courts
          </Link>
        </h2>
      </div>
    </main>
  );
}
