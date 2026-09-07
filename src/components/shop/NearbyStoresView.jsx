import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { NEARBY_STORES } from '../../data/stores';
import { LocationModal } from '../common/LocationModal';

const StoreLogo = ({ brand }) => {
  if (brand === 'suzuki') {
    return (
      <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-2xl border border-gray-200/90 bg-white p-1.5 shadow-sm">
        {/* Red Suzuki S */}
        <svg viewBox="0 0 100 70" className="h-6 w-7" fill="none">
          <path
            d="M25 5 L85 5 L70 26 L45 26 L75 42 L15 42 L30 21 L55 21 Z"
            fill="#E53935"
          />
          <path
            d="M30 28 L90 28 L75 49 L50 49 L80 65 L20 65 L35 44 L60 44 Z"
            fill="#E53935"
          />
        </svg>
        <span className="text-[8px] font-black tracking-widest text-[#003399] uppercase -mt-0.5">
          SUZUKI
        </span>
      </div>
    );
  }

  if (brand === 'honda') {
    return (
      <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-2xl border border-gray-200/90 bg-white p-1.5 shadow-sm">
        {/* Red Honda Wing */}
        <svg viewBox="0 0 100 60" className="h-6 w-8" fill="#E53935">
          <path d="M10 45 C25 25, 60 10, 90 8 C70 18, 55 30, 45 42 C65 28, 85 24, 95 24 C75 36, 60 46, 50 54 L10 54 Z" />
        </svg>
        <span className="text-[8px] font-black tracking-widest text-[#E53935] uppercase">
          HONDA
        </span>
      </div>
    );
  }

  if (brand === 'atelier') {
    return (
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-gray-200/90 bg-white p-2 shadow-sm">
        {/* Golden Mandala / Flower Emblem */}
        <div className="relative flex h-9 w-9 items-center justify-center rounded-full border-2 border-amber-400 p-1">
          <div className="grid grid-cols-2 gap-0.5">
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          </div>
        </div>
      </div>
    );
  }

  if (brand === 'chargeronwheel') {
    return (
      <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-2xl border border-gray-200/90 bg-white p-1.5 shadow-sm">
        <span className="text-[8px] font-black tracking-tighter text-gray-900 leading-tight">
          CHARGER
        </span>
        <div className="flex items-center gap-0.5">
          <span className="text-[7.5px] font-extrabold text-gray-800">ON WHEEL</span>
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-gray-200/90 bg-white p-2 shadow-sm text-fi-600 font-bold">
      Store
    </div>
  );
};

export const NearbyStoresView = () => {
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('Gurugram');
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);

  const filteredStores = NEARBY_STORES.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.address.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-4">
      {/* Search Stores */}
      <div className="flex items-center gap-[10px] h-[46px] rounded-full border border-gray-200 bg-white px-4 shadow-[0_1px_3px_rgba(20,14,50,0.03)] focus-within:border-fi-600">
        <Search className="h-[17px] w-[17px] text-gray-400 shrink-0" aria-hidden="true" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search stores..."
          aria-label="Search stores"
          className="flex-1 bg-transparent border-0 outline-none text-[13.5px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-0 shadow-none"
        />
      </div>

      {/* Header & Location Selector */}
      <div className="flex items-center justify-between gap-3 pt-1">
        <p className="text-[20px] font-semibold leading-[1.2] tracking-[-0.018em] text-gray-900">
          Nearby Stores
        </p>
        <button
          type="button"
          onClick={() => setIsLocationModalOpen(true)}
          className="flex items-center gap-1 rounded-full bg-fi-100 border border-fi-200 px-3 py-1 text-xs font-semibold text-fi-700 transition-colors hover:bg-fi-200 cursor-pointer"
        >
          <span>{location}</span>
          <ChevronDown className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Stores List */}
      <div className="flex flex-col gap-3">
        {filteredStores.map((store) => (
          <div
            key={store.id}
            className="flex items-center gap-3.5 rounded-[20px] border border-zinc-200 bg-white p-3.5 shadow-[0_2px_6px_rgba(20,14,50,0.04)] transition-all hover:border-fi-300 hover:shadow-md cursor-pointer"
          >
            {/* Left side authentic store logo */}
            <StoreLogo brand={store.brand} />

            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-[14px] font-bold text-gray-900 leading-tight truncate">
                  {store.name}
                </h3>
                <span className="shrink-0 rounded bg-gray-100 px-1.5 py-0.5 text-[10px] font-bold text-gray-600">
                  {store.distance}
                </span>
              </div>
              <p className="text-[12px] text-gray-500 mt-1 leading-snug line-clamp-2">
                {store.address}
              </p>
            </div>
          </div>
        ))}
      </div>

      <LocationModal
        isOpen={isLocationModalOpen}
        onClose={() => setIsLocationModalOpen(false)}
        selectedLocation={location}
        onSelectLocation={(loc) => setLocation(loc)}
      />
    </div>
  );
};
