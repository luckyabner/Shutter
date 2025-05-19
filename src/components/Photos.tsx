"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

interface initialPhotosProps {
  initialPhotos: {
    url: string;
    name: string;
  }[];
}

export default function Photos({ initialPhotos }: initialPhotosProps) {
  const [photos, setPhotos] = useState(initialPhotos || []);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);
  const ITEMS_PER_PAGE = 9;

  const visiblePhotos = photos.slice(0, page * ITEMS_PER_PAGE);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasMore && !loading) {
          loadMorePhotos();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [loading, hasMore, page]);

  const loadMorePhotos = () => {
    setLoading(true);
    // 模拟加载延迟
    setTimeout(() => {
      // 检查是否还有更多照片可加载
      if (page * ITEMS_PER_PAGE >= photos.length) {
        setHasMore(false);
      } else {
        setPage((prevPage) => prevPage + 1);
      }
      setLoading(false);
    }, 500);
  };

  if (!photos.length) {
    return (
      <div className="mt-12 text-center text-2xl">没有找到符合条件的照片。</div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="columns-1 sm:columns-2 md:columns-3">
        {visiblePhotos.map((image, index) => (
          <div key={index} className="group relative mb-4">
            <Link href={`/photo/${encodeURIComponent(image.url)}`}>
              <div className="relative">
                <Image
                  src={image.url}
                  alt={image.name}
                  width={400}
                  height={300}
                  loading={"lazy"}
                  placeholder="blur"
                  blurDataURL={"/loading.png"}
                  className="h-auto w-full rounded-lg object-cover transition-all duration-300 hover:scale-105"
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
      {/* 加载状态指示器和底部提示 */}
      <div className="mt-8 flex justify-center">
        {loading ? (
          <div className="w-full max-w-md">
            <div className="flex items-center justify-center space-x-2">
              <div className="h-2.5 w-2.5 animate-bounce rounded-full bg-gradient-to-r from-blue-500 to-teal-400 [animation-delay:-0.3s]"></div>
              <div className="h-2.5 w-2.5 animate-bounce rounded-full bg-gradient-to-r from-blue-500 to-teal-400 [animation-delay:-0.15s]"></div>
              <div className="h-2.5 w-2.5 animate-bounce rounded-full bg-gradient-to-r from-blue-500 to-teal-400"></div>
            </div>
            <p className="mt-2 text-center text-sm text-gray-500">
              正在加载更多照片...
            </p>
          </div>
        ) : hasMore ? (
          <div ref={loaderRef} className="h-10"></div> // 不可见的观察元素
        ) : (
          <div className="w-full pb-8 pt-4 text-center">
            <div className="mx-auto mb-6 h-px w-16 bg-gray-300"></div>
            <p className="text-sm text-gray-500">没有更多照片了</p>
          </div>
        )}
      </div>
    </div>
  );
}
