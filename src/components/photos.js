import Image from "next/image";

export default async function Photos({ photos }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
        {photos.map((image, index) => (
          <div
            key={index}
            className="relative break-inside-avoid mb-4 cursor-pointer group"
          >
            <div className="relative overflow-hidden bg-gray-100">
              <div className="relative">
                <Image
                  src={image.url}
                  alt={image.name}
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover transition-all duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}