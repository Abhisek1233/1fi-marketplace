import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, ShieldCheck, Sparkles, Check, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';
import { useProductDetails } from '../hooks/useProductDetails';
import { ProductGallery } from '../components/marketplace/ProductGallery';
import { ProductVariants } from '../components/marketplace/ProductVariants';
import { EMIPlanList } from '../components/marketplace/EMIPlanList';
import { OrderReviewModal } from '../components/marketplace/OrderReviewModal';
import { MarketplaceError } from '../components/marketplace/MarketplaceError';
import { formatCurrency, formatMonthlyEMI } from '../utils/formatters';

export const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    product,
    isLoading,
    error,
    currentPrice,
    selectedColor,
    selectedStorage,
    selectedPlan,
    selectedPlanId,
    emiPlans,
    isProceedReady,
    isReviewModalOpen,
    isSubmitting,
    orderResult,
    onColorSelect,
    onStorageSelect,
    onPlanSelect,
    onOpenReviewModal,
    onCloseReviewModal,
    onConfirmOrder,
    onResetOrder,
    onRetry,
  } = useProductDetails(id);

  const handleBack = () => {
    navigate('/shop?tab=marketplace');
  };

  if (isLoading) {
    return (
      <div className="flex flex-col gap-4 pb-28 pt-2 animate-pulse">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gray-200" />
          <div className="h-6 w-36 rounded bg-gray-200" />
        </div>
        <div className="aspect-square w-full rounded-2xl bg-gray-200" />
        <div className="h-6 w-3/4 rounded bg-gray-200" />
        <div className="h-8 w-1/3 rounded bg-gray-200" />
        <div className="h-32 w-full rounded-2xl bg-gray-200" />
        <div className="h-44 w-full rounded-2xl bg-gray-200" />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="flex flex-col gap-4 pt-4 pb-24">
        <button
          type="button"
          onClick={handleBack}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-fi-600 hover:text-fi-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Marketplace
        </button>
        <MarketplaceError
          message={error || 'The requested product could not be found.'}
          onRetry={onRetry}
        />
      </div>
    );
  }

  return (
    <div className="relative flex flex-col gap-4 pb-32 pt-1">
      {/* Top Header & Back Button */}
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={handleBack}
          className="inline-flex items-center gap-1.5 rounded-full bg-white border border-gray-200 px-3 py-1.5 text-xs font-bold text-gray-700 shadow-sm transition-all hover:bg-gray-50 active:scale-95"
        >
          <ArrowLeft className="h-4 w-4 text-fi-600" />
          <span>Marketplace</span>
        </button>

        <span className="inline-flex items-center gap-1 rounded-full bg-fi-100 border border-fi-200 px-2.5 py-1 text-[11px] font-bold text-fi-700">
          <Sparkles className="h-3 w-3 text-fi-600" />
          0% Interest EMI
        </span>
      </div>

      {/* Product Image Gallery */}
      <ProductGallery
        images={product.gallery || [product.image]}
        productName={product.name}
        brand={product.brand}
      />

      {/* Main Info Card */}
      <div className="flex flex-col gap-2 rounded-2xl border border-gray-200/80 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-fi-600">
            {product.brand}
          </span>
          {product.rating && (
            <div className="flex items-center gap-1 text-xs font-bold text-gray-700">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
              <span className="text-gray-400 font-normal">({product.reviewsCount} reviews)</span>
            </div>
          )}
        </div>

        <h1 className="text-xl font-extrabold text-gray-900 leading-snug">
          {product.name}
        </h1>

        {/* Pricing */}
        <div className="mt-1 flex items-baseline gap-2.5">
          <span className="text-2xl font-black text-gray-900">
            {formatCurrency(currentPrice)}
          </span>
          {product.originalPrice && product.originalPrice > currentPrice && (
            <span className="text-sm text-gray-400 line-through">
              {formatCurrency(product.originalPrice)}
            </span>
          )}
          <span className="rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold px-2 py-0.5 border border-emerald-200/60">
            0% Cost
          </span>
        </div>

        {/* Mutual fund benefit banner */}
        <div className="mt-2 flex items-center gap-2 rounded-xl bg-fi-50 border border-fi-100 p-2.5 text-xs text-fi-900">
          <ShieldCheck className="h-4 w-4 text-fi-600 shrink-0" />
          <span>Pay <strong>{formatMonthlyEMI(selectedPlan?.monthlyAmount)}</strong> without selling mutual funds or paying loan interest.</span>
        </div>
      </div>

      {/* Product Variants (Color & Storage) */}
      <ProductVariants
        variants={product.variants}
        selectedColor={selectedColor}
        selectedStorage={selectedStorage}
        onSelectColor={onColorSelect}
        onSelectStorage={onStorageSelect}
      />

      {/* Description & Key Highlights */}
      <div className="flex flex-col gap-3 rounded-2xl border border-gray-200/80 bg-white p-4 shadow-sm">
        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500">
          Product Details
        </h3>
        <p className="text-[13.5px] leading-relaxed text-gray-700">
          {product.description}
        </p>

        {product.highlights && product.highlights.length > 0 && (
          <div className="mt-1 flex flex-col gap-2 pt-2 border-t border-gray-100">
            <span className="text-xs font-bold text-gray-800">Highlights</span>
            <ul className="flex flex-col gap-1.5 text-xs text-gray-600">
              {product.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-fi-600 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* EMI Plans Tenure List */}
      <EMIPlanList
        plans={emiPlans}
        selectedPlanId={selectedPlanId}
        onSelectPlan={onPlanSelect}
      />

      {/* Sticky Bottom Action Bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 px-4 py-3 pb-[calc(14px+env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(20,14,50,0.08)]">
        <div className="mx-auto flex max-w-[500px] items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-[11px] font-semibold text-gray-500">
              {selectedPlan?.months || 12} Months EMI
            </span>
            <span className="text-lg font-black text-fi-700">
              {formatMonthlyEMI(selectedPlan?.monthlyAmount)}
            </span>
          </div>

          <button
            type="button"
            disabled={!isProceedReady}
            onClick={onOpenReviewModal}
            className="flex-1 max-w-[240px] flex items-center justify-center gap-1.5 rounded-full bg-fi-600 py-3.5 px-4 text-sm font-bold text-white shadow-lg shadow-fi-600/30 transition-all hover:bg-fi-700 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            <span>Proceed with EMI</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Review & Order Confirmation Modal */}
      <OrderReviewModal
        isOpen={isReviewModalOpen}
        onClose={onCloseReviewModal}
        product={product}
        currentPrice={currentPrice}
        selectedColor={selectedColor}
        selectedStorage={selectedStorage}
        selectedPlan={selectedPlan}
        isSubmitting={isSubmitting}
        orderResult={orderResult}
        onConfirm={onConfirmOrder}
        onReset={onResetOrder}
      />
    </div>
  );
};
