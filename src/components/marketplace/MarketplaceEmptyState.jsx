import React from 'react';
import { Search, RotateCcw } from 'lucide-react';

export const MarketplaceEmptyState = ({ searchQuery, onReset }) => {
  return (
    <div className="flex flex-col items-center rounded-[20px] border border-zinc-200 bg-white px-6 py-10 text-center shadow-[0_2px_6px_rgba(20,14,50,0.04)]">
      <div className="mb-3.5 flex h-14 w-14 items-center justify-center rounded-full bg-fi-100 text-fi-600">
        <Search className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-bold tracking-[-0.015em] text-gray-900">
        No products found
      </h3>
      <p className="mt-1.5 max-w-[28ch] text-[13.5px] leading-[1.45] text-gray-500">
        {searchQuery ? (
          <>No products matching <span className="font-semibold text-gray-700">"{searchQuery}"</span>. Try a different keyword.</>
        ) : (
          'There are no products in this category at the moment.'
        )}
      </p>
      {onReset && (
        <button
          type="button"
          onClick={onReset}
          className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-fi-100 border border-fi-200 px-4 py-2 text-[13px] font-semibold text-fi-700 transition-colors hover:bg-fi-200"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          Reset Filters
        </button>
      )}
    </div>
  );
};
