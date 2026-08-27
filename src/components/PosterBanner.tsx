import React from 'react';

export const PosterBanner = () => {
  return (
    <section className="bg-slate-950 py-12 overflow-hidden border-b border-slate-900 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        
        {/* Compact Centered Poster Card */}
        <div className="w-full max-w-[340px] sm:max-w-sm rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black">
          <img
            src="/poster_banner.png"
            alt="Find Your Best Self Naturally - Horse Fire 3D Box & Bottle Poster"
            className="w-full h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
};
