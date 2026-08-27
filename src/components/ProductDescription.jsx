import React from 'react';

export const ProductDescription = () => {
  return (
    <section className="bg-black text-white py-20 relative overflow-hidden border-b border-slate-900">
      
      {/* Red Glow Radial Gradient Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-700/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Transparent PNG Gold Bottle Artwork */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              <img
                src="/bottle_artwork.png"
                alt="Horse Fire Gold Cap Bottle Artwork"
                className="w-full h-auto object-contain max-h-[440px] drop-shadow-[0_20px_35px_rgba(204,0,0,0.35)] hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Column: Clean Text Content */}
          <div className="md:col-span-7 space-y-6 text-center md:text-left">
            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Product Description
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                Horse Fire Tablets is a premium Ayurvedic wellness formula formulated with 17 potent traditional herbs including Ashwagandha, Gokshura, Safed Musli, Kaunch Beej, and Shatavari.
              </p>
              <p>
                Crafted to support daily energy, stamina, and active performance, it helps maintain peak vitality, reduces daily stress & fatigue, and promotes general wellbeing naturally.
              </p>
              <p>
                Made under strict GMP-certified & FSSAI licensed facilities, Horse Fire Tablets is 100% natural, safe for daily use, and free from harmful chemical additives.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-semibold text-amber-400">
              <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                âœ“ 100% Ayurvedic Formula
              </span>
              <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                âœ“ FSSAI & GMP Certified
              </span>
              <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                âœ“ Safe for Daily Use
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
