import React, { Suspense } from "react";
import Categories from "@/components/categories";
import { fetchCategories } from "@/lib/data";


export default async function Home() {
  const categories = await fetchCategories({ category: '' });
  console.log(categories);
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Categories />
      </Suspense>
    </>
  );
}
