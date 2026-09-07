import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';

export const ProductGallery = ({ images = [], productName = '', brand = '' }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [imageError, setImageError] = useState({});

  const mainImage = images[activeImageIndex] || images[0] || '';

  const handleImageError = (index) => {
    setImageError((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Main Image */}
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-white border border-gray-200/80 p-4 flex items-center justify-center shadow-sm">
        {!imageError[activeImageIndex] ? (
          <img
            src={mainImage}
            alt={`${productName} view ${activeImageIndex + 1}`}
            onError={() => handleImageError(activeImageIndex)}
            className="h-full w-full object-contain transition-all duration-300"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-gray-400 p-8 text-center">
            <ImageOff className="h-12 w-12 mb-2 opacity-50" />
            <span className="text-xs font-semibold text-gray-500">{brand}</span>
            <span className="text-[11px] text-gray-400">Image unavailable</span>
          </div>
        )}
      </div>

      {/* Thumbnails if multiple */}
      {images.length > 1 && (
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          {images.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveImageIndex(idx)}
              className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-white border-2 p-1 transition-all ${
                activeImageIndex === idx
                  ? 'border-fi-600 ring-2 ring-fi-100 shadow-sm'
                  : 'border-gray-200/80 opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={img}
                alt={`${productName} thumbnail ${idx + 1}`}
                onError={() => handleImageError(idx)}
                className="h-full w-full object-contain"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
