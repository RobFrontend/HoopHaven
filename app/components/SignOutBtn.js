import { signOutAction } from "../lib/actions";

function SignOutBtn() {
  return (
    <form action={signOutAction}>
      <button className=" border-neutral-300 border-2 p-4 hover:-translate-y-[4px] active:-translate-y-[2px] active:shadow-neutral-300/10 active:shadow-lg transition-all duration-300">
        <p className="text-2xl">Sign out</p>
      </button>
    </form>
  );
}

export default SignOutBtn;
