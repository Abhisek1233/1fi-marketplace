import React from 'react';
import {
  User,
  Package,
  PiggyBank,
  Users,
  HelpCircle,
  Shield,
  FileText,
  ChevronRight,
  LogOut,
  Heart,
} from 'lucide-react';

const PROFILE_ACTIONS = [
  {
    id: 'details',
    title: 'Profile details',
    subtitle: 'Name, contact and KYC info',
    icon: User,
  },
  {
    id: 'purchases',
    title: 'Purchases',
    subtitle: 'Orders, invoices and loan status',
    icon: Package,
  },
  {
    id: 'pledge',
    title: 'Pledge history',
    subtitle: 'Funds you pledged or released',
    icon: PiggyBank,
  },
  {
    id: 'invite',
    title: 'Invite friends',
    subtitle: 'Share the app, earn rewards',
    icon: Users,
    badge: 'EARN ₹500',
  },
  {
    id: 'support',
    title: 'Support & FAQs',
    subtitle: 'Find answers or contact us',
    icon: HelpCircle,
  },
  {
    id: 'privacy',
    title: 'Privacy policy',
    subtitle: 'How we handle your data',
    icon: Shield,
  },
  {
    id: 'terms',
    title: 'Terms & conditions',
    subtitle: 'Rules governing your use',
    icon: FileText,
  },
];

export const ProfilePage = () => {
  return (
    <div className="flex flex-col gap-4 pb-28 pt-2">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Profile
        </h1>
        <p className="text-xs text-gray-500 mt-0.5">
          Manage your account settings and personal preferences.
        </p>
      </div>

      {/* User Info Header */}
      <div className="flex items-center gap-3.5 py-1">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-fi-100 text-fi-700 font-extrabold text-base shadow-sm border border-fi-200/60">
          U
        </div>
        <div className="flex flex-col">
          <span className="text-[15px] font-bold text-gray-900 leading-snug">
            User
          </span>
          <span className="text-xs text-gray-500 font-medium">
            +91 7846809101
          </span>
        </div>
      </div>

      {/* Section Tag */}
      <div className="pt-2">
        <span className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400">
          QUICK ACTIONS
        </span>
      </div>

      {/* Quick Action Cards */}
      <div className="flex flex-col gap-2.5">
        {PROFILE_ACTIONS.map((action) => {
          const Icon = action.icon;
          return (
            <div
              key={action.id}
              role="button"
              tabIndex={0}
              onClick={() => {
                alert(`Navigating to ${action.title}`);
              }}
              className="flex items-center justify-between rounded-[20px] border border-gray-200/80 bg-white p-3.5 shadow-[0_2px_6px_rgba(20,14,50,0.03)] transition-all hover:border-fi-300 hover:shadow-md active:scale-[0.99] cursor-pointer"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-fi-100 text-fi-600">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-[13.5px] font-bold text-gray-900 leading-tight">
                    {action.title}
                  </h3>
                  <p className="text-[11.5px] text-gray-500 mt-0.5 truncate">
                    {action.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {action.badge && (
                  <span className="rounded-full bg-fi-100 border border-fi-200/80 px-2.5 py-0.5 text-[10px] font-extrabold text-fi-700">
                    {action.badge}
                  </span>
                )}
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Log Out Button */}
      <div className="mt-2">
        <button
          type="button"
          onClick={() => alert('Logged out successfully.')}
          className="w-full flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white py-3.5 text-xs font-bold text-red-600 shadow-sm transition-all hover:bg-red-50 hover:border-red-200 active:scale-[0.99] cursor-pointer"
        >
          <LogOut className="h-4 w-4 text-red-600" />
          <span>Log out</span>
        </button>
      </div>

      {/* Footer Branding */}
      <div className="flex items-center justify-center gap-1 pt-1 text-[11px] text-gray-400 font-medium">
        <span>Made with</span>
        <span className="text-fi-600">💜</span>
        <span>by 1Fi</span>
      </div>
    </div>
  );
};
