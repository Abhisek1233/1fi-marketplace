import React from 'react';
import { User, Shield, HelpCircle, FileText, ChevronRight } from 'lucide-react';

export const ProfilePage = () => {
  return (
    <div className="flex flex-col gap-4 pb-24 pt-2">
      <div>
        <h1 className="text-xl font-bold text-gray-900">Profile</h1>
        <p className="text-xs text-gray-500">Account settings & investment details.</p>
      </div>

      <div className="flex items-center gap-3.5 rounded-2xl border border-gray-200/80 bg-white p-4 shadow-sm">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-fi-100 text-fi-700 font-bold text-lg">
          AK
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-bold text-gray-900">Abhishek Kumar</h3>
          <p className="text-xs text-gray-500">+91 98765 43210 • Verified Investor</p>
        </div>
      </div>

      <div className="flex flex-col rounded-2xl border border-gray-200/80 bg-white divide-y divide-gray-100 shadow-sm">
        <button type="button" className="flex items-center justify-between p-4 text-xs font-semibold text-gray-800 hover:bg-gray-50 text-left">
          <div className="flex items-center gap-2.5">
            <Shield className="h-4 w-4 text-fi-600" />
            <span>Mutual Fund Verification (KYC)</span>
          </div>
          <ChevronRight className="h-4 w-4 text-gray-400" />
        </button>

        <button type="button" className="flex items-center justify-between p-4 text-xs font-semibold text-gray-800 hover:bg-gray-50 text-left">
          <div className="flex items-center gap-2.5">
            <FileText className="h-4 w-4 text-fi-600" />
            <span>EMI Agreement & Terms</span>
          </div>
          <ChevronRight className="h-4 w-4 text-gray-400" />
        </button>

        <button type="button" className="flex items-center justify-between p-4 text-xs font-semibold text-gray-800 hover:bg-gray-50 text-left">
          <div className="flex items-center gap-2.5">
            <HelpCircle className="h-4 w-4 text-fi-600" />
            <span>Help & Support</span>
          </div>
          <ChevronRight className="h-4 w-4 text-gray-400" />
        </button>
      </div>
    </div>
  );
};
