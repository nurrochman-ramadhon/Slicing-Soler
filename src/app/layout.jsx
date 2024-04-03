import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";

const roboto = Roboto({ subsets: ["latin"], weight:["300","400","500","700"] });

export const metadata = {
  title: "Soller",
  description: "New Energy From The Sun",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" text-text3">
      <body className={roboto.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
