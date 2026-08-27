import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'Horse Fire Tablets क्या है और यह कैसे मदद करता है?',
    a: 'Horse Fire Tablets एक 100% आयुर्वेदिक फॉर्मूला है जो 17 जड़ी-बूटियों (अश्वगंधा, गोक्षुरा, कौंच बीज, सफेद मूसली) से तैयार किया गया है। यह दैनिक ऊर्जा, सहनशक्ति और शरीर की सक्रियता को बनाए रखने में सहायक है।',
  },
  {
    q: 'क्या इसका उपयोग दैनिक रूप से सुरक्षित है?',
    a: 'हाँ, यह उत्पाद आयुष मानकों, GMP एवं FSSAI लाइसेंस प्राप्त सुविधाओं के अंतर्गत निर्मित है। यह पूरी तरह से प्राकृतिक जड़ी-बूटियों से बना है और दैनिक सेवन के लिए सुरक्षित है।',
  },
  {
    q: 'इसको सेवन करने का सही तरीका क्या है?',
    a: 'दिन में 2 बार, भोजन के बाद 1-1 टैबलेट गुनगुने पानी या दूध के साथ लें। सर्वोत्तम परिणामों के लिए दूध के साथ लेना अनुशंसित है।',
  },
  {
    q: 'परिणाम दिखने में कितना समय लगता है?',
    a: 'दृश्यमान एवं ध्यान देने योग्य परिणामों के लिए कम से कम 3 से 4 महीने तक नियमित रूप से सेवन करने की सलाह दी जाती है।',
  },
  {
    q: 'क्या डिलीवरी के समय भुगतान (COD) उपलब्ध है?',
    a: 'हाँ, हम पूरे भारत में कैश ऑन डिलीवरी (Cash on Delivery) सुविधा प्रदान करते हैं। आप पार्सल प्राप्त करते समय ही भुगतान कर सकते हैं।',
  },
];

export const FaqAccordion: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
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
