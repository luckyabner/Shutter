import Photos from "@/components/photos";
import { fetchPhotos } from "@/lib/data";
import React, { Suspense } from "react";


export default async function Home({ params }) {
  const { catName } = await params;
  const cat = decodeURIComponent(catName);
  const photos = await fetchPhotos({ category: cat });
  return (
    <>
      <h1 className="">
        {cat}
      </h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Photos photos={photos} />
      </Suspense>
    </>
  );
}
