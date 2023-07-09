import { Header } from "@/components/start/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { Footer } from "@/components/start/Footer";
import NavMenu from "@/components/NavMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}>
        <Header />
        <main>{children}</main>
        <div className="w-screen flex items-center justify-center">
          <NavMenu />
        </div>
        <Footer />
      </body>
    </html>
  );
}
