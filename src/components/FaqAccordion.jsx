import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'à¤•à¥à¤¯à¤¾ à¤¡à¤¿à¤²à¥€à¤µà¤°à¥€ à¤•à¥‡ à¤¸à¤®à¤¯ à¤­à¥à¤—à¤¤à¤¾à¤¨ (COD) à¤‰à¤ªà¤²à¤¬à¥à¤§ à¤¹à¥ˆ?',
    a: 'à¤¹à¤¾à¤, à¤¹à¤® à¤ªà¥‚à¤°à¥‡ à¤­à¤¾à¤°à¤¤ à¤®à¥‡à¤‚ à¤•à¥ˆà¤¶ à¤‘à¤¨ à¤¡à¤¿à¤²à¥€à¤µà¤°à¥€ (Cash on Delivery) à¤¸à¥à¤µà¤¿à¤§à¤¾ à¤ªà¥à¤°à¤¦à¤¾à¤¨ à¤•à¤°à¤¤à¥‡ à¤¹à¥ˆà¤‚à¥¤ à¤†à¤ª à¤ªà¤¾à¤°à¥à¤¸à¤² à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤•à¤°à¤¤à¥‡ à¤¸à¤®à¤¯ à¤¹à¥€ à¤­à¥à¤—à¤¤à¤¾à¤¨ à¤•à¤° à¤¸à¤•à¤¤à¥‡ à¤¹à¥ˆà¤‚à¥¤',
  },
];

export const FaqAccordion = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-16 bg-[#eef7f2] border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-3">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900">
            अक्सर पूछे जाने वाले सवाल (FAQs)
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left font-bold text-sm sm:text-base text-slate-900 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-emerald-700' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
