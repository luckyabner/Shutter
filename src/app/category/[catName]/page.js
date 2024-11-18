import Photos from "@/components/photos";
import { fetchPhotos } from "@/lib/data";
import React from "react";

// 每小时更新一次
export const revalidate = 3600;

export default async function Home({ params }) {
  const { catName } = await params;
  const cat = decodeURIComponent(catName);
  const photos = await fetchPhotos({ category: cat });
  return (
    <>
      <h1 className="flex justify-center text-3xl font-bold">
        {cat}
      </h1>
      <Photos photos={photos} />
    </>
  );
}
