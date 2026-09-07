import React from 'react';
import { CheckCircle2, Circle, Sparkles } from 'lucide-react';
import { formatCurrency, formatMonthlyEMI } from '../../utils/formatters';

export const EMIPlanCard = ({ plan, isSelected, onSelect }) => {
  return (
    <div
      role="radio"
      aria-checked={isSelected}
      tabIndex={0}
      onClick={() => onSelect(plan.id)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(plan.id);
        }
      }}
      className={`group relative flex flex-col justify-between rounded-2xl border p-3.5 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-fi-500 ${
        isSelected
          ? 'border-fi-600 bg-fi-100/70 shadow-[0_2px_10px_rgba(113,44,220,0.12)] ring-1 ring-fi-600'
          : 'border-gray-200/90 bg-white hover:border-fi-300 hover:bg-gray-50/50'
      }`}
    >
      {/* Top row with Tenure, Tag & Radio */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[14px] font-bold text-gray-900">
            {plan.months} Months
          </span>
          {plan.tag && (
            <span className="inline-flex items-center gap-0.5 rounded-full bg-fi-200/80 px-2 py-0.5 text-[10px] font-bold text-fi-800">
              <Sparkles className="h-2.5 w-2.5 text-fi-700" />
              {plan.tag}
            </span>
          )}
        </div>

        {/* Radio Indicator */}
        <div className="shrink-0 text-fi-600">
          {isSelected ? (
            <CheckCircle2 className="h-5 w-5 fill-fi-600 text-white" />
          ) : (
            <Circle className="h-5 w-5 text-gray-300 group-hover:text-gray-400" />
          )}
        </div>
      </div>

      {/* Monthly EMI & Total breakdown */}
      <div className="mt-3 flex items-baseline justify-between pt-2 border-t border-gray-200/50">
        <div>
          <span className="text-[16px] font-extrabold text-fi-700">
            {formatMonthlyEMI(plan.monthlyAmount)}
          </span>
          <p className="text-[11px] text-gray-500 font-medium">
            Total {formatCurrency(plan.totalAmount)} • 0% Interest
          </p>
        </div>

        <span className={`text-[11px] font-semibold px-2 py-0.5 rounded ${isSelected ? 'text-fi-700 bg-fi-200/60' : 'text-emerald-700 bg-emerald-50'}`}>
          No Cost
        </span>
      </div>
    </div>
  );
};
