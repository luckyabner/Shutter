import Image from "next/image";
import Link from "next/link";

export default async function Photos({ photos }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="columns-1 sm:columns-2 md:columns-3 ">
        {photos.map((image, index) => (
          <div
            key={index}
            className="relative mb-4 group"
          >
            <Link href={`/photo/${encodeURIComponent(image.url)}`}>

              <div className="relative">
                <Image
                  src={image.url}
                  alt={image.name}
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover transition-all duration-300 hover:scale-105 rounded-lg"
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}