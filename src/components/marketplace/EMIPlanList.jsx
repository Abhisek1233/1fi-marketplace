import React from 'react';
import { EMIPlanCard } from './EMIPlanCard';
import { ShieldCheck, Info } from 'lucide-react';

export const EMIPlanList = ({ plans = [], selectedPlanId, onSelectPlan }) => {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-gray-200/80 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">
            Select EMI Tenure
          </h4>
          <span className="rounded bg-emerald-50 text-emerald-700 font-bold text-[10px] px-1.5 py-0.5">
            0% Interest
          </span>
        </div>
        <span className="text-[11px] text-gray-400 font-medium">
          Mutual Fund Backed
        </span>
      </div>

      {/* Grid of EMI Cards */}
      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2" role="radiogroup" aria-label="EMI Plans">
        {plans.map((plan) => (
          <EMIPlanCard
            key={plan.id}
            plan={plan}
            isSelected={selectedPlanId === plan.id}
            onSelect={onSelectPlan}
          />
        ))}
      </div>

      {/* Mutual Fund Security Note */}
      <div className="mt-1 flex items-center gap-2 rounded-xl bg-gray-50 p-2.5 text-[11.5px] text-gray-600 border border-gray-100">
        <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
        <span>No credit score required. EMIs are comfortably linked to your portfolio limit.</span>
      </div>
    </div>
  );
};
