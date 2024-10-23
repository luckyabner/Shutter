import PhotoGallery from "@/components/photo-gallery";

const fetchImages = async (category) => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `/api/photos?category=${category}`,
    { next: { revalidate: 3600 } } // 缓存1小时
  );

  if (!response.ok) {
    throw new Error('Failed to fetch images');
  }
  return response.json();
};

export default async function Photos({ category = '' }) {
  const images = await fetchImages(category);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        {category ? `${decodeURIComponent(category)} ` : 'Photos'}
      </h1>

      <PhotoGallery images={images} />
    </div>
  );
}