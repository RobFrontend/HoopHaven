import Logo from "./Logo";
import Navigation from "./Navigation";
import HeadroomHeader from "./HeadroomHeader";
import MobileNavigation from "./MobileNavigation";
import Avatar from "./Avatar";

function Header() {
  return (
    <HeadroomHeader>
      <header className="flex justify-between items-center  px-12  h-24">
        <Logo />
        <Navigation />
        <MobileNavigation>
          <Avatar />
        </MobileNavigation>
      </header>
    </HeadroomHeader>
  );
}

export default Header;
