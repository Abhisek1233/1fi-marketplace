import { PRODUCTS, CATEGORIES } from '../data/products';
import { generateEMIPlans } from '../utils/emiCalculator';

/**
 * Service simulating backend API calls for the 1Fi Marketplace.
 * Returns Promises with simulated network latency to demonstrate real-world loading & error behavior.
 */

// Simulated network latency in milliseconds
const DEFAULT_DELAY_MS = 350;

// Flag to simulate network failure for testing error states
let simulateError = false;

export const setSimulateNetworkError = (value) => {
  simulateError = Boolean(value);
};

export const getSimulateNetworkError = () => simulateError;

/**
 * Fetches all products with optional category filter and search query.
 * @param {Object} options
 * @param {string} [options.category] - Category name to filter by (or 'All')
 * @param {string} [options.search] - Search string to match in title, brand, or description
 * @param {string} [options.sortBy] - Sort criteria ('price-asc', 'price-desc', 'rating', 'popular')
 * @returns {Promise<Array<Object>>}
 */
export const getProducts = async ({ category = 'All', search = '', sortBy = 'popular' } = {}) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (simulateError) {
        reject(new Error('Network error: Unable to fetch marketplace products.'));
        return;
      }

      let filtered = [...PRODUCTS];

      // Filter by Category
      if (category && category !== 'All') {
        filtered = filtered.filter(
          (p) => p.category.toLowerCase() === category.toLowerCase()
        );
      }

      // Filter by Search Query
      if (search && search.trim() !== '') {
        const query = search.trim().toLowerCase();
        filtered = filtered.filter((p) => {
          const matchName = p.name.toLowerCase().includes(query);
          const matchBrand = p.brand.toLowerCase().includes(query);
          const matchCategory = p.category.toLowerCase().includes(query);
          const matchDesc = p.description.toLowerCase().includes(query);
          return matchName || matchBrand || matchCategory || matchDesc;
        });
      }

      // Sort
      if (sortBy === 'price-asc') {
        filtered.sort((a, b) => a.price - b.price);
      } else if (sortBy === 'price-desc') {
        filtered.sort((a, b) => b.price - a.price);
      } else if (sortBy === 'rating') {
        filtered.sort((a, b) => b.rating - a.rating);
      }

      resolve(filtered);
    }, DEFAULT_DELAY_MS);
  });
};

/**
 * Fetches a single product by its unique ID.
 * @param {string} id - Product ID
 * @returns {Promise<Object>}
 */
export const getProductById = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (simulateError) {
        reject(new Error('Network error: Failed to retrieve product details.'));
        return;
      }

      const product = PRODUCTS.find((p) => p.id === id);
      if (!product) {
        reject(new Error(`Product not found with ID: ${id}`));
        return;
      }

      resolve({ ...product });
    }, DEFAULT_DELAY_MS);
  });
};

/**
 * Fetches the list of marketplace categories.
 * @returns {Promise<Array<string>>}
 */
export const getCategories = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...CATEGORIES]);
    }, 150);
  });
};

/**
 * Fetches EMI plans for a specific product price.
 * @param {number} price
 * @returns {Promise<Array<Object>>}
 */
export const getEMIPlans = async (price) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(generateEMIPlans(price));
    }, 100);
  });
};

/**
 * Simulates submitting an EMI order application backed by mutual funds.
 * @param {Object} applicationData
 * @returns {Promise<Object>}
 */
export const submitEMIApplication = async (applicationData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!applicationData || !applicationData.productId || !applicationData.emiPlan) {
        reject(new Error('Invalid application data. Missing product or EMI selection.'));
        return;
      }

      const orderId = '1FI-MF-' + Math.floor(100000 + Math.random() * 900000);
      resolve({
        success: true,
        orderId,
        createdAt: new Date().toISOString(),
        status: 'APPROVED',
        message: 'EMI plan approved & backed by your mutual fund portfolio!',
      });
    }, 600);
  });
};
