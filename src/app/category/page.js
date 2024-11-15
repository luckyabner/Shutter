import React from "react";
import Categories from "@/components/categories";
import { fetchCategories } from "@/lib/data";


export default async function Home() {
  const categories = await fetchCategories({ category: '' });
  return (
    <>
      <h1 className="flex justify-center text-3xl font-bold">分类</h1>
      <Categories categories={categories} />
    </>
  );
}
