import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Store, ReceiptIndianRupee, TrendingUp, User } from 'lucide-react';

const NAV_ITEMS = [
  { path: '/dashboard', label: 'Home', icon: Home },
  { path: '/shop', label: 'Shop', icon: Store },
  { path: '/emi-dues', label: 'EMI Dues', icon: ReceiptIndianRupee },
  { path: '/pledged-funds', label: 'Limit', icon: TrendingUp },
  { path: '/profile', label: 'Profile', icon: User },
];

export const BottomNavigation = () => {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 px-3 pb-[calc(12px+env(safe-area-inset-bottom))] pointer-events-none">
      <div className="mx-auto flex max-w-[500px] items-stretch rounded-[28px] bg-white/95 backdrop-blur-md border border-white/40 px-1.5 py-1.5 shadow-[0_8px_32px_rgba(20,14,50,0.12),0_0_0_1px_rgba(255,255,255,0.18)_inset] pointer-events-auto">
        {NAV_ITEMS.map(({ path, label, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `group relative flex min-w-0 flex-1 flex-col items-center justify-center gap-[3px] rounded-[18px] px-1 py-2 text-center transition-all duration-200 ${
                isActive
                  ? 'text-fi-600 font-bold'
                  : 'text-gray-400 hover:text-gray-600 font-medium'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <>
                    <span
                      className="absolute left-1/2 -top-[3px] h-[3px] w-8 -translate-x-1/2 rounded-full bg-fi-600"
                      aria-hidden="true"
                    />
                    <span
                      className="absolute inset-1 rounded-[14px] opacity-50"
                      style={{
                        background:
                          'radial-gradient(ellipse at 50% 30%, rgba(113,44,220,0.12) 0%, transparent 70%)',
                      }}
                      aria-hidden="true"
                    />
                  </>
                )}
                <Icon
                  className={`relative h-[22px] w-[22px] transition-transform duration-200 group-active:scale-90 ${
                    isActive
                      ? 'stroke-[2px] drop-shadow-[0_0_6px_rgba(113,44,220,0.3)]'
                      : 'stroke-[1.75px]'
                  }`}
                  aria-hidden="true"
                />
                <span className="relative max-w-full truncate text-[10px] tracking-wide">
                  {label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};
