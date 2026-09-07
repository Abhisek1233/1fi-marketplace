import { describe, it, expect } from 'vitest';
import { calculateMonthlyEMI, generateEMIPlans, getStartingEMI } from '../emiCalculator';

describe('emiCalculator utilities', () => {
  it('correctly calculates monthly EMI rounded to integer', () => {
    // 69999 / 6 = 11666.5 => 11667
    expect(calculateMonthlyEMI(69999, 6)).toBe(11667);
    // 69999 / 12 = 5833.25 => 5833
    expect(calculateMonthlyEMI(69999, 12)).toBe(5833);
    // 69999 / 24 = 2916.625 => 2917
    expect(calculateMonthlyEMI(69999, 24)).toBe(2917);
  });

  it('handles invalid or zero prices safely', () => {
    expect(calculateMonthlyEMI(0, 12)).toBe(0);
    expect(calculateMonthlyEMI(-100, 12)).toBe(0);
    expect(calculateMonthlyEMI(5000, 0)).toBe(0);
  });

  it('generates all expected tenures for a product price', () => {
    const plans = generateEMIPlans(69999);
    expect(plans).toHaveLength(6);
    expect(plans.map((p) => p.months)).toEqual([3, 6, 9, 12, 18, 24]);

    const plan12m = plans.find((p) => p.months === 12);
    expect(plan12m).toBeDefined();
    expect(plan12m.monthlyAmount).toBe(5833);
    expect(plan12m.interestRate).toBe(0);
    expect(plan12m.totalAmount).toBe(69999);
  });

  it('returns valid starting EMI for card badges', () => {
    expect(getStartingEMI(69999)).toBe(5833);
    expect(getStartingEMI(0)).toBe(0);
  });
});
