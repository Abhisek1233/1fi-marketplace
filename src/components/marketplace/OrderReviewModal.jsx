import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, CheckCircle, ShieldCheck, Sparkles, ArrowRight, Calendar, CreditCard } from 'lucide-react';
import confetti from 'canvas-confetti';
import { formatCurrency, formatMonthlyEMI } from '../../utils/formatters';

export const OrderReviewModal = ({
  isOpen,
  onClose,
  product,
  currentPrice,
  selectedColor,
  selectedStorage,
  selectedPlan,
  isSubmitting,
  orderResult,
  onConfirm,
  onReset,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (orderResult && orderResult.success) {
      // Trigger festive confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#712CDC', '#8C4BF5', '#AC7FF9', '#10B981', '#F59E0B'],
      });
    }
  }, [orderResult]);

  if (!isOpen || !product) return null;

  // Next month 5th due date
  const nextDueDate = new Date();
  nextDueDate.setMonth(nextDueDate.getMonth() + 1);
  nextDueDate.setDate(5);
  const formattedDueDate = nextDueDate.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="review-title"
    >
      <div className="relative w-full max-w-[480px] max-h-[90vh] overflow-y-auto rounded-t-[28px] sm:rounded-[28px] bg-white p-6 shadow-2xl transition-all">
        {/* Close Button */}
        {!orderResult && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close review modal"
            className="absolute top-5 right-5 rounded-full p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </button>
        )}

        {/* State 1: Order Review Screen */}
        {!orderResult ? (
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-fi-600">
                Review & Confirm
              </span>
              <h3 id="review-title" className="text-xl font-bold text-gray-900 mt-0.5">
                Mutual Fund Backed EMI
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">
                Verify your product variant and chosen EMI plan below.
              </p>
            </div>

            {/* Product Summary Card */}
            <div className="flex items-center gap-3.5 rounded-2xl bg-gray-50 border border-gray-100 p-3.5">
              <img
                src={product.image}
                alt={product.name}
                className="h-16 w-16 rounded-xl object-cover bg-white border border-gray-200"
              />
              <div className="min-w-0 flex-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-fi-600">
                  {product.brand}
                </span>
                <h4 className="text-[14px] font-semibold text-gray-900 truncate">
                  {product.name}
                </h4>
                <div className="mt-1 flex items-center gap-2 flex-wrap text-[11px] text-gray-500">
                  {selectedColor && (
                    <span className="inline-flex items-center gap-1 font-medium">
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ backgroundColor: selectedColor.hex }}
                      />
                      {selectedColor.name}
                    </span>
                  )}
                  {selectedColor && selectedStorage && <span>•</span>}
                  {selectedStorage && (
                    <span className="font-semibold text-gray-700">
                      {selectedStorage.size}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* EMI Breakdown Breakdown */}
            <div className="flex flex-col gap-2.5 rounded-2xl border border-fi-100 bg-fi-50/50 p-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500 font-medium">Product Price</span>
                <span className="font-semibold text-gray-900">
                  {formatCurrency(currentPrice)}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500 font-medium">Selected Tenure</span>
                <span className="font-bold text-fi-700">
                  {selectedPlan?.months} Months Plan
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500 font-medium">Interest & Platform Fee</span>
                <span className="font-bold text-emerald-600">
                  ₹0 (0% No Cost)
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500 font-medium">First EMI Due Date</span>
                <span className="font-semibold text-gray-800 flex items-center gap-1">
                  <Calendar className="h-3 w-3 text-gray-400" />
                  {formattedDueDate}
                </span>
              </div>

              <div className="pt-2 mt-1 border-t border-fi-200/70 flex items-baseline justify-between">
                <span className="text-sm font-bold text-gray-900">Monthly EMI</span>
                <span className="text-lg font-extrabold text-fi-700">
                  {formatMonthlyEMI(selectedPlan?.monthlyAmount)}
                </span>
              </div>
            </div>

            {/* Security Guarantee */}
            <div className="flex items-start gap-2.5 rounded-xl bg-emerald-50/70 border border-emerald-100 p-3 text-[11.5px] text-emerald-900">
              <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                Your mutual fund investments stay invested and continue earning returns while backing this zero-interest purchase.
              </span>
            </div>

            {/* Actions */}
            <div className="mt-2 flex flex-col gap-2">
              <button
                type="button"
                disabled={isSubmitting}
                onClick={onConfirm}
                className="w-full flex items-center justify-center gap-2 rounded-full bg-fi-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-fi-600/30 transition-all hover:bg-fi-700 active:scale-[0.99] disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Approving EMI Plan...
                  </span>
                ) : (
                  <>
                    <span>Confirm & Lock Plan</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={onClose}
                disabled={isSubmitting}
                className="w-full py-2.5 text-xs font-semibold text-gray-500 hover:text-gray-700"
              >
                Cancel & Change Selection
              </button>
            </div>
          </div>
        ) : (
          /* State 2: Success Confirmation Screen */
          <div className="flex flex-col items-center text-center py-2">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-inner">
              <CheckCircle className="h-10 w-10 text-emerald-600" />
            </div>

            <span className="inline-flex items-center gap-1 rounded-full bg-fi-100 border border-fi-200 px-3 py-0.5 text-[11px] font-bold text-fi-700 mb-1">
              <Sparkles className="h-3 w-3 text-fi-600" />
              Application Approved
            </span>

            <h3 className="text-xl font-bold text-gray-900">
              EMI Plan Activated!
            </h3>
            <p className="mt-1 text-xs text-gray-500 max-w-[34ch]">
              Your 0% interest EMI plan for <span className="font-semibold text-gray-800">{product.name}</span> has been confirmed.
            </p>

            {/* Approved Details Box */}
            <div className="mt-5 w-full flex flex-col gap-2 rounded-2xl bg-gray-50 border border-gray-100 p-4 text-left">
              <div className="flex items-center justify-between text-xs pb-2 border-b border-gray-200/60">
                <span className="text-gray-500">Order Reference</span>
                <span className="font-mono font-bold text-gray-900">{orderResult.orderId}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500">Monthly Installment</span>
                <span className="font-bold text-fi-700">{formatMonthlyEMI(selectedPlan?.monthlyAmount)}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500">Tenure</span>
                <span className="font-semibold text-gray-800">{selectedPlan?.months} Months</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500">Collateral</span>
                <span className="font-semibold text-emerald-700">Mutual Fund Lien Registered</span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="mt-6 w-full flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => {
                  onReset();
                  navigate('/emi-dues');
                }}
                className="w-full flex items-center justify-center gap-2 rounded-full bg-fi-600 py-3.5 text-sm font-bold text-white shadow-md shadow-fi-600/30 transition-all hover:bg-fi-700 active:scale-[0.99]"
              >
                <CreditCard className="h-4 w-4" />
                <span>View in EMI Dues</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  onReset();
                  navigate('/shop');
                }}
                className="w-full py-2.5 text-xs font-semibold text-gray-600 hover:text-gray-900"
              >
                Back to Marketplace
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
