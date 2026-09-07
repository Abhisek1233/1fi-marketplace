import React from 'react';

export const TABS = [
  { id: 'brands', label: 'Top Brands' },
  { id: 'stores', label: 'Nearby Stores' },
  { id: 'marketplace', label: '1Fi Marketplace' },
];

export const SegmentedTabs = ({ activeTab, onTabChange }) => {
  return (
    <div
      role="tablist"
      aria-label="Shop categories"
      className="flex gap-1.5 sm:gap-2 rounded-full border border-[#ece5ff] bg-[#f5f0ff] p-1.5 shadow-[0_1px_3px_rgba(113,44,220,0.06)]"
    >
      {TABS.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onTabChange(tab.id)}
            className={`relative flex-1 rounded-full py-[10px] sm:py-[11px] px-2 text-center text-[12.5px] sm:text-sm font-semibold tracking-[-0.005em] transition-all truncate ${
              isActive
                ? 'bg-white text-fi-600 shadow-[0_1px_3px_rgba(20,14,50,0.10),0_0_0_1px_rgba(113,44,220,0.08)]'
                : 'text-gray-500 hover:text-gray-700 hover:bg-white/40'
            }`}
          >
            <span>{tab.label}</span>
            {isActive && (
              <span className="absolute bottom-1.5 left-1/2 h-[2.5px] w-[22px] -translate-x-1/2 rounded-full bg-fi-600" />
            )}
          </button>
        );
      })}
    </div>
  );
};
