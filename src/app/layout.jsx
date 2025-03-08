import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CategoriesBar from "@/components/categoriesBar";
import { Suspense } from "react";
import { fetchCategories } from "@/lib/data";


export const metadata = {
  title: "Album App",
  description: "A beautiful album application built with Next.js and Tailwind CSS",
};

async function CategoriesContainer() {
  const categories = await fetchCategories({ category: '' });
  return (
    <CategoriesBar categories={categories} />
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-mono bg-gray-50 dark:bg-gray-900 dark:text-white max-w-7xl mx-auto  min-h-screen`}>
        {/* <Header /> */}
        <Suspense fallback={<div>Loading...</div>}>
          <CategoriesContainer />
        </Suspense>
        <main className="flex-1 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
