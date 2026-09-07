import { useState, useEffect, useMemo, useCallback } from 'react';
import { getProductById, submitEMIApplication } from '../services/marketplaceService';
import { generateEMIPlans } from '../utils/emiCalculator';

/**
 * Custom hook for managing single product detail view, variant selections, dynamic price updates,
 * EMI plans, and EMI order confirmation flow.
 */
export const useProductDetails = (productId) => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Variant States
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(null);

  // Active EMI Plan ID
  const [selectedPlanId, setSelectedPlanId] = useState('plan-12m'); // default to 12 months

  // Order Submission & Review Modal state
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderResult, setOrderResult] = useState(null);

  // Fetch product data
  const loadProduct = useCallback(async () => {
    if (!productId) return;
    setIsLoading(true);
    setError(null);
    try {
      const data = await getProductById(productId);
      setProduct(data);

      // Initialize default variants
      if (data.variants?.colors?.length) {
        setSelectedColor(data.variants.colors[0]);
      } else {
        setSelectedColor(null);
      }

      if (data.variants?.storage?.length) {
        setSelectedStorage(data.variants.storage[0]);
      } else {
        setSelectedStorage(null);
      }
    } catch (err) {
      setError(err.message || 'Failed to load product details.');
      setProduct(null);
    } finally {
      setIsLoading(false);
    }
  }, [productId]);

  useEffect(() => {
    loadProduct();
  }, [loadProduct]);

  // Compute dynamic final price considering storage priceDelta
  const currentPrice = useMemo(() => {
    if (!product) return 0;
    const base = product.price;
    const delta = selectedStorage?.priceDelta || 0;
    return Math.max(0, base + delta);
  }, [product, selectedStorage]);

  // Compute dynamic EMI plans based on current price
  const emiPlans = useMemo(() => {
    if (!currentPrice) return [];
    return generateEMIPlans(currentPrice);
  }, [currentPrice]);

  // Get active selected EMI plan object
  const selectedPlan = useMemo(() => {
    return emiPlans.find((plan) => plan.id === selectedPlanId) || emiPlans[0] || null;
  }, [emiPlans, selectedPlanId]);

  // Check if all necessary selections are made to enable Proceed button
  const isProceedReady = useMemo(() => {
    if (!product) return false;
    const hasColorVariant = Boolean(product.variants?.colors?.length);
    const hasStorageVariant = Boolean(product.variants?.storage?.length);

    if (hasColorVariant && !selectedColor) return false;
    if (hasStorageVariant && !selectedStorage) return false;
    if (!selectedPlan) return false;

    return true;
  }, [product, selectedColor, selectedStorage, selectedPlan]);

  // Actions
  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleStorageSelect = (storage) => {
    setSelectedStorage(storage);
  };

  const handlePlanSelect = (planId) => {
    setSelectedPlanId(planId);
  };

  const openReviewModal = () => {
    if (isProceedReady) {
      setIsReviewModalOpen(true);
    }
  };

  const closeReviewModal = () => {
    setIsReviewModalOpen(false);
  };

  const handleConfirmOrder = async () => {
    if (!isProceedReady) return;
    setIsSubmitting(true);
    try {
      const result = await submitEMIApplication({
        productId: product.id,
        productName: product.name,
        price: currentPrice,
        variant: {
          color: selectedColor?.name,
          storage: selectedStorage?.size,
        },
        emiPlan: selectedPlan,
      });
      setOrderResult(result);
    } catch (err) {
      alert(err.message || 'Submission failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetOrder = () => {
    setOrderResult(null);
    setIsReviewModalOpen(false);
  };

  return {
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
    onColorSelect: handleColorSelect,
    onStorageSelect: handleStorageSelect,
    onPlanSelect: handlePlanSelect,
    onOpenReviewModal: openReviewModal,
    onCloseReviewModal: closeReviewModal,
    onConfirmOrder: handleConfirmOrder,
    onResetOrder: resetOrder,
    onRetry: loadProduct,
  };
};
