'use client';

import { X } from "lucide-react";
import Image from "next/image";

export default function ImageViewer({ image, onClose }) {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 p-2 text-white hover:text-gray-300 transition-colors"
        onClick={onClose}
      >
        <X className="w-6 h-6" />
      </button>

      <Image
        src={image.url}
        alt={image.name}
        fill
        quality={100}
        priority={true}
        sizes="90vw"
        className="object-contain"
      />
    </div>
  );
}