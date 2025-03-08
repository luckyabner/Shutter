import Image from "next/image";
import Link from "next/link";

export default async function Photos({ photos }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="columns-1 sm:columns-2 md:columns-3">
        {photos.map((image, index) => (
          <div key={index} className="group relative mb-4">
            <Link href={`/photo/${encodeURIComponent(image.url)}`}>
              <div className="relative">
                <Image
                  src={image.url}
                  alt={image.name}
                  width={400}
                  height={300}
                  priority={true}
                  className="h-auto w-full rounded-lg object-cover transition-all duration-300 hover:scale-105"
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
