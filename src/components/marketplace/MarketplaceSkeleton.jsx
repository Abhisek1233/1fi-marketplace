import React from 'react';
import { ProductCardSkeleton } from './ProductCardSkeleton';

export const MarketplaceSkeleton = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Category Pills Skeleton */}
      <div className="flex gap-2 overflow-hidden py-1">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="h-8 w-20 shrink-0 rounded-full bg-gray-200 animate-pulse"
          />
        ))}
      </div>

      {/* Product Cards Skeleton Grid */}
      <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
        {[...Array(6)].map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
};
