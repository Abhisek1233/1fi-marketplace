import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReceiptIndianRupee, Calendar, CheckCircle, ArrowRight, Store } from 'lucide-react';
import { formatCurrency } from '../utils/formatters';

export const EmiDuesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4 pb-24 pt-2">
      <div>
        <h1 className="text-xl font-bold text-gray-900">EMI Dues</h1>
        <p className="text-xs text-gray-500">Track and manage your active mutual fund backed EMI plans.</p>
      </div>

      {/* Overview Status Card */}
      <div className="rounded-2xl border border-gray-200/80 bg-white p-4 shadow-sm flex flex-col gap-3">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-gray-500">Total Outstanding EMI</span>
          <span className="rounded-full bg-emerald-50 text-emerald-700 px-2 py-0.5 text-[11px] font-bold">
            All Dues Clear
          </span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-black text-gray-900">{formatCurrency(0)}</span>
          <span className="text-xs text-gray-400">due this month</span>
        </div>
      </div>

      {/* Empty State / CTA */}
      <div className="flex flex-col items-center rounded-2xl border border-zinc-200 bg-white p-8 text-center shadow-sm">
        <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-fi-100 text-fi-600">
          <ReceiptIndianRupee className="h-7 w-7" />
        </div>
        <h3 className="text-base font-bold text-gray-900">No active EMI dues</h3>
        <p className="mt-1 text-xs text-gray-500 max-w-[28ch]">
          You don't have any active EMI plans. Browse the Marketplace to buy your favorite products on 0% interest EMIs.
        </p>
        <button
          type="button"
          onClick={() => navigate('/shop?tab=marketplace')}
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-fi-600 px-4 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:bg-fi-700"
        >
          <Store className="h-4 w-4" />
          <span>Shop on 1Fi Marketplace</span>
        </button>
      </div>
    </div>
  );
};
