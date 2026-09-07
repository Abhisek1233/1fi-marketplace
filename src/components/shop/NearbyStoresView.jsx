import React, { useState } from 'react';
import { Search, ChevronDown, MapPin, Navigation } from 'lucide-react';
import { NEARBY_STORES } from '../../data/stores';
import { LocationModal } from '../common/LocationModal';

export const NearbyStoresView = () => {
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('Gurugram');
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);

  const filteredStores = NEARBY_STORES.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.brand.toLowerCase().includes(search.toLowerCase())
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
          className="flex items-center gap-1 rounded-full bg-fi-100 border border-fi-200 px-3 py-1 text-xs font-semibold text-fi-700 transition-colors hover:bg-fi-200"
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
            className="flex items-start gap-3.5 rounded-[20px] border border-zinc-200 bg-white p-3.5 shadow-[0_2px_6px_rgba(20,14,50,0.04)] transition-all hover:border-fi-300 hover:shadow-md cursor-pointer"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gray-50 border border-gray-200 text-fi-600 font-bold text-sm">
              <Navigation className="h-6 w-6 text-fi-600" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-[14px] font-bold text-gray-900 leading-tight">
                  {store.name}
                </h3>
                <span className="shrink-0 rounded bg-gray-100 px-1.5 py-0.5 text-[10.5px] font-semibold text-gray-600">
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
