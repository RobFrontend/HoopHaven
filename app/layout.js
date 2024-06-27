import { Anek_Devanagari } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Logo from "./components/Logo";

const latoSans = Anek_Devanagari({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Hoops Haven",
  description: "Discover Unique Basketball Courts for Rent Worldwide",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${latoSans.className} antialiased min-h-screen flex flex-col relative`}
      >
        <header className="flex justify-between items-center px-8 py-8">
          <Logo />
          <Navigation />
        </header>
        <div className="flex-1 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
