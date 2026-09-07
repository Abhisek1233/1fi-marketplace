import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { EMIPlanCard } from '../marketplace/EMIPlanCard';

const mockPlan = {
  id: 'plan-12m',
  months: 12,
  monthlyAmount: 5833,
  totalAmount: 69999,
  interestRate: 0,
  tag: 'Recommended',
};

describe('EMIPlanCard component', () => {
  it('renders EMI plan information accurately', () => {
    const handleSelect = vi.fn();
    render(
      <EMIPlanCard
        plan={mockPlan}
        isSelected={true}
        onSelect={handleSelect}
      />
    );

    expect(screen.getByText('12 Months')).toBeInTheDocument();
    expect(screen.getByText('₹5,833/mo')).toBeInTheDocument();
    expect(screen.getByText(/Total ₹69,999/)).toBeInTheDocument();
    expect(screen.getByText('Recommended')).toBeInTheDocument();
    expect(screen.getByText('No Cost')).toBeInTheDocument();
  });

  it('triggers onSelect callback when clicked', () => {
    const handleSelect = vi.fn();
    render(
      <EMIPlanCard
        plan={mockPlan}
        isSelected={false}
        onSelect={handleSelect}
      />
    );

    fireEvent.click(screen.getByRole('radio'));
    expect(handleSelect).toHaveBeenCalledWith('plan-12m');
  });
});
