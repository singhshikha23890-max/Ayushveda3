import React from 'react';

export const HowToConsume = () => {
  return (
    <section className="py-16 bg-white overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="relative text-center mb-10">
          <span className="text-5xl sm:text-7xl font-black text-slate-100 uppercase select-none absolute left-1/2 -translate-x-1/2 -top-6 w-full">
            How To Consume
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 relative z-10">
            How To Consume
          </h2>
        </div>

        {/* High-Resolution Full-Width How To Consume Graphic */}
        <div className="flex justify-center">
          <div className="w-full rounded-3xl overflow-hidden shadow-xl border border-slate-100 p-2 sm:p-4 bg-white">
            <img
              src="/how_to_consume_banner.png"
              alt="How To Consume Horse Fire Tablets - 1, 2, 3 Steps"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
