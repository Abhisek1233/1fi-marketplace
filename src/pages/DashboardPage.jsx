import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  TrendingUp,
  Percent,
  Scan,
  Zap,
  Lock,
  ShoppingBag,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Users,
  Check,
} from 'lucide-react';

// Brand logos data for Top Brands infinite marquee
const BRAND_ITEMS = [
  { name: 'Apple', logo: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=120&q=80', color: '#111827', text: 'Apple' },
  { name: 'Reliance Digital', logo: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=120&q=80', color: '#E53935', text: 'Reliance D...' },
  { name: 'Croma', logo: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=120&q=80', color: '#00897B', text: 'Croma' },
  { name: 'Vijay Sales', logo: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=120&q=80', color: '#D32F2F', text: 'Vijay Sales' },
  { name: 'MakeMyTrip', logo: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=120&q=80', color: '#E64A19', text: 'MakeMyTrip' },
  { name: 'Air India', logo: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=120&q=80', color: '#C62828', text: 'Air India' },
  { name: 'Goibibo', logo: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=120&q=80', color: '#F57C00', text: 'Goibibo' },
  { name: 'Wakefit', logo: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=120&q=80', color: '#5E35B1', text: 'Wakefit' },
];

// Carousel offers
const OFFERS = [
  {
    id: 'offer-1',
    tag: 'EVERYDAY PRO PERFORMANCE',
    title: 'Get Your New MacBook for Work',
    subtitle: 'Starts at ₹2000/mo',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80',
    bg: 'from-[#0F172A] via-[#1E293B] to-[#0284C7]',
  },
  {
    id: 'offer-2',
    tag: 'ELECTRONICS SALE',
    title: 'Shop Big at Croma for Everyday Electronics',
    subtitle: 'Gadgets on easy EMIs',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=600&q=80',
    bg: 'from-[#0B132B] via-[#1C2541] to-[#3A506B]',
  },
  {
    id: 'offer-3',
    tag: 'FLAGSHIP SMARTPHONES',
    title: 'Upgrade to iPhone 15 & Galaxy S24',
    subtitle: '0% Interest • Backed by Mutual Funds',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80',
    bg: 'from-[#1E1B4B] via-[#312E81] to-[#4338CA]',
  },
];

// FAQ items
const FAQS = [
  {
    q: 'What is 1Fi?',
    a: '1Fi allows you to purchase electronics, appliances, and products on 0% interest EMIs by using your existing mutual fund portfolio as collateral without selling your investments.',
  },
  {
    q: 'Is 1Fi safe and legit?',
    a: 'Yes, 1Fi partners directly with RBI-registered NBFCs and authorized RTAs (CAMS & KFintech). Your mutual funds remain in your demat account under your name.',
  },
  {
    q: 'Who is the RBI approved lending partner?',
    a: 'All credit facilities provided on 1Fi are underwritten and disbursed by RBI-registered NBFC lending partners in full compliance with digital lending guidelines.',
  },
  {
    q: 'What documents are needed to take a loan?',
    a: 'Minimal paperless documentation: PAN card and mobile number linked with your mutual fund folio for instant online OTP verification.',
  },
  {
    q: 'Are there any hidden fees?',
    a: 'No, 1Fi offers genuine 0% interest no-cost EMIs with complete transparency and zero hidden processing charges.',
  },
  {
    q: 'What if markets fall?',
    a: 'A comfortable safety margin (LTV) is maintained on your mutual funds. Short-term market fluctuations do not affect your regular monthly EMI schedule.',
  },
  {
    q: 'Are there any charges if I pay early to release my pledged mutual fund units?',
    a: 'No foreclosure or prepayment penalties. Once your total dues are cleared, the lien on your mutual fund units is released immediately.',
  },
];

export const DashboardPage = () => {
  const navigate = useNavigate();
  const [activeOfferIndex, setActiveOfferIndex] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null);

  // Auto rotate offers carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveOfferIndex((prev) => (prev + 1) % OFFERS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-5 pb-28 pt-1">
      {/* 1. GET STARTED Top Banner */}
      <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-r from-[#5B1EB7] via-[#712CDC] to-[#8C4BF5] p-5 text-white shadow-xl shadow-fi-600/20">
        <div className="max-w-[62%]">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple-200">
            GET STARTED
          </span>
          <h2 className="mt-1 text-lg font-black leading-tight text-white">
            Shop on <span className="text-yellow-300">no-cost EMI</span>
          </h2>
          <p className="mt-1.5 text-[11px] leading-snug text-purple-100">
            Backed by your mutual funds, No credit pull, No charges, & quick approval.
          </p>

          <button
            type="button"
            onClick={() => navigate('/shop?tab=marketplace')}
            className="mt-3.5 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-bold text-gray-900 shadow-md transition-all hover:bg-purple-50 active:scale-95 cursor-pointer"
          >
            <span>Check eligibility</span>
            <ArrowRight className="h-3.5 w-3.5 text-fi-700" />
          </button>
        </div>

        {/* 3D 0% Interest graphic on right */}
        <div className="absolute top-1/2 -translate-y-1/2 -right-2 flex flex-col items-center justify-center">
          <div className="relative flex flex-col items-center">
            <span className="text-4xl sm:text-5xl font-black text-white/95 drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
              0%
            </span>
            <span className="text-[11px] font-black uppercase tracking-wider text-purple-200">
              INTEREST
            </span>
          </div>
        </div>
      </div>

      {/* 2. OFFERS Carousel */}
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center gap-1.5 text-[11px] font-bold tracking-wider text-fi-600 uppercase">
          <span className="h-3.5 w-1 rounded-full bg-fi-600" />
          <span>OFFERS</span>
        </div>

        {/* Offer Slide */}
        <div className="relative overflow-hidden rounded-[22px] bg-gradient-to-r shadow-md min-h-[140px] flex items-center p-4 text-white">
          <div
            className={`absolute inset-0 bg-gradient-to-r ${OFFERS[activeOfferIndex].bg} transition-all duration-700`}
          />
          <div className="relative z-10 max-w-[60%] flex flex-col justify-between">
            <span className="text-[9.5px] font-bold uppercase tracking-wider text-cyan-300">
              {OFFERS[activeOfferIndex].tag}
            </span>
            <h3 className="mt-1 text-[15px] font-bold leading-snug text-white">
              {OFFERS[activeOfferIndex].title}
            </h3>
            <div className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium text-emerald-300">
              <Check className="h-3 w-3" />
              <span>{OFFERS[activeOfferIndex].subtitle}</span>
            </div>
          </div>

          <div className="absolute right-3 top-1/2 -translate-y-1/2 h-24 w-28 overflow-hidden rounded-xl">
            <img
              src={OFFERS[activeOfferIndex].image}
              alt="Offer product"
              className="h-full w-full object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Carousel Dots Indicator */}
        <div className="flex items-center justify-center gap-1.5 pt-1">
          {OFFERS.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveOfferIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                activeOfferIndex === idx
                  ? 'w-6 bg-fi-600'
                  : 'w-1.5 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* 3. SHOP USING 1FI AT TOP BRANDS (Infinite Auto-scroll to left only) */}
      <div className="flex flex-col gap-2.5 overflow-hidden">
        <div className="flex items-center gap-1.5 text-[11px] font-bold tracking-wider text-fi-600 uppercase">
          <span className="h-3.5 w-1 rounded-full bg-fi-600" />
          <span>SHOP USING 1FI AT TOP BRANDS</span>
        </div>

        {/* Continuous Left Marquee Track */}
        <div className="relative overflow-hidden py-1">
          <div className="animate-marquee-left pause-hover flex items-center gap-3">
            {/* Duplicated for seamless infinite looping */}
            {[...BRAND_ITEMS, ...BRAND_ITEMS, ...BRAND_ITEMS].map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                role="button"
                tabIndex={0}
                onClick={() => navigate('/shop?tab=brands')}
                className="flex flex-col items-center justify-center gap-1.5 shrink-0 cursor-pointer"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white border border-gray-200/90 p-2 shadow-sm transition-all hover:border-fi-300 hover:scale-105">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-full w-full object-contain rounded-lg"
                  />
                </div>
                <span className="text-[10.5px] font-semibold text-gray-700 truncate max-w-[62px]">
                  {brand.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. WHY PAY WITH 1FI (Top goes left, Bottom goes right, stops at end then reverses) */}
      <div className="flex flex-col gap-2.5 overflow-hidden">
        <div className="flex items-center gap-1.5 text-[11px] font-bold tracking-wider text-fi-600 uppercase">
          <span className="h-3.5 w-1 rounded-full bg-fi-600" />
          <span>WHY PAY WITH 1FI</span>
        </div>

        <div className="flex flex-col gap-2.5 py-1">
          {/* Row 1: Top scrolls Left, stops & reverses */}
          <div className="overflow-hidden">
            <div className="animate-pingpong-left pause-hover flex items-center gap-3">
              {[1, 2, 3, 4].map((n) => (
                <React.Fragment key={n}>
                  {/* Keep Growing Card */}
                  <div className="flex items-center gap-3 rounded-2xl border border-gray-200/90 bg-white p-3.5 shadow-sm shrink-0 min-w-[210px]">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-bold text-gray-900 leading-tight">Keep growing</h4>
                      <p className="text-[11px] text-gray-500 mt-0.5">No tax, no exit load.</p>
                    </div>
                  </div>

                  {/* 0% Interest Card */}
                  <div className="flex items-center gap-3 rounded-2xl border border-gray-200/90 bg-white p-3.5 shadow-sm shrink-0 min-w-[210px]">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-fi-100 text-fi-600">
                      <Percent className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-bold text-gray-900 leading-tight">0% interest</h4>
                      <p className="text-[11px] text-gray-500 mt-0.5">Repay only what you spend.</p>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Row 2: Bottom scrolls Right, stops & reverses */}
          <div className="overflow-hidden">
            <div className="animate-pingpong-right pause-hover flex items-center gap-3">
              {[1, 2, 3, 4].map((n) => (
                <React.Fragment key={n}>
                  {/* Quickest Approvals Card */}
                  <div className="flex items-center gap-3 rounded-2xl border border-gray-200/90 bg-white p-3.5 shadow-sm shrink-0 min-w-[210px]">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                      <Scan className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-bold text-gray-900 leading-tight">Quickest approvals</h4>
                      <p className="text-[11px] text-gray-500 mt-0.5">Instant eligibility check.</p>
                    </div>
                  </div>

                  {/* Zero Charges Card */}
                  <div className="flex items-center gap-3 rounded-2xl border border-gray-200/90 bg-white p-3.5 shadow-sm shrink-0 min-w-[210px]">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                      <Zap className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-bold text-gray-900 leading-tight">Zero charges</h4>
                      <p className="text-[11px] text-gray-500 mt-0.5">No fees, nothing hidden.</p>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 5. HOW 1FI WORKS */}
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center gap-1.5 text-[11px] font-bold tracking-wider text-fi-600 uppercase">
          <span className="h-3.5 w-1 rounded-full bg-fi-600" />
          <span>HOW 1FI WORKS</span>
        </div>

        <div className="rounded-[22px] border border-gray-200/80 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between relative">
            {/* Horizontal connecting line */}
            <div className="absolute top-5 left-8 right-8 border-t border-dashed border-gray-200 z-0" />

            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center text-center max-w-[85px]">
              <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-fi-600 text-white shadow-md">
                <Scan className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-gray-900 text-[9px] font-bold text-white">
                  1
                </span>
              </div>
              <span className="mt-2 text-[10px] font-bold uppercase tracking-tight text-gray-800">
                CONNECT YOUR PORTFOLIO
              </span>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center text-center max-w-[85px]">
              <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-fi-600 text-white shadow-md">
                <Lock className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-gray-900 text-[9px] font-bold text-white">
                  2
                </span>
              </div>
              <span className="mt-2 text-[10px] font-bold uppercase tracking-tight text-gray-800">
                UNLOCK YOUR LIMIT
              </span>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center text-center max-w-[85px]">
              <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-fi-600 text-white shadow-md">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-gray-900 text-[9px] font-bold text-white">
                  3
                </span>
              </div>
              <span className="mt-2 text-[10px] font-bold uppercase tracking-tight text-gray-800">
                SHOP & PAY LATER
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 6. REFER AND EARN */}
      <div className="relative overflow-hidden rounded-[22px] bg-gradient-to-r from-[#4A148C] via-[#712CDC] to-[#8E24AA] p-4 text-white shadow-md">
        <div className="max-w-[65%]">
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/30 border border-emerald-400/40 px-2.5 py-0.5 text-[10px] font-extrabold text-emerald-300">
            <Users className="h-3 w-3" />
            INVITE
          </span>
          <h3 className="mt-1.5 text-[14px] font-extrabold text-white">
            Get <span className="text-yellow-300">upto ₹1000</span> for every friend.
          </h3>
          <p className="mt-0.5 text-[11px] text-purple-200">
            Plus they'll also get rewards.
          </p>
        </div>

        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-right">
          <span className="text-xl sm:text-2xl font-black text-white leading-none block drop-shadow-md">
            REFER<br />AND<br />EARN
          </span>
        </div>
      </div>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center gap-1.5 text-[11px] font-bold tracking-wider text-fi-600 uppercase">
          <span className="h-3.5 w-1 rounded-full bg-fi-600" />
          <span>FREQUENTLY ASKED QUESTIONS</span>
        </div>

        <div className="flex flex-col rounded-[22px] border border-gray-200/80 bg-white shadow-sm overflow-hidden divide-y divide-gray-100">
          {FAQS.map((faq, index) => {
            const isExpanded = expandedFaq === index;
            return (
              <div key={index} className="flex flex-col">
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex items-center justify-between p-4 text-left transition-colors hover:bg-gray-50/80"
                >
                  <span className="text-[13px] font-bold text-gray-900 pr-2">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-gray-400 shrink-0 transition-transform duration-200 ${
                      isExpanded ? 'rotate-180 text-fi-600' : ''
                    }`}
                  />
                </button>
                {isExpanded && (
                  <div className="px-4 pb-4 text-xs leading-relaxed text-gray-600 bg-gray-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* View all FAQs button */}
        <button
          type="button"
          onClick={() => alert('All FAQs are visible above!')}
          className="mt-1 w-full flex items-center justify-center gap-1.5 rounded-full border border-gray-200 bg-white py-3 text-xs font-bold text-fi-600 shadow-sm transition-all hover:bg-fi-50 hover:border-fi-200"
        >
          <span>View all FAQs</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
};
