import PhotoGallery from "@/components/photo-gallery";
import { fetchPhotos } from "@/lib/data";

export default async function Photos({ category }) {
  const decodedCategory = decodeURIComponent(category);
  const images = await fetchPhotos({ category: decodedCategory });
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        {category ? `${decodeURIComponent(category)} ` : 'Photos'}
      </h1>

      <PhotoGallery images={images} />
    </div>
  );
}