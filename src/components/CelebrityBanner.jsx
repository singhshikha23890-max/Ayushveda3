import React from 'react';

export const CelebrityBanner = () => {
  return (
    <section className="bg-slate-950 overflow-hidden border-b border-slate-900 shadow-2xl w-full max-w-full">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 w-full max-w-full">
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black w-full max-w-full">
          <img
            src="/celebrity_banner.png"
            alt="Horse Fire Tablets Celebrity Endorsement - Gulshan Grover & Saanand Verma"
            className="w-full h-auto object-contain max-h-[500px]"
          />
        </div>
      </div>
    </section>
  );
};
