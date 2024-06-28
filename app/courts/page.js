import { Suspense } from "react";
import Courts from "../components/Courts";
import Spinner from "../components/Spinner";

export const metadata = {
  title: "Courts",
};

function Page() {
  return (
    <div>
      <h1>Courts</h1>
      <p>Info about offer</p>
      <Suspense fallback={<Spinner />}>
        <Courts />
      </Suspense>
    </div>
  );
}

export default Page;
