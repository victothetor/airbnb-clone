import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb Clone",
  description: "My Airbnb clone on Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={inter.className}>
            <NavBar></NavBar>
            {children}
            <Footer></Footer>
        </body>
    </html>
  );
}
