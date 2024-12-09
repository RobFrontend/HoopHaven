import { signInAction } from "../lib/actions";

function SignInBtn() {
  return (
    <form action={signInAction}>
      <button className=" border-neutral-300 border-2 p-4">Log In</button>
    </form>
  );
}

export default SignInBtn;
