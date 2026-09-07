import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

export const ShopBanner = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="-mx-4 -mt-4 overflow-hidden rounded-b-3xl md:-mx-6 md:-mt-6 relative shadow-sm">
      {!imageError ? (
        <img
          alt="Shop today, Pay later using Mutual funds"
          width="800"
          height="400"
          onError={() => setImageError(true)}
          className="w-full h-auto min-h-[160px] object-cover scale-105"
          src="https://cdn.1fi.in/banners/shop-page%201536x1024.webp"
        />
      ) : (
        /* Authentic Fallback in case remote CDN banner is blocked */
        <div className="w-full bg-gradient-to-br from-[#712CDC] via-[#8C4BF5] to-[#5B24B5] px-6 py-8 text-white">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white/95 backdrop-blur-sm border border-white/20">
            <Sparkles className="h-3.5 w-3.5 text-yellow-300" />
            NO-COST EMIs
          </div>
          <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-white leading-tight">
            Shop today,<br />Pay later using Mutual funds.
          </h1>
          <p className="mt-2 text-xs text-purple-100 max-w-[34ch] leading-relaxed">
            No credit score required. No interest. Backed by your investments.
          </p>
        </div>
      )}
    </section>
  );
};
