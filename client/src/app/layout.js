import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Mayank Sharma | AI & ML Portfolio",
  description:
    "Portfolio of Mayank Sharma — CSE (AI & ML) student at UEM Kolkata. Building intelligent systems with Python, TensorFlow, Next.js, and more.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Mayank Sharma | AI & ML Portfolio",
    description:
      "CSE (AI & ML) student portfolio — ML models, full-stack apps, and more.",
    siteName: "Mayank Sharma Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mayank Sharma | AI & ML Portfolio",
    description: "CSE (AI & ML) student portfolio.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
