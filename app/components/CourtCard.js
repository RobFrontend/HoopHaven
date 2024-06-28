"use client";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

function CourtCard({ court }) {
  return (
    <Fade triggerOnce>
      <div className="grid grid-cols-2 gap-1 rounded-lg shadow-md bg-slate-800 overflow-hidden">
        <Image
          src={court.image}
          width={500}
          height={500}
          className="object-cover object-center"
          alt={court.name}
        />

        <div className="flex flex-col justify-between p-3">
          <div>
            <h3 className="text-2xl font-semibold">{court.name}</h3>
            <p className="text-md">{court.info.slice(0, 69)}...</p>
          </div>
          <div>
            <p>1 hour: ${court.priceHour}</p>
            <p>1 day: ${court.priceDay}</p>
            <Link href={`/courts/${court.id}`} className="text-lg">
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default CourtCard;
