// import Categories from "@/components/categories";
import React, { Suspense } from "react";
const Categories = React.lazy(() => import("@/components/categories"));


export default function Home() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Categories />
      </Suspense>
    </div>
  );
}
