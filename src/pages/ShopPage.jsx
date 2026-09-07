import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ShopBanner } from '../components/common/ShopBanner';
import { SegmentedTabs } from '../components/common/SegmentedTabs';
import { TopBrandsView } from '../components/shop/TopBrandsView';
import { NearbyStoresView } from '../components/shop/NearbyStoresView';
import { MarketplaceHeader } from '../components/marketplace/MarketplaceHeader';
import { MarketplaceSearch } from '../components/marketplace/MarketplaceSearch';
import { CategoryTabs } from '../components/marketplace/CategoryTabs';
import { ProductGrid } from '../components/marketplace/ProductGrid';
import { MarketplaceSkeleton } from '../components/marketplace/MarketplaceSkeleton';
import { MarketplaceEmptyState } from '../components/marketplace/MarketplaceEmptyState';
import { MarketplaceError } from '../components/marketplace/MarketplaceError';
import { useProducts } from '../hooks/useProducts';

export const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTab = searchParams.get('tab') || 'marketplace';
  const [activeTab, setActiveTab] = useState(initialTab);

  const {
    products,
    categories,
    selectedCategory,
    searchQuery,
    isLoading,
    error,
    onCategoryChange,
    onSearchChange,
    onClearSearch,
    onRetry,
  } = useProducts();

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setSearchParams({ tab: tabId });
  };

  return (
    <div className="relative pb-24">
      {/* Top Banner */}
      <ShopBanner />

      {/* Segmented 3 Tabs (Top Brands, Nearby Stores, 1Fi Marketplace) */}
      <div className="relative z-[2] -mt-6 sm:-mt-7 flex flex-col gap-4 px-1">
        <SegmentedTabs activeTab={activeTab} onTabChange={handleTabChange} />
      </div>

      {/* Tab Content Section */}
      <div className="mt-3.5 px-1">
        {/* TAB 1: Top Brands */}
        {activeTab === 'brands' && <TopBrandsView />}

        {/* TAB 2: Nearby Stores */}
        {activeTab === 'stores' && <NearbyStoresView />}

        {/* TAB 3: 1Fi Marketplace */}
        {activeTab === 'marketplace' && (
          <div className="flex flex-col gap-4">
            {/* Header & Tagline */}
            <MarketplaceHeader />

            {/* Product Search */}
            <MarketplaceSearch
              value={searchQuery}
              onChange={onSearchChange}
              onClear={onClearSearch}
            />

            {/* Category Filter Pills */}
            <CategoryTabs
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={onCategoryChange}
            />

            {/* Status Bar / Product Count */}
            <div className="flex items-center justify-between px-1 text-xs text-gray-500">
              <span>
                {!isLoading && !error && (
                  <>
                    Showing <strong className="text-gray-900">{products.length}</strong> products
                    {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                  </>
                )}
              </span>
            </div>

            {/* Content States: Loading, Error, Empty, or Product Grid */}
            {isLoading ? (
              <MarketplaceSkeleton />
            ) : error ? (
              <MarketplaceError message={error} onRetry={onRetry} />
            ) : products.length === 0 ? (
              <MarketplaceEmptyState
                searchQuery={searchQuery}
                onReset={() => {
                  onClearSearch();
                  onCategoryChange('All');
                }}
              />
            ) : (
              <ProductGrid products={products} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};
