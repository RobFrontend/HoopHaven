import { Anek_Devanagari } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const latoSans = Anek_Devanagari({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: { template: "%s / Hoops Haven", default: "Welcome / Hoops Haven" },
  description: "Discover Unique Basketball Courts for Rent Worldwide",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${latoSans.className} antialiased min-h-screen flex flex-col relative bg-gradient-to-br from-neutral-800 to-neutral-950 text-neutral-50`}
      >
        <Header />
        <div className="flex-1 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
