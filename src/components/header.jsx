import Link from "next/link";
import { Images } from "lucide-react";
import { fetchCategories } from "@/lib/data";
import CategoriesBar from "./categoriesBar";
import { Github } from "lucide-react";
import { Moon } from "lucide-react";
import SiteLogo from "./siteLogo";
import ToolsBar from "./toolsBar";

export default function Header() {
  return (
    <>
      <header className="mt-12 flex w-full items-center justify-center px-8 md:justify-between">
        <SiteLogo />
        {/* <CategoriesBar /> */}
        <ToolsBar />
      </header>

      {/* 分类栏 */}
      {/* <CategoriesBar /> */}
    </>
  );
}
