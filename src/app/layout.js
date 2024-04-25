import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html>
  
      <body className="flex flex-col min-h-screen" >
        <Navbar/>
        <main className="relative flex-grow">
        {children}
        </main>
        </body>
        <Footer/>
    </html>
  );
}
