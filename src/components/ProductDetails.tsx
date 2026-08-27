import React, { useState } from 'react';
import { ShoppingCart, Zap, RefreshCw, ShieldCheck, Truck, CreditCard, Award, CheckCircle2 } from 'lucide-react';

const galleryImages = [
  {
    url: '/kajal_raghwani.jpg',
    alt: 'Kajal Raghwani holding Horse Fire Bottle',
    tag: 'Kajal Raghwani',
  },
  {
    url: '/bottle_artwork.png',
    alt: 'Horse Fire Tablets Bottle Artwork',
    tag: 'Horse Fire Tablets',
  },
  {
    url: '/banners/banner1.jpg',
    alt: 'Horse Fire Brand Ambassador',
    tag: 'Official Brand Ambassador',
  },
  {
    url: '/banners/banner2.jpg',
    alt: 'Ayurvedic Doctor Endorsement',
    tag: 'Dr. à¤•à¤¾ à¤­à¤°à¥‹à¤¸à¤¾',
  },
  {
    url: '/banners/banner3.jpg',
    alt: 'Natural Power Maximum Performance',
    tag: 'Natural Power',
  },
  {
    url: '/banners/banner4.png',
    alt: '1 Month Course 60 Capsules',
    tag: '60 Capsules Course',
  },
];

export const ProductDetails = ({ onOrderClick }) => {
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);

  const scrollToOrderForm = () => {
    const el = document.getElementById('order-form-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOrderClick();
    }
  };

  return (
    <section className="py-8 sm:py-12 bg-white text-slate-900 border-b border-slate-200 w-full max-w-full">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full max-w-full">
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-10 items-start w-full max-w-full">
          
          {/* Left Column: STICKY Product Image Gallery */}
          <div className="lg:col-span-6 lg:sticky lg:top-6 lg:self-start space-y-3 sm:space-y-4 w-full max-w-full z-10">
            
            {/* Main Showcase Frame */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-50 border border-slate-200 shadow-md w-full max-w-full">
              
              {/* Top Live Stats Badges */}
              <div className="absolute top-2 sm:top-4 left-2 sm:left-4 z-10 flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="bg-red-600 text-white font-bold text-[10px] sm:text-xs px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full shadow flex items-center gap-1">
                  <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-white animate-pulse" />
                  2,523 Live Visitors
                </span>
                <span className="bg-emerald-800 text-white font-bold text-[10px] sm:text-xs px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full shadow">
                  385 Sold in last 2 hours
                </span>
              </div>

              {/* Main Image */}
              <div className="h-[320px] sm:h-[450px] lg:h-[480px] w-full flex items-center justify-center p-2 bg-white">
                <img
                  src={galleryImages[selectedImgIndex].url}
                  alt={galleryImages[selectedImgIndex].alt}
                  className="max-h-full max-w-full object-contain rounded-xl sm:rounded-2xl transition-transform duration-300"
                />
              </div>

              {/* Bottom Tag */}
              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 z-10">
                <span className="bg-red-700/95 text-white font-serif font-bold text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-lg backdrop-blur-sm border border-red-400/30">
                  {galleryImages[selectedImgIndex].tag}
                </span>
              </div>

            </div>

            {/* Thumbnails Row */}
            <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-none w-full max-w-full">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImgIndex(idx)}
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl overflow-hidden border-2 transition-all shrink-0 bg-slate-100 p-0.5 sm:p-1 ${
                    selectedImgIndex === idx
                      ? 'border-red-600 ring-2 ring-red-600/30 scale-105 shadow-md'
                      : 'border-slate-200 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img.url} alt={img.alt} className="w-full h-full object-cover rounded-lg sm:rounded-xl" />
                </button>
              ))}
            </div>

          </div>

          {/* Right Column: Independent Scrolling Content */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 w-full max-w-full">
            
            <div>
              <h1 className="font-serif text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Horse Fire Tablets
              </h1>
              <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
                Promotes daily energy, stamina and overall wellness â€” crafted with traditional Ayurvedic herbs.
              </p>

              {/* Star Rating */}
              <div className="flex items-center gap-2 mt-2.5">
                <div className="flex text-amber-500 text-sm">
                  {'â˜…'.repeat(5)}
                </div>
                <span className="text-xs font-bold text-slate-800">4.6 (2,180 reviews)</span>
              </div>
            </div>

            {/* Best Price Banner */}
            <div className="bg-[#1c140d] text-white p-3.5 sm:p-4 rounded-2xl border border-amber-950 flex items-center justify-between shadow-md">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="bg-red-700 text-white text-[9px] sm:text-[10px] font-black uppercase px-2 sm:px-2.5 py-1 rounded">
                  BEST PRICE
                </span>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-white">Just for online payments!</h4>
                  <p className="text-[11px] sm:text-xs text-amber-200/80">Pay online and get it for just â‚¹1,349</p>
                </div>
              </div>
            </div>

            {/* 60 Tablets Pack Selection Box */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-red-600 relative shadow-sm text-center">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] sm:text-[11px] font-bold px-3 sm:px-4 py-0.5 rounded-full uppercase whitespace-nowrap">
                60 Tablets
              </span>

              <div className="flex items-baseline justify-center gap-2 sm:gap-3 mt-1 sm:mt-2">
                <span className="font-extrabold text-2xl sm:text-3xl text-slate-900">â‚¹1,499</span>
                <span className="text-xs sm:text-sm text-slate-400 line-through font-semibold">â‚¹3,000</span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5">MRP incl. of all taxes</p>

              <div className="mt-2.5 sm:mt-3 inline-block bg-red-700 text-white font-bold text-[10px] sm:text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                Save â‚¹1501
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <button
                onClick={scrollToOrderForm}
                className="bg-[#c02425] hover:bg-red-700 text-white font-black text-sm sm:text-base py-3.5 sm:py-4 rounded-2xl shadow-lg shadow-red-700/30 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
              >
                <ShoppingCart className="w-4 sm:w-5 h-4 sm:h-5" />
                <span>à¤…à¤­à¥€ à¤‘à¤°à¥à¤¡à¤° à¤•à¤°à¥‡à¤‚</span>
              </button>

              <button
                onClick={scrollToOrderForm}
                className="bg-white hover:bg-slate-50 border-2 border-slate-900 text-slate-900 font-bold text-sm sm:text-base py-3.5 sm:py-4 rounded-2xl shadow-sm transition-all"
              >
                à¤•à¤¾à¤°à¥à¤Ÿ à¤®à¥‡à¤‚ à¤œà¥‹à¤¡à¤¼à¥‡à¤‚
              </button>
            </div>

            <p className="text-[10px] sm:text-[11px] text-center text-slate-500 font-medium">
              Pay via <strong className="text-slate-800">GPay, PhonePe, Paytm, UPI</strong> and get Instant discount
            </p>

            {/* What's Different? */}
            <div className="space-y-3 pt-2">
              <h3 className="font-serif font-extrabold text-base sm:text-lg text-slate-900">What's Different?</h3>

              <div className="space-y-2">
                <div className="flex items-center gap-3 bg-[#1d5939] text-white p-3 sm:p-3.5 rounded-full text-xs sm:text-sm font-semibold shadow-sm">
                  <Zap className="w-4 h-4 text-amber-300 shrink-0" />
                  <span>Supports Daily Wellness and Energy Balance</span>
                </div>

                <div className="flex items-center gap-3 bg-[#1d5939] text-white p-3 sm:p-3.5 rounded-full text-xs sm:text-sm font-semibold shadow-sm">
                  <RefreshCw className="w-4 h-4 text-amber-300 shrink-0" />
                  <span>Supports Relaxation and Calmness</span>
                </div>

                <div className="flex items-center gap-3 bg-[#1d5939] text-white p-3 sm:p-3.5 rounded-full text-xs sm:text-sm font-semibold shadow-sm">
                  <Award className="w-4 h-4 text-amber-300 shrink-0" />
                  <span>Supports Natural Energy & Strength</span>
                </div>

                <div className="flex items-center gap-3 bg-[#1d5939] text-white p-3 sm:p-3.5 rounded-full text-xs sm:text-sm font-semibold shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                  <span>Helps Maintain Energy and Overall Wellness</span>
                </div>
              </div>
            </div>

            {/* Dark Maroon Trust & Compliance Box */}
            <div className="bg-[#240b0b] text-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-amber-950/50 space-y-5 sm:space-y-6">
              
              <div className="grid grid-cols-4 gap-1.5 sm:gap-2 text-center border-b border-white/10 pb-4 sm:pb-6">
                <div>
                  <RefreshCw className="w-4 sm:w-5 h-4 sm:h-5 text-amber-400 mx-auto mb-1" />
                  <span className="text-[9px] sm:text-[10px] font-bold block text-amber-200 leading-tight">Easy Returns</span>
                </div>
                <div>
                  <CreditCard className="w-4 sm:w-5 h-4 sm:h-5 text-amber-400 mx-auto mb-1" />
                  <span className="text-[9px] sm:text-[10px] font-bold block text-amber-200 leading-tight">Secure Payments</span>
                </div>
                <div>
                  <Truck className="w-4 sm:w-5 h-4 sm:h-5 text-amber-400 mx-auto mb-1" />
                  <span className="text-[9px] sm:text-[10px] font-bold block text-amber-200 leading-tight">Free Shipping</span>
                </div>
                <div>
                  <ShieldCheck className="w-4 sm:w-5 h-4 sm:h-5 text-amber-400 mx-auto mb-1" />
                  <span className="text-[9px] sm:text-[10px] font-bold block text-amber-200 leading-tight">COD Available</span>
                </div>
              </div>

              {/* White Inner Certificates */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-white text-slate-900 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl text-center shadow">
                  <span className="font-serif font-black text-xs sm:text-sm text-red-900 block">FSSAI</span>
                  <span className="text-[9px] sm:text-[10px] font-semibold text-slate-600 block">Lic. No. 10725994000235</span>
                </div>

                <div className="bg-white text-slate-900 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl text-center shadow">
                  <span className="font-serif font-black text-xs sm:text-sm text-red-900 block">ISO 9001:2015</span>
                  <span className="text-[9px] sm:text-[10px] font-semibold text-slate-600 block">ISO Certified</span>
                </div>
              </div>

            </div>

            {/* Circular Quality Badges */}
            <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center pt-1">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-amber-600 flex items-center justify-center mx-auto text-amber-700 text-xs sm:text-base mb-1 bg-amber-50">
                  ðŸŒ±
                </div>
                <span className="text-[9px] sm:text-[10px] font-bold uppercase text-slate-700 block">AYUSH</span>
              </div>

              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-emerald-600 flex items-center justify-center mx-auto text-emerald-700 text-xs sm:text-base mb-1 bg-emerald-50">
                  âœ“
                </div>
                <span className="text-[9px] sm:text-[10px] font-bold uppercase text-slate-700 block">FDA Approved</span>
              </div>

              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-amber-600 flex items-center justify-center mx-auto text-amber-700 text-xs sm:text-base mb-1 bg-amber-50">
                  âœ¦
                </div>
                <span className="text-[9px] sm:text-[10px] font-bold uppercase text-slate-700 block">GMP Quality</span>
              </div>

              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-emerald-600 flex items-center justify-center mx-auto text-emerald-700 text-xs sm:text-base mb-1 bg-emerald-50">
                  ðŸ‡®ðŸ‡³
                </div>
                <span className="text-[9px] sm:text-[10px] font-bold uppercase text-slate-700 block">Made In India</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
