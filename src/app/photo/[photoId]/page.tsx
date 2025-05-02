import PhotoWithExif from "@/components/PhotoWithExif";
import React from "react";

interface PhotoDetailProps {
  params: {
    photoId: string;
  };
}

export default async function PhotoDetail({ params }: PhotoDetailProps) {
  const { photoId } = await params;
  const photoUrl = decodeURIComponent(photoId);
  return (
    <div className="flex h-full w-full items-center justify-center">
      <PhotoWithExif photoUrl={photoUrl} />
    </div>
  );
}
