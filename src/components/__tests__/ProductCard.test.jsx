import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ProductCard } from '../marketplace/ProductCard';

const mockProduct = {
  id: 'apple-iphone-15',
  name: 'Apple iPhone 15',
  brand: 'Apple',
  category: 'Mobiles',
  price: 69999,
  originalPrice: 79900,
  rating: 4.8,
  image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80',
};

describe('ProductCard component', () => {
  it('renders product details correctly', () => {
    render(
      <BrowserRouter>
        <ProductCard product={mockProduct} />
      </BrowserRouter>
    );

    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.getByText('Apple iPhone 15')).toBeInTheDocument();
    expect(screen.getByText('₹69,999')).toBeInTheDocument();
    expect(screen.getByText('₹79,900')).toBeInTheDocument();
    expect(screen.getByText('₹5,833/mo')).toBeInTheDocument();
    expect(screen.getByText('4.8')).toBeInTheDocument();
  });
});
