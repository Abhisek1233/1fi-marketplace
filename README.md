# 1Fi Marketplace

An official implementation for the **1Fi SDE Intern Assignment**, extending the existing **1Fi Shop** experience with a native, high-performance **1Fi Marketplace** section.

Built using 1Fi's exact mobile-first visual system, color palette (`#712CDC`), typography, rounded cards, floating navigation, and seamless 0% interest mutual-fund-backed EMI flows.

---

## 📱 Live App Parity & Architecture

The 1Fi Shop page integrates three distinct sections via segmented pill tabs:
1. **Top Brands** — Authentic partner store directory (Air India, Apple Premium Reseller, CaratLane, Croma, etc.)
2. **Nearby Stores** — Location-aware partner outlets with custom location picker modal (Gurugram / Pincode)
3. **1Fi Marketplace** — The core assignment feature: full end-to-end product discovery, multi-variant selection, 0% interest EMI tenure calculation, order review, and approval confirmation.

---

##  Key Features

### 🛒 1. Marketplace Product Browsing & Discovery
- **Live Search**: Instant keyword filtering across product names, brands, categories, and descriptions without full-page reloads.
- **Category Filter Pills**: Interactive horizontal pills for `All`, `Mobiles`, `Laptops`, `TVs`, `Audio`, and `Accessories`.
- **Realistic Indian Electronics Data**: 12+ premium products (iPhone 15, Galaxy S24, MacBook Air M3, Sony Bravia OLED, Sony WH-1000XM5, AirPods Pro 2, etc.) in INR (`₹`).
- **Product Cards**: High-res product images with error fallbacks, brand tag, full price, and starting EMI badge (`₹X,XXX/mo`).

### 📦 2. Product Details & Dynamic Variant Engine
- **Image Gallery**: Interactive multi-angle photo gallery with thumbnails and broken-image fallbacks.
- **Interactive Variants**:
  - Color swatches with visual checkmark indicators.
  - Storage/Configuration selector with dynamic price adjustments.
- **Dynamic Price & EMI Recalculation**: Selecting higher storage options (e.g. 256GB / 512GB) automatically recalculates the total price and updates all monthly EMI plans in real-time.

### 💳 3. 0% Interest Mutual-Fund Backed EMI Plans
- **Multi-Tenure Plans**: 3, 6, 9, 12, 18, and 24 months.
- **Clear Breakdown**: Shows monthly installment, total payable, 0% interest rate, and badges (`Recommended`, `Most Popular`, `Lowest EMI`).
- **Proceed Validation**: CTA is enabled once required variants and tenure are selected.

### 📋 4. Order Review & Approval Confirmation Flow
- **Review Sheet**: Summary modal with product variant, payment tenure, first EMI due date, and collateral notice.
- **Approval Experience**: Simulates mutual fund lien registration, triggers celebratory confetti, displays order reference ID (`1FI-MF-XXXXXX`), and offers one-click navigation to **EMI Dues**.

### 🛡️ 5. Resilient State Handling
- **Loading Skeletons**: Reusable shimmer loaders (`ProductCardSkeleton`, `MarketplaceSkeleton`) matching 1Fi's design language.
- **Error Handling**: Friendly error cards with a functional **"Retry"** button.
- **Empty States**: Elegant zero-results state with search reset CTA.
- **Developer / Reviewer Testing Tool**: A toggle in the marketplace header to simulate network errors and verify error/retry states on demand.

---

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 6 (Ultra-fast HMR and optimized production bundles)
- **Routing**: React Router DOM v6
- **Styling**: Tailwind CSS v3 with custom 1Fi brand tokens
- **Icons**: Lucide React
- **Celebration Effects**: Canvas Confetti
- **Testing**: Vitest + React Testing Library + JSDOM

---

## 📂 Project Structure

```
1fi-marketplace/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── BottomNavigation.jsx   # Docked 1Fi floating navigation
│   │   │   ├── LocationModal.jsx      # Nearby stores location selector
│   │   │   ├── SegmentedTabs.jsx      # Top Brands / Nearby Stores / 1Fi Marketplace
│   │   │   └── ShopBanner.jsx         # 1Fi purple gradient / CDN banner
│   │   ├── marketplace/
│   │   │   ├── CategoryTabs.jsx       # Category selector pills
│   │   │   ├── EMIPlanCard.jsx        # Individual EMI tenure option card
│   │   │   ├── EMIPlanList.jsx        # List of selectable EMI tenures
│   │   │   ├── MarketplaceEmptyState.jsx
│   │   │   ├── MarketplaceError.jsx
│   │   │   ├── MarketplaceHeader.jsx
│   │   │   ├── MarketplaceSearch.jsx  # Search pill input
│   │   │   ├── MarketplaceSkeleton.jsx# Shimmer skeleton loader
│   │   │   ├── OrderReviewModal.jsx   # Review & approval modal
│   │   │   ├── ProductCard.jsx        # Reusable product card with starting EMI
│   │   │   ├── ProductCardSkeleton.jsx
│   │   │   ├── ProductGallery.jsx     # Image viewer with fallback
│   │   │   ├── ProductGrid.jsx        # Responsive 2-column mobile grid
│   │   │   └── ProductVariants.jsx    # Color swatches & storage selectors
│   │   └── shop/
│   │       ├── NearbyStoresView.jsx   # Nearby stores listing
│   │       └── TopBrandsView.jsx      # Top brands listing
│   ├── data/
│   │   ├── brands.js                  # Top brands mock data
│   │   ├── products.js                # Rich products database with variants
│   │   └── stores.js                  # Nearby stores mock data
│   ├── hooks/
│   │   ├── useProductDetails.js       # Product details & variant/EMI state hook
│   │   └── useProducts.js             # Marketplace search & filter hook
│   ├── pages/
│   │   ├── DashboardPage.jsx          # Home / Portfolio limit
│   │   ├── EmiDuesPage.jsx            # EMI Dues overview
│   │   ├── LimitPage.jsx              # Mutual fund credit limit
│   │   ├── ProductDetailsPage.jsx     # Deep product details page
│   │   ├── ProfilePage.jsx            # User profile & KYC
│   │   └── ShopPage.jsx               # Shop page container
│   ├── services/
│   │   └── marketplaceService.js      # Promise-based mock API layer
│   ├── utils/
│   │   ├── emiCalculator.js           # Tenure generation & EMI math
│   │   └── formatters.js              # INR currency & string formatters
│   ├── App.jsx                        # Route configuration & mobile container
│   ├── index.css                      # Tailwind base & custom utilities
│   ├── main.jsx                       # Entrypoint
│   └── setupTests.js                  # Testing setup
├── tailwind.config.js                 # 1Fi colors (`#712CDC`), fonts, shadows
├── vite.config.js                     # Vite build & Vitest test config
└── package.json
```

---

## 🏃 Running Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation & Launch

1. **Navigate to the project folder:**
   ```bash
   cd C:/Users/abhis/.gemini/antigravity/scratch/1fi-marketplace
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Run automated unit tests:**
   ```bash
   npm test
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🧪 Verification & QA Checklist

- [x] **Top Brands Tab**: Preserves existing online brands directory.
- [x] **Nearby Stores Tab**: Preserves nearby outlets with interactive location selector.
- [x] **1Fi Marketplace Tab**: Full product catalog, real-time search, category filtering, and product grid.
- [x] **Product Details (`/shop/marketplace/product/:id`)**: Back navigation, image gallery, specs, variant selection, and tenure choices.
- [x] **Dynamic Pricing**: Changing storage sizes dynamically recalculates price and updates all EMI plans.
- [x] **Proceed CTA**: Disabled until selections are made; opens the confirmation modal.
- [x] **Order Approval**: Simulates submission, plays celebratory confetti, assigns an Order ID, and links to EMI Dues.
- [x] **Loading Skeletons & Error Handling**: Realistic async delays, skeleton loaders, error cards, and interactive retry button.
- [x] **Responsiveness**: Tested across standard mobile viewports (320px, 375px, 390px, 414px) and centered on desktop.
