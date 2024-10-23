import Categories from "@/components/categories";
import React, { Suspense } from "react";


export default async function Home({ params }) {
  let { category } = await params;
  if (category.length > 1) {
    category = `${category[0]}/${category[1]}`;
  }
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Categories category={category} />
      </Suspense>
    </div>
  );
}
