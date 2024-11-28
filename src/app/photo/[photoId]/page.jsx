import Image from 'next/image';
import React from 'react'

export default async function PhotoDetail({ params }) {
  const { photoId } = await params;
  const photoUrl = decodeURIComponent(photoId);

  return (
    <div>
      <Image
        src={photoUrl}
        alt={photoUrl}
        width={400}
        height={300}
        className="w-full h-auto object-cover transition-all duration-300"
      />
    </div>
  )
}
