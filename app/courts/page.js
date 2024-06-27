import { getCourts } from "@/app/lib/data-service";
import Image from "next/image";

async function Page() {
  const courts = await getCourts();
  if (!courts.length) return null;
  console.log(courts);
  return (
    <div>
      <h1>Courts</h1>
      <h2 className="text-4xl">{courts[0].name}</h2>
      <p className="text-lg">{courts[0].info}</p>
      <p className="text-lg">Price for hour: ${courts[0].priceHour}</p>
      <p className="text-lg">Price for Day: ${courts[0].priceDay}</p>
      <Image
        src={courts[0].image}
        width={500}
        height={500}
        alt="Court"
        className="rounded-2xl"
      />
    </div>
  );
}

export default Page;
