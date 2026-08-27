import React from 'react';

export const DailyRoutine: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          
          {/* Left Arched Couple Frame */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-72 sm:w-80">
              <img
                src="/daily_routine_couple.jpg"
                alt="Horse Fire Daily Routine Couple"
                className="w-full h-auto object-contain rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Heading & Copy */}
          <div className="md:col-span-7 space-y-4 text-center md:text-left">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Experience The <br />
              <span className="bg-[#cc0000] text-white px-3 py-1 italic inline-block my-1 shadow">
                Natural
              </span>{' '}
              Benefits <br />
              as Part of Your <br />
              Daily Routine
            </h2>
          </div>

        </div>
      </div>
    </section>
  );
};
