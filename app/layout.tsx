import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Gustave Kuetenang's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <div className="main">
            <div className="gradient" />
          </div>

          <main
            role="main"
            aria-label="Main Content"
            className="w-full min-h-screen app dark:text-slate-100"
          >
            <Nav />
            <div className="max-w-7xl mx-auto px-2 sm:px-4 py-4 flex-grow">
              {children}
            </div>
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
