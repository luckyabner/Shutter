import ToolsBar from "@/components/toolsBar";
import React, { Suspense } from "react";

// 每小时更新一次
export const revalidate = 3600;

export default function HomePage() {
  return (
    <div className="container mx-auto mt-8 max-w-3xl">
      <h1 className="text-5xl font-semibold">Welcome👋🏻</h1>
      <p className="mt-6 text-lg text-gray-700 dark:text-white">
        Through my lens, I capture moments of light and shadow. Welcome to my
        visual journey.
      </p>
      <div className="mt-4 flex items-center gap-2 text-lg text-gray-700 dark:text-white">
        Github:
        <ToolsBar />
      </div>
    </div>
  );
}
