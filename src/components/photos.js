import Image from "next/image";

const fetchImages = async (category) => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/api/photos?category=${category}`); // 使用绝对URL
  if (!response.ok) {
    throw new Error('Failed to fetch images');
  }
  return response.json();
};

export default async function Photos({ category = '' }) {
  const images = await fetchImages(category);

  return (
    <div>
      <h1>我的相册</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <div key={image.name} style={{ margin: '10px' }}>
            <Image
              className="w-auto h-auto"
              src={image.url} // 使用COS图片URL
              alt={image.name}
              width={200}
              height={200}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
