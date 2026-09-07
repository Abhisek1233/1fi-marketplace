import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

export const MarketplaceError = ({ message = 'Unable to load products. Please check your connection.', onRetry }) => {
  return (
    <div className="flex flex-col items-center rounded-[20px] border border-red-100 bg-red-50/40 px-6 py-9 text-center">
      <div className="mb-3.5 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
        <AlertCircle className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="text-base font-bold text-gray-900">
        Unable to load products
      </h3>
      <p className="mt-1.5 max-w-[32ch] text-[13px] text-gray-600">
        {message}
      </p>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white border border-gray-200 px-4 py-2 text-[13px] font-semibold text-gray-800 shadow-sm transition-all hover:bg-gray-50 hover:border-gray-300"
        >
          <RefreshCw className="h-3.5 w-3.5 text-gray-600" />
          Retry
        </button>
      )}
    </div>
  );
};
