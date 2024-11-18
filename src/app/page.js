import Photos from '@/components/photos';
import { fetchPhotos } from '@/lib/data';
import React from 'react';

// 每小时更新一次
export const revalidate = 3600;

export default async function HomePage() {
  const photos = await fetchPhotos({ category: '' });
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Photo Gallery</h1>
      <Photos photos={photos} />
    </div>
  );
}