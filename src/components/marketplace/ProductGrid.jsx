import React from 'react';
import { ProductCard } from './ProductCard';

export const ProductGrid = ({ products = [] }) => {
  return (
    <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
