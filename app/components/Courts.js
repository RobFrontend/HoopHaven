import { getCourts } from "../lib/data-service";
import CourtCard from "./CourtCard";

export const revalidate = 3600;

async function Courts() {
  const courts = await getCourts();
  if (!courts.length) return null;
  return (
    <div>
      <h2 className="mb-8 max-sm:text-2xl max-md:text-3xl max-md:mb-6">
        Discover Our Extraordinary Basketball Courts
      </h2>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12 max-md:gap-8 mb-12 max-md:grid-cols-2">
        {courts.map((court) => (
          <CourtCard court={court} key={court.id} />
        ))}
      </div>
    </div>
  );
}

export default Courts;
