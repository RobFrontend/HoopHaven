import { auth } from "../lib/auth";

export const metadata = {
  title: "account",
};

async function account() {
  const session = await auth();
  return (
    <div className="py-16 max-2xl:px-8">
      {session.user ? (
        <div className="pb-10">
          <h1 className="text-neutral-300 max-sm:text-6xl max-md:text-7xl">
            Welcome
          </h1>
          <h2>{session.user.name}</h2>
          {session.user?.image && (
            <img src={session.user.image} alt={session.user.name} />
          )}
          <p className="text-lg max-sm:text-xs max-md:text-sm">
            Feel free to explore our courts
          </p>
        </div>
      ) : (
        <h1 className="text-neutral-300 max-sm:text-6xl max-md:text-7xl">
          Problem with loggin
        </h1>
      )}
    </div>
  );
}

export default account;
