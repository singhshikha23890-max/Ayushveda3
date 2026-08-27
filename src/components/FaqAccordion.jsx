import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'क्या डिलीवरी के समय भुगतान (COD) उपलब्ध है?',
    a: 'हां, हम पूरे भारत में कैश ऑन डिलीवरी (Cash on Delivery) की सुविधा प्रदान करते हैं। आप पार्सल प्राप्त करते समय ही भुगतान कर सकते हैं।',
  },
  {
    q: 'क्या यह 100% आयुर्वेदिक और सुरक्षित है?',
    a: 'हां, हॉर्स फायर टैबलेट्स 100% प्राकृतिक आयुर्वेदिक जड़ी-बूटियों (जैसे शुद्ध शिलाजीत, अश्वगंधा, गोखरू, सफेद मुसली) से निर्मित है। इसका कोई दुष्प्रभाव (Side Effect) नहीं है।',
  },
  {
    q: 'डिलीवरी में कितना समय लगता है?',
    a: 'ऑर्डर दर्ज होने के बाद सामान्यतः 3 से 5 दिनों में डिलीवरी आपके पते पर पहुँचा दी जाती है।',
  },
  {
    q: 'क्या पार्सल की पैकिंग गुप्त (Private/Discreet) होती है?',
    a: 'हां, आपकी गोपनीयता का पूरा ध्यान रखा जाता है। पार्सल 100% सीक्रेट और सीलबंद बॉक्स में भेजा जाता है, जिस पर उत्पाद का नाम नहीं लिखा होता।',
  },
  {
    q: 'हॉर्स फायर टैबलेट का सेवन कैसे करें?',
    a: 'प्रतिदिन 1 टैबलेट सुबह और 1 टैबलेट रात को भोजन के बाद गुनगुने दूध या पानी के साथ लें। सर्वोत्तम परिणाम के लिए 1 से 3 महीने का कोर्स पूरा करें।',
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
