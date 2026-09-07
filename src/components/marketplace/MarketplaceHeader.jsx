import React from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';

export const MarketplaceHeader = () => {
  return (
    <div className="flex flex-col gap-1.5 pt-1">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-[20px] font-bold tracking-[-0.02em] text-gray-900">
            1Fi Marketplace
          </h2>
          <span className="inline-flex items-center gap-1 rounded-full bg-fi-100 border border-fi-200 px-2.5 py-0.5 text-[11px] font-semibold text-fi-600">
            <Sparkles className="h-3 w-3 text-fi-600" />
            0% Interest
          </span>
        </div>
      </div>
      <div className="flex items-center gap-1.5 text-[13px] text-gray-500">
        <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
        <span>Shop now. Pay later with easy EMIs backed by mutual funds.</span>
      </div>
    </div>
  );
};
