import Image from 'next/image';
import React from 'react'

export default async function PhotoDetail({ params }) {
  const { photoId } = await params;
  const photoUrl = decodeURIComponent(photoId);

  return (
    <div className='h-screen flex justify-center items-center'>
      <Image
        src={photoUrl}
        alt={photoUrl}
        width={2400}
        height={1800}
        className="max-h-screen w-auto h-auto object-cover transition-all duration-300"
      />
    </div>
  )
}
