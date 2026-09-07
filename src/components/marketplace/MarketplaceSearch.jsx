import React from 'react';
import { Search, X } from 'lucide-react';

export const MarketplaceSearch = ({ value, onChange, onClear, placeholder = 'Search products, brands, categories...' }) => {
  return (
    <div className="relative flex items-center h-[46px] rounded-full border border-gray-200 bg-white px-4 shadow-[0_1px_3px_rgba(20,14,50,0.03)] transition-all focus-within:border-fi-600 focus-within:ring-2 focus-within:ring-fi-100">
      <Search className="h-[17px] w-[17px] text-gray-400 shrink-0" aria-hidden="true" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
        className="flex-1 bg-transparent border-0 outline-none px-2.5 text-[13.5px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-0"
      />
      {value && (
        <button
          type="button"
          onClick={onClear}
          aria-label="Clear search query"
          className="p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};
