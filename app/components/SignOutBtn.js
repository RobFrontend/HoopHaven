import { signOutAction } from "../lib/actions";

function SignOutBtn() {
  return (
    <form action={signOutAction}>
      <button className=" border-neutral-300 border-2 p-4">Log Out</button>
    </form>
  );
}

export default SignOutBtn;
