import React from 'react';

export const BenefitsSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-12 sm:py-16 relative overflow-hidden border-b border-slate-900 w-full max-w-full">
      
      {/* Background Gym Image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1600&q=80"
          alt="Gym Workout"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-full">
        <div className="grid md:grid-cols-12 gap-6 sm:gap-8 items-center w-full max-w-full">
          
          {/* BENEFITS Heading */}
          <div className="md:col-span-3 flex justify-center md:justify-start overflow-hidden">
            <h2 className="font-serif font-black text-4xl sm:text-6xl md:text-7xl tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 uppercase rotate-0 md:-rotate-90 select-none">
              BENEFITS
            </h2>
          </div>

          {/* 3 Dark Gym Cards on Right */}
          <div className="md:col-span-9 grid sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-full">
            
            {/* Card 1 */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900/90 border border-white/10 p-6 sm:p-8 h-64 sm:h-80 flex flex-col justify-end shadow-2xl group hover:border-red-500/50 transition-all">
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80"
                  alt="Daily Strength"
                  className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative z-10">
                <h3 className="font-extrabold text-2xl sm:text-4xl text-white leading-tight">
                  Supports <br /> Daily <br /> Strength
                </h3>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900/90 border border-white/10 p-6 sm:p-8 h-64 sm:h-80 flex flex-col justify-end shadow-2xl group hover:border-red-500/50 transition-all">
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80"
                  alt="Daily Energy"
                  className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative z-10">
                <h3 className="font-extrabold text-2xl sm:text-4xl text-white leading-tight">
                  Helps to <br /> promote <br /> daily <br /> energy
                </h3>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900/90 border border-white/10 p-6 sm:p-8 h-64 sm:h-80 flex flex-col justify-end shadow-2xl group hover:border-red-500/50 transition-all">
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80"
                  alt="Male Wellness"
                  className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative z-10">
                <h3 className="font-extrabold text-2xl sm:text-4xl text-white leading-tight">
                  Encourage <br /> overall <br /> male <br /> wellness
                </h3>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
