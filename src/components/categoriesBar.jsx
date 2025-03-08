"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import ToolsBar from "./toolsBar";
import SiteLogo from "./siteLogo";
import { House } from "lucide-react";

export default function CategoriesBar({ categories }) {
  const pathname = decodeURIComponent(usePathname());
  const [selectedCategory, setSeletedCategory] = useState("精选");

  useEffect(() => {
    const currentCategory = categories.find(
      (cat) => pathname === `/category/${cat.Prefix}`,
    );
    if (currentCategory) {
      setSeletedCategory(currentCategory.Prefix);
    } else {
      setSeletedCategory("home");
    }
  }, [pathname, categories]);

  return (
    <div className="sticky top-4 z-30 mx-auto flex w-full items-center px-4 py-2">
      <div className="hidden h-10 items-center rounded-full p-4 backdrop-blur-sm md:flex">
        <SiteLogo />
      </div>
      <div className="mx-auto flex h-10 w-fit items-center space-x-4 overflow-x-auto overflow-y-hidden whitespace-nowrap rounded-full bg-gray-100/90 p-4 text-lg shadow-md backdrop-blur-sm dark:bg-gray-700">
        <Link
          className={`cursor-pointer rounded-full p-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-900 ${
            selectedCategory === "home" && "text-sky-700"
          }`}
          href={"/"}
          onClick={() => setSeletedCategory("home")}
        >
          <House />
        </Link>
        {categories.map((category, index) => (
          <Link
            key={index}
            href={`/category/${category.Prefix}`}
            className={`cursor-pointer rounded-full p-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-900 ${
              selectedCategory === category.Prefix && "text-sky-700"
            }`}
            onClick={() => setSeletedCategory(category.Prefix)}
          >
            {category.Prefix}
          </Link>
        ))}
      </div>
      {/* tool bar */}
      <div className="hidden h-10 items-center space-x-4 rounded-full bg-gray-100/90 p-4 shadow-md backdrop-blur-sm md:flex dark:bg-gray-700">
        <ToolsBar />
      </div>
    </div>
  );
}
