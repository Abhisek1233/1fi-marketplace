import React from 'react';
import { Check } from 'lucide-react';
import { formatCurrency } from '../../utils/formatters';

export const ProductVariants = ({
  variants,
  selectedColor,
  selectedStorage,
  onSelectColor,
  onSelectStorage,
}) => {
  if (!variants) return null;

  const { colors = [], storage = [] } = variants;

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-gray-200/80 bg-white p-4 shadow-sm">
      {/* Color Selection */}
      {colors.length > 0 && (
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
              Color
            </span>
            {selectedColor && (
              <span className="text-xs font-semibold text-gray-900">
                {selectedColor.name}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2.5 flex-wrap">
            {colors.map((color) => {
              const isSelected = selectedColor?.name === color.name;
              return (
                <button
                  key={color.name}
                  type="button"
                  onClick={() => onSelectColor(color)}
                  title={color.name}
                  aria-label={`Select color ${color.name}`}
                  className={`group relative flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition-all ${
                    isSelected
                      ? 'border-fi-600 bg-fi-50 text-fi-900 ring-1 ring-fi-600'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <span
                    className="h-3.5 w-3.5 rounded-full border border-black/10 shadow-inner shrink-0"
                    style={{ backgroundColor: color.hex }}
                  />
                  <span>{color.name}</span>
                  {isSelected && <Check className="h-3 w-3 text-fi-600 ml-0.5" />}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Storage / Size Selection */}
      {storage.length > 0 && (
        <div className="flex flex-col gap-2 pt-2 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
              Configuration / Storage
            </span>
            {selectedStorage && (
              <span className="text-xs font-semibold text-gray-900">
                {selectedStorage.size}
              </span>
            )}
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {storage.map((item) => {
              const isSelected = selectedStorage?.size === item.size;
              return (
                <button
                  key={item.size}
                  type="button"
                  onClick={() => onSelectStorage(item)}
                  className={`flex flex-col items-start rounded-xl border p-2.5 text-left transition-all ${
                    isSelected
                      ? 'border-fi-600 bg-fi-100/60 ring-1 ring-fi-600 shadow-sm'
                      : 'border-gray-200 bg-white hover:border-fi-200'
                  }`}
                >
                  <span className={`text-[13px] font-bold ${isSelected ? 'text-fi-900' : 'text-gray-900'}`}>
                    {item.size}
                  </span>
                  {item.priceDelta !== 0 && (
                    <span className="text-[10.5px] font-medium text-gray-500 mt-0.5">
                      {item.priceDelta > 0 ? `+${formatCurrency(item.priceDelta)}` : formatCurrency(item.priceDelta)}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
