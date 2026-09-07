import React, { useState } from 'react';
import { Navigation, Search, X } from 'lucide-react';

export const LocationModal = ({ isOpen, onClose, selectedLocation, onSelectLocation }) => {
  const [pincode, setPincode] = useState('');

  if (!isOpen) return null;

  const handlePincodeSearch = (e) => {
    e.preventDefault();
    if (pincode.trim()) {
      onSelectLocation(`Pincode ${pincode.trim()}`);
      onClose();
    }
  };

  const handleUseCurrent = () => {
    onSelectLocation('Gurugram');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-[500px] rounded-t-[28px] sm:rounded-[28px] bg-white p-6 shadow-2xl">
        <div className="mx-auto h-1.5 w-12 rounded-full bg-gray-300 mb-4 sm:hidden" />

        <div className="flex items-center justify-between pb-3">
          <h3 className="text-lg font-bold text-gray-900">
            Select Your Location
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close location modal"
            className="p-1 rounded-full text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Option 1: Use Current Location */}
        <button
          type="button"
          onClick={handleUseCurrent}
          className="mt-2 w-full flex items-center gap-3.5 rounded-2xl border-2 border-fi-600 bg-fi-50/40 p-4 text-left transition-all hover:bg-fi-50"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-fi-100 text-fi-600">
            <Navigation className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-gray-900">Use Current Location</h4>
            <p className="text-xs text-gray-500">Grant location access to sort stores</p>
          </div>
        </button>

        {/* Divider */}
        <div className="relative my-5 text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>
          <span className="relative bg-white px-3 text-[11px] font-bold uppercase tracking-wider text-gray-400">
            OR
          </span>
        </div>

        {/* Option 2: Enter Pincode */}
        <form onSubmit={handlePincodeSearch} className="flex flex-col gap-2">
          <label htmlFor="pincode-input" className="text-xs font-bold text-gray-700">
            Enter Pincode
          </label>
          <div className="flex items-center gap-2">
            <div className="relative flex-1 flex items-center h-[46px] rounded-full border border-gray-200 bg-white px-4">
              <Search className="h-4 w-4 text-gray-400 mr-2" />
              <input
                id="pincode-input"
                type="text"
                maxLength={6}
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                placeholder="122001"
                className="w-full bg-transparent border-0 outline-none text-sm text-gray-900 placeholder:text-gray-400"
              />
            </div>
            <button
              type="submit"
              className="h-[46px] rounded-full border border-fi-600 bg-white px-6 text-sm font-bold text-fi-600 transition-colors hover:bg-fi-50"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
