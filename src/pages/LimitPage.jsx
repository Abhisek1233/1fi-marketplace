import React from 'react';
import { TrendingUp, PieChart, ShieldCheck, Check } from 'lucide-react';
import { formatCurrency } from '../utils/formatters';

export const LimitPage = () => {
  return (
    <div className="flex flex-col gap-4 pb-24 pt-2">
      <div>
        <h1 className="text-xl font-bold text-gray-900">Mutual Fund Limit</h1>
        <p className="text-xs text-gray-500">Your available shopping credit backed by mutual fund investments.</p>
      </div>

      <div className="rounded-2xl border border-gray-200/80 bg-white p-5 shadow-sm flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Approved Limit</span>
          <span className="rounded-full bg-emerald-50 text-emerald-700 font-bold text-[11px] px-2 py-0.5">
            Active
          </span>
        </div>
        <div>
          <span className="text-3xl font-black text-fi-700">{formatCurrency(250000)}</span>
          <p className="text-xs text-gray-500 mt-0.5">Max lien value: {formatCurrency(480000)}</p>
        </div>

        <div className="flex flex-col gap-2 pt-3 border-t border-gray-100 text-xs">
          <div className="flex justify-between">
            <span className="text-gray-500">Pledged Funds</span>
            <span className="font-semibold text-gray-800">6 Mutual Funds (CAMS / KFintech)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Interest Rate</span>
            <span className="font-semibold text-emerald-600">0% (Zero Interest)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
