import SignInBtn from "../components/SignInBtn";

export const metadata = {
  title: "Login",
};

function page() {
  return (
    <div className="py-16 max-2xl:px-8">
      <div className="pb-10">
        <h1 className="text-neutral-300 max-sm:text-6xl max-md:text-7xl">
          Please log in
        </h1>
        <p className="text-lg max-sm:text-xs max-md:text-sm">
          using Google auth
        </p>
        <SignInBtn />
      </div>
    </div>
  );
}

export default page;
