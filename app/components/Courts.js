import { getCourts } from "../lib/data-service";
import CourtCard from "./CourtCard";

async function Courts() {
  const courts = await getCourts();
  if (!courts.length) return null;
  return (
    <div>
      <h2 className="mb-10">Discover Our Extraordinary Basketball Courts</h2>
      <div className="grid grid-cols-2 gap-12 mb-12">
        {courts.map((court) => (
          <CourtCard court={court} key={court.id} />
        ))}
      </div>
    </div>
  );
}

export default Courts;
