/**
 * Calculates standard EMI plans for a given product price.
 * 1Fi features 0% interest, no-cost EMIs backed by mutual funds.
 */

export const AVAILABLE_TENURES = [3, 6, 9, 12, 18, 24];

/**
 * Calculates monthly EMI rounded to the nearest integer.
 * @param {number} totalAmount 
 * @param {number} months 
 * @returns {number}
 */
export const calculateMonthlyEMI = (totalAmount, months) => {
  if (!totalAmount || totalAmount <= 0 || !months || months <= 0) return 0;
  return Math.round(totalAmount / months);
};

/**
 * Generates all available EMI plans for a given price.
 * @param {number} productPrice 
 * @returns {Array<{ id: string, months: number, monthlyAmount: number, totalAmount: number, interestRate: number, processingFee: number, tag: string }>}
 */
export const generateEMIPlans = (productPrice) => {
  if (!productPrice || productPrice <= 0) return [];

  return AVAILABLE_TENURES.map((months) => {
    const monthlyAmount = calculateMonthlyEMI(productPrice, months);
    let tag = '';
    if (months === 6) tag = 'Most Popular';
    if (months === 12) tag = 'Recommended';
    if (months === 24) tag = 'Lowest EMI';

    return {
      id: `plan-${months}m`,
      months,
      monthlyAmount,
      totalAmount: productPrice,
      interestRate: 0, // 0% No Cost EMI backed by mutual funds
      processingFee: 0,
      tag,
      description: `₹${monthlyAmount.toLocaleString('en-IN')}/mo for ${months} months`,
    };
  });
};

/**
 * Returns the starting (lowest monthly) EMI for display on product cards.
 * @param {number} productPrice 
 * @returns {number}
 */
export const getStartingEMI = (productPrice) => {
  if (!productPrice) return 0;
  // Lowest monthly EMI is calculated over 12 months for standard cards
  return calculateMonthlyEMI(productPrice, 12);
};
