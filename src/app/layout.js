import {Geist, Geist_Mono, Young_Serif} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable:"--font-geist-sans",
    subsets:["latin"],
    display:"swap",
})

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    display: "swap",
})

const youngserif = Young_Serif({
    variable: "--font-young-serif",
    weight: "400",
    subsets: ["latin"],
    display: "swap",
})

export const metadata = {
  title: "Karol Bennardos Homepage",
  description: "My very own homepage yeah",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${youngserif.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
