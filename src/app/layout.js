import { Inter } from "next/font/google"
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { OpenPanelComponent } from "@openpanel/nextjs";

const inter = Inter({ subsets: ["latin"] })

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
        <OpenPanelComponent
          clientId="b188394c-cf7f-446f-b9e9-b5d3325e1b90"
          trackScreenViews={true}
          trackAttributes={true}
          trackOutgoingLinks={true}
        />
        <Footer />
      </body>
    </html>
  );
}
