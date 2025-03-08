import CategoriesBar from '@/components/categoriesBar';
import Photos from '@/components/photos';
import { fetchCategories, fetchPhotos } from '@/lib/data';
import React, { Suspense } from 'react';

// 每小时更新一次
export const revalidate = 3600;

async function CategoriesContainer() {
  const categories = await fetchCategories({ category: '' });
  return (
    <CategoriesBar categories={categories} />
  );
}

export default async function HomePage() {
  const photos = await fetchPhotos({ category: '精选' });
  return (
    <div className="container mx-auto">
      {/* <Suspense fallback={<div>Loading...</div>}>
        <CategoriesContainer />
      </Suspense> */}
      <Photos photos={photos} />
    </div>
  );
}