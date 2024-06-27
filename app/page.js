import Image from "next/image";
import background from "@/public/background.jpg";

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

      <div className="relative  text-center">
        <h1 className="text-12xl text-slate-50 mb-10 tracking-tight font-normal drop-shadow-xl shadow-slate-950">
          Hoops Haven
        </h1>
      </div>
    </main>
  );
}
