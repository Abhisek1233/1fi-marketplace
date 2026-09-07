import React from 'react';

export const ProductCardSkeleton = () => {
  return (
    <div className="flex flex-col justify-between rounded-[20px] border border-gray-200/80 bg-white p-3.5 shadow-sm animate-pulse">
      {/* Image Skeleton */}
      <div className="aspect-square w-full rounded-xl bg-gray-200/70" />

      {/* Content Skeleton */}
      <div className="mt-3 flex flex-1 flex-col justify-between">
        <div>
          {/* Brand */}
          <div className="h-3 w-14 rounded bg-gray-200" />
          {/* Title */}
          <div className="mt-2 h-4 w-full rounded bg-gray-200" />
          <div className="mt-1 h-4 w-3/4 rounded bg-gray-200" />
        </div>

        <div className="mt-3 pt-2 border-t border-gray-100 flex flex-col gap-2">
          {/* Price */}
          <div className="h-5 w-24 rounded bg-gray-200" />
          {/* EMI Pill */}
          <div className="h-9 w-full rounded-lg bg-gray-100" />
        </div>
      </div>
    </div>
  );
};
