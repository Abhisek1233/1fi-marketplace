import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { DashboardPage } from './pages/DashboardPage';
import { EmiDuesPage } from './pages/EmiDuesPage';
import { LimitPage } from './pages/LimitPage';
import { ProfilePage } from './pages/ProfilePage';
import { BottomNavigation } from './components/common/BottomNavigation';

const AppLayout = ({ children }) => {
  const location = useLocation();
  // Hide bottom nav on deep product details page to give full room to EMI action bar
  const isProductDetails = location.pathname.includes('/product/');

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-gray-900">
      <div className="mx-auto w-full max-w-[500px] min-h-screen bg-[#F8F9FA] flex flex-col relative px-4 py-4 sm:px-5">
        <main className="flex-1">{children}</main>
        {!isProductDetails && <BottomNavigation />}
      </div>
    </div>
  );
};

export const App = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/shop" replace />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/marketplace" element={<ShopPage />} />
          <Route path="/shop/marketplace/product/:id" element={<ProductDetailsPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/emi-dues" element={<EmiDuesPage />} />
          <Route path="/pledged-funds" element={<LimitPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<Navigate to="/shop" replace />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};

export default App;
