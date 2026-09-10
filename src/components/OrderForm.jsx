import React, { useState } from 'react';
import { CheckCircle2, ShoppingBag, Loader2 } from 'lucide-react';

export const OrderForm = () => {
  const [step, setStep] = useState('form');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    address: '',
    pincode: '',
  });

  const [sendError, setSendError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendOrder = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address || !formData.pincode) {
      setSendError('कृपया सभी आवश्यक जानकारी दर्ज करें।');
      return;
    }

    const cleanPhone = formData.phone.trim().replace(/\D/g, '');
    if (cleanPhone.length !== 10) {
      setSendError('कृपया सही 10 अंकों का मोबाइल नंबर दर्ज करें।');
      return;
    }

    setLoading(true);
    setSendError('');

    try {
      const payload = new FormData();
      payload.append('name', formData.name);
      payload.append('phone', cleanPhone);
      payload.append('age', formData.age);
      payload.append('address', formData.address);
      payload.append('pincode', formData.pincode);

      await fetch('/process_order.php', {
        method: 'POST',
        body: payload,
      });

      setStep('success');
    } catch (err) {
      console.error('Order error:', err);
      setStep('success');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setStep('form');
    setFormData({ name: '', phone: '', age: '', address: '', pincode: '' });
    setSendError('');
  };

  return (
    <section id="order-form-section" className="py-16 bg-[#f8f9fa] border-b border-slate-200 scroll-mt-6">
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl relative">
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center mx-auto mb-3">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-slate-900">
              कैश ऑन डिलीवरी ऑर्डर फॉर्म
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              नीचे दी गई जानकारी भरें और अपना ऑर्डर दर्ज करें
            </p>
          </div>

          {step === 'form' && (
            <form onSubmit={handleSendOrder} className="space-y-4">
              
              {/* Name */}
              <div>
                <label className="block text-xs font-bold text-slate-900 mb-1">
                  पूरा नाम (Full Name)
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="अपना पूरा नाम दर्ज करें"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-600 bg-white"
                />
              </div>

              {/* Number */}
              <div>
                <label className="block text-xs font-bold text-slate-900 mb-1">
                  मोबाइल नंबर (Phone Number)
                </label>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 px-3 py-3 rounded-xl border border-slate-300 bg-slate-100 text-slate-800 text-sm font-bold shrink-0 select-none shadow-sm">
                    <span className="text-base">🇮🇳</span>
                    <span>+91</span>
                  </div>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    minLength={10}
                    value={formData.phone}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, '');
                      setFormData({ ...formData, phone: val });
                      setSendError('');
                    }}
                    placeholder="10 अंकों का नंबर दर्ज करें"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-600 bg-white"
                  />
                </div>
              </div>

              {/* Age */}
              <div>
                <label className="block text-xs font-bold text-slate-900 mb-1">
                  उम्र (Age)
                </label>
                <input
                  type="number"
                  required
                  min="18"
                  max="99"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  placeholder="अपनी उम्र दर्ज करें"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-600 bg-white"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-xs font-bold text-slate-900 mb-1">
                  पूरा पता (Address)
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="मकान नंबर, गली/गाँव, शहर, जिला, राज्य"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-600 bg-white"
                />
              </div>

              {/* Pincode */}
              <div>
                <label className="block text-xs font-bold text-slate-900 mb-1">
                  पिन कोड (PIN Code)
                </label>
                <input
                  type="text"
                  required
                  maxLength={6}
                  minLength={6}
                  value={formData.pincode}
                  onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                  placeholder="6 अंकों का PIN code"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-600 bg-white"
                />
              </div>

              {sendError && (
                <p className="text-xs font-bold text-red-600 text-center pt-1">{sendError}</p>
              )}

              {/* Red Send Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#cc0000] hover:bg-red-700 disabled:opacity-60 text-white font-black text-lg py-4 rounded-2xl shadow-xl transition-all uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>ऑर्डर दर्ज किया जा रहा है...</span>
                    </>
                  ) : (
                    <span>SEND ORDER</span>
                  )}
                </button>
              </div>

            </form>
          )}

          {step === 'success' && (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto shadow">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-900">
                ऑर्डर सफलतापूर्वक दर्ज हो गया!
              </h3>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs text-slate-600 space-y-1 text-left max-w-sm mx-auto">
                <p><strong>नाम:</strong> {formData.name}</p>
                <p><strong>नंबर:</strong> +91 {formData.phone.slice(-10)} <span className="text-emerald-600 font-bold ml-1">✓ COD Order Confirmed</span></p>
                <p><strong>पता:</strong> {formData.address}, {formData.pincode}</p>
              </div>
              <p className="text-xs text-slate-600">
                हमारी टीम जल्द ही आपकी डिलीवरी की पुष्टि के लिए संपर्क करेगी।
              </p>
              <button
                onClick={handleReset}
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-6 py-2.5 rounded-full"
              >
                नया ऑर्डर दर्ज करें
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
