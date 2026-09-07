import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, ShieldCheck, ArrowUpRight, Sparkles, Store, ShoppingBag } from 'lucide-react';
import { formatCurrency } from '../utils/formatters';

export const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4 pb-24 pt-2">
      {/* Portfolio Card */}
      <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#712CDC] via-[#8C4BF5] to-[#5B24B5] p-5 text-white shadow-xl shadow-fi-600/20">
        <div className="flex items-center justify-between text-xs font-semibold text-purple-200">
          <span>Mutual Fund Credit Limit</span>
          <span className="flex items-center gap-1 rounded-full bg-white/15 px-2 py-0.5 backdrop-blur-sm">
            <Sparkles className="h-3 w-3 text-yellow-300" /> Active
          </span>
        </div>

        <div className="mt-3">
          <span className="text-3xl font-black tracking-tight text-white">
            {formatCurrency(250000)}
          </span>
          <p className="mt-1 text-xs text-purple-100">
            Backed by ₹4,80,000 across 6 Equity Mutual Funds
          </p>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-2 pt-3 border-t border-white/15 text-xs">
          <div>
            <span className="text-purple-200">Used Limit</span>
            <p className="font-bold text-white mt-0.5">{formatCurrency(0)}</p>
          </div>
          <div>
            <span className="text-purple-200">Available to Shop</span>
            <p className="font-bold text-emerald-300 mt-0.5">{formatCurrency(250000)}</p>
          </div>
        </div>
      </div>

      {/* Quick Action - Explore Marketplace */}
      <div
        role="button"
        tabIndex={0}
        onClick={() => navigate('/shop?tab=marketplace')}
        className="flex items-center justify-between rounded-2xl border border-fi-200 bg-fi-50 p-4 transition-all hover:bg-fi-100 cursor-pointer shadow-sm"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-fi-600 text-white">
            <Store className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-900">Explore 1Fi Marketplace</h3>
            <p className="text-xs text-gray-500">Buy iPhones, Laptops & TVs on 0% EMIs</p>
          </div>
        </div>
        <ArrowUpRight className="h-5 w-5 text-fi-600" />
      </div>

      {/* Features Overview */}
      <div className="flex flex-col gap-3 rounded-2xl border border-gray-200/80 bg-white p-4 shadow-sm">
        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500">
          Why Shop on 1Fi?
        </h3>
        <div className="flex flex-col gap-3 text-xs text-gray-600">
          <div className="flex items-start gap-2.5">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-bold text-[11px]">
              ✓
            </div>
            <div>
              <strong className="text-gray-900">0% Interest & Zero Hidden Fees:</strong> Genuine no-cost EMIs with complete transparency.
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-bold text-[11px]">
              ✓
            </div>
            <div>
              <strong className="text-gray-900">Portfolio Keeps Growing:</strong> Your mutual funds stay invested and generate compounding returns.
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-bold text-[11px]">
              ✓
            </div>
            <div>
              <strong className="text-gray-900">No Hard Credit Checks:</strong> Approvals are instant, based directly on your mutual fund holdings.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
