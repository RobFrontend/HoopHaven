import { auth } from "../lib/auth";

async function Avatar() {
  const session = await auth();
  const avatar = session?.user?.image;
  if (!avatar) return null;
  return <img className="rounded-full" src={avatar} alt="your avatar" />;
}

export default Avatar;
