import React from 'react';

export const CategoryTabs = ({ categories = [], selectedCategory = 'All', onSelectCategory }) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 -mx-1 px-1">
      {categories.map((category) => {
        const isSelected = selectedCategory.toLowerCase() === category.toLowerCase();
        return (
          <button
            key={category}
            type="button"
            onClick={() => onSelectCategory(category)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-[13px] font-semibold tracking-[-0.01em] transition-all duration-200 shrink-0 ${
              isSelected
                ? 'bg-fi-600 text-white shadow-[0_2px_8px_rgba(113,44,220,0.28)]'
                : 'bg-white text-gray-600 border border-gray-200/80 hover:border-fi-300 hover:text-fi-600 shadow-[0_1px_2px_rgba(20,14,50,0.03)]'
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
