import { Navigation } from "@/components/navigation/Navigation";
import "./globals.css";
import { Inter } from "next/font/google";
import { Footer } from "@/components/navigation/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Explorer",
  description:
    "A minimal and lovely travel blog which shares experiences and cities around the world!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="pt-10 min-h-[calc(100vh-300px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
