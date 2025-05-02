"use client";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";
import { Github } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function ToolsBar() {
  const [theme, setTheme] = useState("light");

  // 在组件挂载时检查本地存储的主题或系统首选项
  useEffect(() => {
    // 检查本地存储是否有保存的主题
    const savedTheme = localStorage.getItem("theme");
    // 如果有保存的主题就使用，否则检查系统首选项
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  // 切换主题
  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <Link
        href={"https://github.com/cdt3211/album-next"}
        target="blank"
        className="rounded-full p-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-900"
      >
        <Github />
      </Link>
      <button
        className="rounded-full p-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-900"
        onClick={toggleTheme}
        aria-label={theme === "light" ? "切换至深色模式" : "切换至浅色模式"}
      >
        {theme === "light" ? <Moon /> : <Sun />}
      </button>
    </div>
  );
}
