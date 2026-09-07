/**
 * Utility functions for formatting currencies, numbers, and dates in the 1Fi design language.
 */

/**
 * Formats a number into Indian Rupee currency format (e.g. ₹69,999)
 * @param {number} amount 
 * @returns {string}
 */
export const formatCurrency = (amount) => {
  if (amount === undefined || amount === null || isNaN(amount)) return '₹0';
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

/**
 * Formats EMI monthly tag (e.g. ₹5,833/mo)
 * @param {number} monthlyAmount 
 * @returns {string}
 */
export const formatMonthlyEMI = (monthlyAmount) => {
  return `${formatCurrency(monthlyAmount)}/mo`;
};

/**
 * Truncates text with ellipsis if length exceeds limit
 * @param {string} text 
 * @param {number} maxLength 
 * @returns {string}
 */
export const truncateText = (text, maxLength = 60) => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};
