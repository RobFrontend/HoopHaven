import { getCourt, getCourts } from "@/app/lib/data-service";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const { name } = await getCourt(params.courtId);
  return { title: `Court ${name}` };
}

export async function generateStaticParams() {
  const courts = await getCourts();
  const ids = courts.map((court) => ({
    courtId: String(court.id),
  }));
  console.log(ids);
  return ids;
}

export default async function Page({ params }) {
  const court = await getCourt(params.courtId);

  return (
    <div>
      <h1 className="text-neutral-300">{court.name}</h1>
      <div className="grid grid-cols-2 gap-3">
        <Image
          src={court.image}
          loading="lazy"
          width={800}
          height={800}
          className="rounded-lg"
          alt={court.name}
        />
        <div className="flex flex-col justify-between p-3">
          <p className="text-neutral-100 text-4xl">{court.info}</p>
          <div>
            <p className="text-neutral-100 text-5xl">
              For 1 hour: ${court.priceHour}
            </p>
            <p className="text-neutral-100 text-5xl">
              For 1 day: ${court.priceDay}
            </p>
          </div>
          <button className="bg-neutral-800 text-neutral-100 text-6xl py-3 px-6 font-semibold rounded-lg hover:opacity-80 transition duration-300">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
