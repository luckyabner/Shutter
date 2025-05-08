import React from "react";

// 单个骨架屏组件
function PhotoSkeleton({
  width = "w-[350px]",
  height = "h-[300px]",
  showCaption = false,
}) {
  return (
    <div className="mb-4 flex flex-col items-center justify-center gap-2">
      {/* 图片占位 */}
      <div
        className={`${width} ${height} animate-pulse rounded-md bg-gray-200`}
      />

      {/* 标题和描述占位 */}
      {showCaption && (
        <div className="mt-2 flex flex-col gap-2">
          <div className="h-5 w-3/4 animate-pulse rounded bg-gray-200"></div>
          <div className="h-4 w-11/12 animate-pulse rounded bg-gray-200"></div>
        </div>
      )}
    </div>
  );
}

export default function PhotoSkeletons({ numbers = 6 }) {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3">
      {Array.from({ length: numbers }).map((_, index) => (
        <PhotoSkeleton key={index} />
      ))}
    </div>
  );
}

export { PhotoSkeleton };
