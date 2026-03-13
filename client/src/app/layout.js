import { Poppins, Preahvihear } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const preahvihear = Preahvihear({
  variable: "--font-preahvihear",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Mayank Sharma | Portfolio",
  description: "CSE (AI & ML) student portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${preahvihear.variable}`}>
        {children}
      </body>
    </html>
  );
}
