import { getCourt } from "@/app/lib/data-service";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const { name } = await getCourt(params.courtId);
  return { title: `Court ${name}` };
}

export default async function Page({ params }) {
  const court = await getCourt(params.courtId);

  return (
    <div>
      <h1>{court.name}</h1>
      <div className="grid grid-cols-2 gap-3">
        <Image
          src={court.image}
          loading="lazy"
          width={800}
          height={800}
          alt={court.name}
        />
        <div className="flex flex-col justify-between p-3">
          <h2>{court.info}</h2>
          <div>
            <h2>For 1 hour: ${court.priceHour}</h2>
            <h2>For 1 day: ${court.priceDay}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
