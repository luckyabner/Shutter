import PhotoWithExif from "@/components/photoWithExif";
import React, { Suspense } from "react";

export default async function PhotoDetail({ params }) {
  const { photoId } = await params;
  const photoUrl = decodeURIComponent(photoId);
  return (
    <div className="flex h-full w-full items-center justify-center">
      <PhotoWithExif photoUrl={photoUrl} />
    </div>
  );
}
