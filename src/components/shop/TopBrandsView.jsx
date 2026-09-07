import React, { useState } from 'react';
import { Search, Plane, Apple, Gem, ShoppingBag, Sparkles } from 'lucide-react';
import { TOP_BRANDS } from '../../data/brands';

export const TopBrandsView = () => {
  const [search, setSearch] = useState('');

  const filteredBrands = TOP_BRANDS.filter((b) =>
    b.name.toLowerCase().includes(search.toLowerCase()) ||
    b.category.toLowerCase().includes(search.toLowerCase())
  );

  const renderBrandIcon = (brand) => {
    if (brand.id === 'air-india') {
      return (
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600 text-white font-black text-sm shadow-sm">
          <Plane className="h-7 w-7 rotate-45" />
        </div>
      );
    }
    if (brand.id === 'apple-reseller') {
      return (
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white shadow-sm">
          <Apple className="h-7 w-7" />
        </div>
      );
    }
    if (brand.id === 'caratlane') {
      return (
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-700 text-white shadow-sm">
          <Gem className="h-7 w-7" />
        </div>
      );
    }
    return (
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-fi-600 text-white font-bold text-sm shadow-sm">
        <ShoppingBag className="h-7 w-7" />
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Search Online Stores */}
      <div className="flex items-center gap-[10px] h-[46px] rounded-full border border-gray-200 bg-white px-4 shadow-[0_1px_3px_rgba(20,14,50,0.03)] focus-within:border-fi-600">
        <Search className="h-[17px] w-[17px] text-gray-400 shrink-0" aria-hidden="true" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search online stores..."
          aria-label="Search online stores"
          className="flex-1 bg-transparent border-0 outline-none text-[13.5px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-0 shadow-none"
        />
      </div>

      {/* Title */}
      <div className="flex items-center justify-between gap-3 pt-1">
        <p className="text-[20px] font-semibold leading-[1.2] tracking-[-0.018em] text-gray-900">
          Top Brands
        </p>
        <span className="text-xs text-gray-400 font-medium">Online Partner Stores</span>
      </div>

      {/* Brands List */}
      <div className="flex flex-col gap-3">
        {filteredBrands.length > 0 ? (
          filteredBrands.map((brand) => (
            <div
              key={brand.id}
              className="flex items-center gap-3.5 rounded-[20px] border border-zinc-200 bg-white p-3.5 shadow-[0_2px_6px_rgba(20,14,50,0.04)] transition-all hover:border-fi-300 hover:shadow-md cursor-pointer"
            >
              {renderBrandIcon(brand)}
              <div className="min-w-0 flex-1">
                <h3 className="text-[15px] font-bold text-gray-900 truncate">
                  {brand.name}
                </h3>
                <p className="text-[12.5px] text-gray-500 font-medium mt-0.5">
                  {brand.tagline}
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-fi-50 border border-fi-200 px-2.5 py-1 text-[11px] font-bold text-fi-700">
                Shop
              </span>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center rounded-[20px] border border-zinc-200 bg-white px-6 py-9 text-center shadow-[0_2px_6px_rgba(20,14,50,0.04)]">
            <div className="mb-3.5 flex h-14 w-14 items-center justify-center rounded-full bg-[#ede8ff] text-[#712CDC]">
              <Search className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-bold tracking-[-0.015em] text-gray-900">
              No matching stores found
            </h3>
            <p className="mt-1.5 max-w-[30ch] text-[13.5px] leading-[1.45] text-gray-500">
              Try a different store or brand name.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
