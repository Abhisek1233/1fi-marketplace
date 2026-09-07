import { describe, it, expect, beforeEach } from 'vitest';
import {
  getProducts,
  getProductById,
  getCategories,
  setSimulateNetworkError,
  submitEMIApplication,
} from '../marketplaceService';

describe('marketplaceService API layer', () => {
  beforeEach(() => {
    setSimulateNetworkError(false);
  });

  it('fetches all products successfully', async () => {
    const products = await getProducts();
    expect(products.length).toBeGreaterThan(10);
  });

  it('filters products by category accurately', async () => {
    const mobiles = await getProducts({ category: 'Mobiles' });
    expect(mobiles.length).toBeGreaterThan(0);
    expect(mobiles.every((p) => p.category === 'Mobiles')).toBe(true);

    const laptops = await getProducts({ category: 'Laptops' });
    expect(laptops.length).toBeGreaterThan(0);
    expect(laptops.every((p) => p.category === 'Laptops')).toBe(true);
  });

  it('filters products by search keyword', async () => {
    const searchResults = await getProducts({ search: 'iphone' });
    expect(searchResults.length).toBeGreaterThan(0);
    expect(searchResults[0].name.toLowerCase()).toContain('iphone');
  });

  it('returns empty array when search finds no matches', async () => {
    const searchResults = await getProducts({ search: 'nonexistentproductxyz123' });
    expect(searchResults).toEqual([]);
  });

  it('fetches single product by ID', async () => {
    const product = await getProductById('apple-iphone-15');
    expect(product).toBeDefined();
    expect(product.name).toBe('Apple iPhone 15');
    expect(product.price).toBe(69999);
  });

  it('rejects with error when product is not found', async () => {
    await expect(getProductById('invalid-id-999')).rejects.toThrow('Product not found');
  });

  it('handles simulated network error gracefully', async () => {
    setSimulateNetworkError(true);
    await expect(getProducts()).rejects.toThrow('Network error');
  });

  it('successfully submits EMI order application', async () => {
    const result = await submitEMIApplication({
      productId: 'apple-iphone-15',
      emiPlan: { months: 12, monthlyAmount: 5833 },
    });
    expect(result.success).toBe(true);
    expect(result.orderId).toContain('1FI-MF-');
  });
});
