"use client";
import EXIF from "exif-js";
import { Aperture } from "lucide-react";
import { Clock4 } from "lucide-react";
import { Focus } from "lucide-react";
import { Camera } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { PhotoSkeleton } from "./photoSkeletons";

// 常量提取
const INITIAL_EXIF_DATA = {
  model: "未知",
  iso: "未知",
  aperture: "未知",
  exposureTime: "未知",
  focalLength: "未知",
};

// EXIF 标签常量
const EXIF_TAGS = {
  MODEL: "Model",
  ISO: "ISOSpeedRatings",
  F_NUMBER: "FNumber",
  EXPOSURE_TIME: "ExposureTime",
  FOCAL_LENGTH: "FocalLength",
};

// EXIF 数据格式化工具函数 - 移至组件外部避免重复创建
const formatAperture = (aperture) =>
  aperture
    ? `f/${(aperture.numerator / aperture.denominator).toFixed(1)}`
    : "未知";

const formatExposureTime = (exposureTime) => {
  if (!exposureTime) return "未知";
  const value = exposureTime.numerator / exposureTime.denominator;
  return value >= 1 ? `${value}s` : `1/${Math.round(1 / value)}s`;
};

const formatFocalLength = (focalLength) =>
  focalLength
    ? `${Math.round(focalLength.numerator / focalLength.denominator)}mm`
    : "未知";

// 截断长文本的工具函数
const truncateText = (text, maxLength) => {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

export default function PhotoWithExif({ photoUrl }) {
  const [exifData, setExifData] = useState(INITIAL_EXIF_DATA);
  const [imageSrc, setImageSrc] = useState(null);
  const imageSrcRef = useRef(); // 用于清理阶段获取最新值

  useEffect(() => {
    const getExifData = async () => {
      try {
        const response = await fetch(photoUrl); // 获取图片
        const blob = await response.blob(); // 将图片转换为 Blob 对象
        // 创建一个blob URL，这样可以同时用于显示图片和提取EXIF
        const objectUrl = URL.createObjectURL(blob);

        // 先释放之前的 blob URL
        if (imageSrcRef.current) {
          URL.revokeObjectURL(imageSrcRef.current);
        }

        imageSrcRef.current = objectUrl;
        setImageSrc(objectUrl);

        EXIF.getData(blob, function () {
          const getExifTag = (tag) => EXIF.getTag(this, tag) || "未知";

          setExifData({
            model: getExifTag(EXIF_TAGS.MODEL),
            iso: getExifTag(EXIF_TAGS.ISO),
            aperture: formatAperture(EXIF.getTag(this, EXIF_TAGS.F_NUMBER)),
            exposureTime: formatExposureTime(
              EXIF.getTag(this, EXIF_TAGS.EXPOSURE_TIME),
            ),
            focalLength: formatFocalLength(
              EXIF.getTag(this, EXIF_TAGS.FOCAL_LENGTH),
            ),
          });
        });
      } catch (error) {
        console.error("获取 EXIF 数据失败:", error);
        setImageSrc(photoUrl);
      }
    };

    getExifData();

    // 清理函数：释放blob URL以避免内存泄漏
    return () => {
      if (imageSrc && imageSrc.startsWith("blob:")) {
        URL.revokeObjectURL(imageSrc);
      }
    };
  }, [photoUrl]);

  if (!imageSrc) {
    return <PhotoSkeleton width="w-[800px]" height="h-[600px]" />;
  }

  // 用于显示的相机型号，限制长度避免溢出
  const displayModel = truncateText(exifData.model, 15);

  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={imageSrc}
          alt="photo"
          width={800}
          height={600}
          className="mx-auto h-auto w-auto object-contain transition-all duration-300"
          style={{ maxHeight: "calc(100vh - 100px)" }}
        />
      </div>
      {/* EXIF信息展示区 - 响应式布局 */}
      <div className="mt-2 rounded-lg bg-gray-100/90 p-3 text-sm shadow-md backdrop-blur-sm dark:bg-gray-700">
        {/* 移动端垂直布局，桌面端水平布局 */}
        <div className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
          {/* 相机型号 */}
          <span className="flex items-center gap-2" title={exifData.model}>
            <Camera size={18} />
            {displayModel}
          </span>

          {/* EXIF数据 - 在小屏幕上网格布局，大屏幕保持水平排列 */}
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
