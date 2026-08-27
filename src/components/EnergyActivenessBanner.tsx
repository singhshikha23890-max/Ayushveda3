import React from 'react';

export const EnergyActivenessBanner = () => {
  return (
    <section className="py-12 sm:py-16 bg-white overflow-hidden border-b border-slate-200 w-full max-w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full">
        <div className="grid md:grid-cols-12 gap-6 sm:gap-8 items-center w-full max-w-full">
          
          {/* Left Runner Athlete Visual */}
          <div className="md:col-span-6 flex justify-center">
            <div className="relative max-w-xs sm:max-w-sm">
              <img
                src="/running_athlete.png"
                alt="Running Athlete Energy & Activeness"
                className="w-full h-auto object-contain max-h-[320px] sm:max-h-[420px] drop-shadow-[0_15px_25px_rgba(204,0,0,0.2)] hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Banner Typography */}
          <div className="md:col-span-6 space-y-2 sm:space-y-3 text-center md:text-left">
            <h2 className="font-serif font-black text-3xl sm:text-5xl lg:text-6xl text-slate-900 leading-tight">
              <span className="text-[#157a41] block">Supports</span>
              
              <span className="inline-flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 my-1">
                <span className="bg-[#cc0000] text-white px-3 sm:px-4 py-0.5 sm:py-1 italic shadow text-2xl sm:text-4xl lg:text-5xl">
                  Daily
                </span>
                <span className="text-black text-2xl sm:text-4xl lg:text-5xl font-black">Energy</span>
              </span>

              <span className="text-black block text-2xl sm:text-4xl lg:text-5xl font-black">
                & Activeness
              </span>
            </h2>
          </div>

        </div>
      </div>
    </section>
  );
};
