import Image from "next/image";

export default async function Photos({ photos }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="columns-1 sm:columns-2 md:columns-3 ">
        {photos.map((image, index) => (
          <div
            key={index}
            className="relative break-inside-avoid mb-4 group"
          >
            <div className="relative overflow-hidden bg-gray-100">
              <div className="relative">
                <Image
                  src={image.url}
                  alt={image.name}
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover transition-all duration-300"
                />
                <div className="absolute bottom-0 w-full text-white text-whitep-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex justify-between w-full p-2">
                    <span>{image.name}</span>
                    <span >{image.time}</span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}