import Image from "next/image";
import GoogleLogoImg from "@/public/googleLogo.png";
import { signInAction } from "../lib/actions";

function SignInBtn() {
  return (
    <form action={signInAction}>
      <button className=" border-neutral-300 border-2 p-4 flex items-center gap-1 hover:-translate-y-[4px] active:-translate-y-[2px] active:shadow-neutral-300/10 active:shadow-lg transition-all duration-300">
        <p className="text-2xl max-[375px]:text-lg">Log in with </p>
        <Image
          src={GoogleLogoImg}
          quality={100}
          className="max-h-7 w-auto self-start max-[375px]:max-h-6"
          alt="google logo"
        />
      </button>
    </form>
  );
}

export default SignInBtn;
