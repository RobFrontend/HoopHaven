"use client";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

function CourtCard({ court }) {
  return (
    <Fade triggerOnce>
      <div className="grid grid-cols-2 gap-1 rounded-lg shadow-md bg-neutral-800 hover:bg-neutral-900 transition duration-500 overflow-hidden max-md:grid-cols-1 max-md:h-full">
        <Image
          src={court.image}
          loading="lazy"
          width={500}
          height={500}
          className="object-cover object-center"
          alt={court.name}
        />

        <div className="flex flex-col justify-between p-6 max-sm:p-3 ">
          <div>
            <h3 className="text-2xl font-semibold mb-4 max-sm:text-lg">
              {court.name}
            </h3>
            <p className="text-md max-sm:text-xs">
              {court.info.slice(0, 69)}...
            </p>
          </div>
          <div>
            <p className="text-lg max-sm:text-sm">${court.priceHour} / Hour</p>
            <p className="text-lg mb-6 max-sm:text-sm">
              ${court.priceDay} / Day
            </p>
            <div className="grid  justify-items-center ">
              <Link
                href={`/courts/${court.id}`}
                className="text-lg px-6 py-2 bg-neutral-200 text-neutral-900 rounded-md font-semibold justify-center transition duration-300 hover:bg-neutral-100 max-sm:text-base max-sm:px4 max-sm:py-1"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default CourtCard;
