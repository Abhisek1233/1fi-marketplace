import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, ImageOff, ArrowRight } from 'lucide-react';
import { formatCurrency, formatMonthlyEMI } from '../../utils/formatters';
import { getStartingEMI } from '../../utils/emiCalculator';

export const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);

  const startingEMI = getStartingEMI(product.price);

  const handleClick = () => {
    navigate(`/shop/marketplace/product/${product.id}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className="group relative flex flex-col justify-between rounded-[20px] border border-gray-200/90 bg-white p-3.5 shadow-[0_2px_6px_rgba(20,14,50,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-fi-300 hover:shadow-[0_8px_20px_rgba(113,44,220,0.10)] focus:outline-none focus:ring-2 focus:ring-fi-500 focus:ring-offset-2 cursor-pointer"
    >
      {/* Top Image Container */}
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center">
        {!imageError ? (
          <img
            src={product.image}
            alt={product.name}
            onError={() => setImageError(true)}
            loading="lazy"
            className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-gray-400 p-4 text-center">
            <ImageOff className="h-8 w-8 mb-1 opacity-50" />
            <span className="text-[11px] font-medium">{product.brand}</span>
          </div>
        )}

        {/* Rating Badge */}
        {product.rating && (
          <div className="absolute top-2 left-2 flex items-center gap-1 rounded-full bg-white/90 backdrop-blur-sm px-2 py-0.5 shadow-sm border border-gray-100">
            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
            <span className="text-[11px] font-bold text-gray-800">{product.rating}</span>
          </div>
        )}

        {/* Category Pill */}
        <span className="absolute top-2 right-2 rounded-full bg-gray-900/70 backdrop-blur-sm px-2 py-0.5 text-[10px] font-medium text-white">
          {product.category}
        </span>
      </div>

      {/* Product Details */}
      <div className="mt-3 flex flex-1 flex-col justify-between">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wider text-fi-600">
            {product.brand}
          </p>
          <h3 className="mt-0.5 text-[14px] font-semibold text-gray-900 leading-snug line-clamp-2">
            {product.name}
          </h3>
        </div>

        {/* Price & EMI Section */}
        <div className="mt-2.5 pt-2 border-t border-gray-100 flex flex-col gap-1">
          <div className="flex items-baseline gap-1.5">
            <span className="text-[16px] font-bold text-gray-900">
              {formatCurrency(product.price)}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-[12px] text-gray-400 line-through">
                {formatCurrency(product.originalPrice)}
              </span>
            )}
          </div>

          {/* EMI Highlight Card */}
          <div className="mt-1 flex items-center justify-between rounded-lg bg-fi-100/70 border border-fi-200/60 px-2.5 py-1.5 transition-colors group-hover:bg-fi-100">
            <div className="flex flex-col">
              <span className="text-[9.5px] font-medium text-gray-500 uppercase tracking-tight">Starting EMI</span>
              <span className="text-[12.5px] font-bold text-fi-700">
                {formatMonthlyEMI(startingEMI)}
              </span>
            </div>
            <ArrowRight className="h-3.5 w-3.5 text-fi-600 transition-transform group-hover:translate-x-0.5" />
          </div>
        </div>
      </div>
    </div>
  );
};
