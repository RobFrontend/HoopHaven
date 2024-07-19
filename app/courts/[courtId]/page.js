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
  return ids;
}

export default async function Page({ params }) {
  const court = await getCourt(params.courtId);

  return (
    <div className="px-8 py-16">
      <h1 className="text-neutral-300 max-sm:text-5xl max-md:text-6xl max-xl:text-8xl max-xl:pb-8">
        {court.name}
      </h1>
      <div className="grid grid-cols-2 gap-3 max-xl:grid-cols-1">
        <Image
          src={court.image}
          loading="lazy"
          width={800}
          height={800}
          className="rounded-lg max-xl:justify-self-center"
          alt={court.name}
        />
        <div className="flex flex-col justify-between p-3 max-xl:gap-6">
          <p className="text-neutral-100 text-4xl max-md:text-xl max-sm:text-base">
            {court.info}
          </p>
          <div>
            <p className="text-neutral-100 text-5xl max-md:text-2xl max-sm:text-xl">
              For 1 hour: ${court.priceHour}
            </p>
            <p className="text-neutral-100 text-5xl max-md:text-2xl max-sm:text-xl">
              For 1 day: ${court.priceDay}
            </p>
          </div>
          <button className="bg-neutral-800 text-neutral-100 text-6xl py-3 px-6 font-semibold rounded-lg hover:opacity-80 transition duration-300 max-md:text-4xl max-sm:text-2xl">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
