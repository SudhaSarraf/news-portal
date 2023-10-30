import type { Metadata } from "next";
import { Trispace } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import RandomNews from "./components/RandomNews";
import Footer from "./components/Footer";

const trispace = Trispace({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Global Insight News",
  description:
    "Your trusted source for timely and accurate news from around the world, delivered with integrity and objectivity",
  icons: {
    icon: [
      { url: "/img/favicon-32x32.jpg", sizes: "32x32" },
      { url: "/img/favicon-16x16.jpg", sizes: "16" },
    ],
    apple: {
      url: "/img/apple-touch-icon.jpg",
      sizes: "180x180",
    },
  },
  manifest: "/img/site.webmanifest",
  openGraph: {
    title: "Global Insight News",
    description:
      "Your trusted source for timely and accurate news from around the world, delivered with integrity and objectivity",
    type: "article",
    authors: "Sudha",
  },
  keywords: [
    "global insight news",
    "news",
    "current-affairs",
    "news about everything",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={trispace.className}>
        <main className="px-2 md:px-5">
          <div
            className="bg-blue-600 mb-10"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Header />
            <Navbar />
          </div>

          <section className="flex justify-between">
            {children}
            <RandomNews />
          </section>
          <Footer />
        </main>
      </body>
    </html>
  );
}
