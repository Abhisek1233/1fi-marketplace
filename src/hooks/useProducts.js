import { useState, useEffect, useCallback } from 'react';
import { getProducts, getCategories } from '../services/marketplaceService';

/**
 * Custom hook for managing marketplace products listing, category tabs, search query, loading, and error states.
 */
export const useProducts = (initialCategory = 'All', initialSearch = '') => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load categories once
  useEffect(() => {
    let isMounted = true;
    getCategories()
      .then((cats) => {
        if (isMounted) setCategories(cats);
      })
      .catch((err) => {
        console.error('Failed to load categories', err);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  // Fetch products whenever category or search query changes
  const fetchProducts = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getProducts({
        category: selectedCategory,
        search: searchQuery,
      });
      setProducts(data);
    } catch (err) {
      setError(err.message || 'Failed to load products. Please try again.');
      setProducts([]);
    } finally {
      setIsLoading(false);
    }
  }, [selectedCategory, searchQuery]);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    setError(null);

    const debounceTimer = setTimeout(() => {
      getProducts({
        category: selectedCategory,
        search: searchQuery,
      })
        .then((data) => {
          if (isMounted) {
            setProducts(data);
            setIsLoading(false);
          }
        })
        .catch((err) => {
          if (isMounted) {
            setError(err.message || 'Failed to load products.');
            setProducts([]);
            setIsLoading(false);
          }
        });
    }, 150);

    return () => {
      isMounted = false;
      clearTimeout(debounceTimer);
    };
  }, [selectedCategory, searchQuery]);

  const handleCategoryChange = useCallback((category) => {
    setSelectedCategory(category);
  }, []);

  const handleSearchChange = useCallback((query) => {
    setSearchQuery(query);
  }, []);

  const handleClearSearch = useCallback(() => {
    setSearchQuery('');
  }, []);

  const handleRetry = useCallback(() => {
    fetchProducts();
  }, [fetchProducts]);

  return {
    products,
    categories,
    selectedCategory,
    searchQuery,
    isLoading,
    error,
    onCategoryChange: handleCategoryChange,
    onSearchChange: handleSearchChange,
    onClearSearch: handleClearSearch,
    onRetry: handleRetry,
  };
};
