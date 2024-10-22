"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // 获取图片列表
  const fetchImages = async () => {
    try {
      const response = await fetch('/api/list'); // 发起请求
      if (response.ok) {
        const data = await response.json(); // 解析响应数据
        setImages(data); // 更新状态
      } else {
        console.error('Failed to fetch images'); // 请求失败处理
      }
    } catch (error) {
      console.error('Error fetching images:', error); // 捕获并处理错误
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // 加载状态
  }
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
