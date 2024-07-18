import { Suspense } from "react";
import Courts from "../components/Courts";
import Spinner from "../components/Spinner";

export const metadata = {
  title: "Courts",
};

function Page() {
  return (
    <div className="py-16 max-2xl:px-8">
      <div className="pb-10">
        <h1 className="text-neutral-300 max-sm:text-6xl max-md:text-7xl">
          Courts
        </h1>
        <p className="text-lg max-sm:text-xs max-md:text-sm">
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
