import "~/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";

import Header from "~/app/_components/Header/Header";
import Banner from "~/app/_components/Banner/Banner";
import type { Offer } from "~/app/_components/Banner/Banner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const offers: Offer[] = [
  { text: "Get 10% off on bussiness sign up" },
  { text: "Get 20% off your first purchase" },
  { text: "Free shipping on orders over $50" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <div>
          <Header />
        </div>
        <div>
          <Banner offers={offers} />
        </div>
        <div className="container mx-auto px-4 py-8">
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </div>
      </body>
    </html>
  );
}