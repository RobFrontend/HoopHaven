import { Suspense } from "react";
import Courts from "../components/Courts";
import Spinner from "../components/Spinner";

export const metadata = {
  title: "Courts",
};

function Page() {
  return (
    <div>
      <div className="mb-16">
        <h1>Courts</h1>
        <p className="text-lg">
          Experience basketball like never before with our curated selection of
          unique courts set against breathtaking backdrops. From city skylines
          to volcanic vistas, each court offers a one-of-a-kind setting for you
          to elevate your game and create unforgettable memories. Choose your
          court, lace up your shoes, and get ready to play in extraordinary
          locations that will inspire and excite you.
        </p>
      </div>
      <Suspense fallback={<Spinner />}>
        <Courts />
      </Suspense>
    </div>
  );
}

export default Page;
