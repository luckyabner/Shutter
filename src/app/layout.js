import { Inter } from "next/font/google"
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] })
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "Album App",
  description: "A beautiful album application built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
