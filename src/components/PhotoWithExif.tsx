"use client";
import EXIF from "exif-js";
import { Aperture, Clock4, Focus, Camera } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

// 类型定义
interface ExifData {
  model: string;
  iso: string | number;
  aperture: string;
  exposureTime: string;
  focalLength: string;
}

interface ExifRational {
  numerator: number;
  denominator: number;
}

interface PhotoWithExifProps {
  photoUrl: string;
}

// 常量定义
const INITIAL_EXIF_DATA: ExifData = {
  model: "未知",
  iso: "未知",
  aperture: "未知",
  exposureTime: "未知",
  focalLength: "未知",
};

const EXIF_TAGS = {
  MODEL: "Model",
  ISO: "ISOSpeedRatings",
  F_NUMBER: "FNumber",
  EXPOSURE_TIME: "ExposureTime",
  FOCAL_LENGTH: "FocalLength",
} as const;

// 工具函数
const formatAperture = (aperture: ExifRational | undefined): string =>
  aperture
    ? `f/${(aperture.numerator / aperture.denominator).toFixed(1)}`
    : "未知";

const formatExposureTime = (exposureTime: ExifRational | undefined): string => {
  if (!exposureTime) return "未知";
  const value = exposureTime.numerator / exposureTime.denominator;
  return value >= 1 ? `${value}s` : `1/${Math.round(1 / value)}s`;
};

const formatFocalLength = (focalLength: ExifRational | undefined): string =>
  focalLength
    ? `${Math.round(focalLength.numerator / focalLength.denominator)}mm`
    : "未知";

const truncateText = (text: string, maxLength: number): string => {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

// 主组件
export default function PhotoWithExif({ photoUrl }: PhotoWithExifProps) {
  const [exifData, setExifData] = useState<ExifData>(INITIAL_EXIF_DATA);
  const [error, setError] = useState<string | null>(null);
  const imageSrcRef = useRef<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const extractExifData = (file: File) => {
      return new Promise<ExifData>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = function (e) {
          const img = document.createElement('img');
          img.onload = function () {
            // @ts-ignore - EXIF.js 的类型定义不完整
            EXIF.getData(img, function (this: any) {
              try {
                const getExifTag = (tag: string) => {
                  const value = EXIF.getTag(this, tag);
                  return value !== undefined ? value : "未知";
                };

                const data: ExifData = {
                  model: getExifTag(EXIF_TAGS.MODEL),
                  iso: getExifTag(EXIF_TAGS.ISO),
                  aperture: formatAperture(EXIF.getTag(this, EXIF_TAGS.F_NUMBER)),
                  exposureTime: formatExposureTime(
                    EXIF.getTag(this, EXIF_TAGS.EXPOSURE_TIME)
                  ),
                  focalLength: formatFocalLength(
                    EXIF.getTag(this, EXIF_TAGS.FOCAL_LENGTH)
                  ),
                };
                resolve(data);
              } catch (err) {
                reject(err);
              }
            });
          };
          img.onerror = () => reject(new Error("图片加载失败"));
          img.src = e.target?.result as string;
        };
        reader.onerror = () => reject(new Error("读取文件失败"));
        reader.readAsDataURL(file);
      });
    };

    const loadImage = async () => {
      try {
        setError(null);

        const response = await fetch(photoUrl);
        if (!response.ok) throw new Error("图片加载失败");

        const blob = await response.blob();
        const file = new File([blob], "image.jpg", { type: blob.type });

        // 创建 blob URL 用于显示
        const objectUrl = URL.createObjectURL(blob);
        if (imageSrcRef.current) {
          URL.revokeObjectURL(imageSrcRef.current);
        }
        imageSrcRef.current = objectUrl;



        // 然后提取 EXIF 数据
        const exifData = await extractExifData(file);

        if (isMounted) {
          setExifData(exifData);
        }
      } catch (err) {
        console.error("处理图片时出错:", err);
        if (isMounted) {
          setError(err instanceof Error ? err.message : "处理图片时出错");
        }
      }
    };

    loadImage();

    return () => {
      isMounted = false;
      if (imageSrcRef.current) {
        URL.revokeObjectURL(imageSrcRef.current);
      }
    };
  }, [photoUrl]);


  if (error) {
    return (
      <div className="text-center text-red-500">
        <p>加载图片时出错: {error}</p>
      </div>
    );
  }

  const displayModel = truncateText(exifData.model, 15);

  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={photoUrl}
          alt="photo"
          width={800}
          height={600}
          className="mx-auto h-auto w-auto object-contain transition-all duration-300"
          style={{ maxHeight: "calc(100vh - 100px)" }}
        />
      </div>
      <div className="mt-2 rounded-lg bg-gray-100/90 p-3 text-sm shadow-md backdrop-blur-sm dark:bg-gray-700">
        <div className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
          <span className="flex items-center gap-2" title={exifData.model}>
            <Camera size={18} />
            {displayModel}
          </span>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 sm:flex sm:flex-row sm:gap-4 md:gap-6">
            <span className="flex items-center whitespace-nowrap">
              ISO {exifData.iso}
            </span>
            <span className="flex items-center gap-2 whitespace-nowrap">
              <Aperture size={16} />
              {exifData.aperture}
            </span>
            <span className="flex items-center gap-2 whitespace-nowrap">
              <Clock4 size={16} />
              {exifData.exposureTime}
            </span>
            <span className="flex items-center gap-2 whitespace-nowrap">
              <Focus size={16} />
              {exifData.focalLength}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
