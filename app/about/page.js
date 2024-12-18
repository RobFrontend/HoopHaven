import Image from "next/image";
import about1 from "@/public/about1.jpg";
import about2 from "@/public/about2.jpg";
import about3 from "@/public/about3.jpg";

function Page() {
  return (
    <div className="py-16 px-8">
      <h1 className="text-neutral-300 max-sm:text-6xl max-md:text-7xl">
        About Us
      </h1>
      <p className="text-xl">
        Welcome to our unique world of basketball courts for rent! At our
        website, we offer a diverse selection of basketball courts in
        extraordinary locations, ranging from cityscapes to natural wonders like
        forests, deserts, lakes, mountains, oceans, ice, and even near a
        volcano.
      </p>
      {/* //////////////////////////////////////////////////// */}
      <div className="grid grid-cols-2 gap-6 py-12 px-6 max-md:grid-cols-1 max-md:px-2">
        <Image
          src={about1}
          placeholder="blur"
          alt="court"
          className="rounded-lg"
        />
        <div className="flex flex-col gap-3 p-2">
          <h2 className="text-6xl text-neutral-200 pb-2 max-sm:text-3xl max-md:text-4xl">
            Why Choose Us?
          </h2>
          <h3 className="text-3xl max-md:text-2xl max-sm:text-xl">
            Unparalleled Variety:
          </h3>
          <p className="text-lg  max-md:text-base max-sm:text-sm">
            Explore a wide range of basketball courts unlike any other, each
            offering a unique backdrop and experience.
          </p>
          <h3 className="text-3xl max-md:text-2xl max-sm:text-xl">
            Memorable Experiences:
          </h3>
          <p className="text-lg  max-md:text-base max-sm:text-sm">
            Create lasting memories by playing basketball in stunning and
            unconventional settings that will elevate your game to new heights.
          </p>
          <h3 className="text-3xl max-md:text-2xl max-sm:text-xl">
            Convenience:
          </h3>
          <p className="text-lg  max-md:text-base max-sm:text-sm">
            Easily browse and book your preferred basketball court online,
            saving you time and effort in finding the perfect location for your
            game.
          </p>
        </div>
      </div>
      {/* //////////////////////////////////////////////////// */}
      <div className="grid grid-cols-2 gap-6 py-8 px-6 max-md:grid-cols-1 max-md:px-2">
        <div className="flex flex-col gap-3 p-2">
          <h2 className="text-6xl text-neutral-200 pb-2 max-sm:text-2xl max-md:text-4xl">
            Embracing Basketball Culture
          </h2>
          <h3 className="text-3xl max-md:text-2xl max-sm:text-xl">
            Hoop Dreams Come True
          </h3>
          <p className="text-lg  max-md:text-base max-sm:text-sm">
            Immerse yourself in the passion and excitement of basketball as you
            step onto our courts and let your hoop dreams come to life.
          </p>
          <h3 className="text-3xl max-md:text-2xl max-sm:text-xl">
            From Streetball to Skyline
          </h3>
          <p className="text-lg  max-md:text-base max-sm:text-sm">
            Experience the rich culture of basketball, from streetball courts to
            city skyline backdrops, showcasing the diverse ways this sport
            brings people together.
          </p>
          <h3 className="text-3xl max-md:text-2xl max-sm:text-xl">
            Where Legends Are Made
          </h3>
          <p className="text-lg  max-md:text-base max-sm:text-sm">
            Discover the magic of the game where legends are made, whether
            you&apos;re a seasoned player or a novice looking to shoot some
            hoops and enjoy the thrill of the sport.
          </p>
        </div>
        <Image
          src={about2}
          placeholder="blur"
          alt="court"
          className="rounded-lg max-md:row-start-1"
        />
      </div>
      {/* //////////////////////////////////////////////////// */}
      <div className="gap-6 p-6 grid max-md:p-0">
        <p className="text-2xl text-center max-md:text-lg max-sm:text-base">
          Join us in celebrating the love of basketball and the joy of playing
          the game in extraordinary locations that will leave you inspired and
          exhilarated. Choose us for an unforgettable basketball experience
          unlike any other!
        </p>
        <Image
          src={about3}
          placeholder="blur"
          alt="court"
          className="rounded-lg max-md:row-start-1"
        />
      </div>
    </div>
  );
}

export default Page;
