import React, { useState } from 'react';
import { CheckCircle2, ShoppingBag, KeyRound, ArrowLeft, Loader2 } from 'lucide-react';
import { RecaptchaVerifier, signInWithPhoneNumber, ConfirmationResult } from 'firebase/auth';
import { auth } from '../firebase';

declare global {
  interface Window {
    recaptchaVerifier?: RecaptchaVerifier;
  }
}

export const OrderForm: React.FC = () => {
  const [step, setStep] = useState<'form' | 'otp' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    address: '',
    pincode: '',
  });

  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
  const [otpInput, setOtpInput] = useState('');
  const [otpError, setOtpError] = useState('');
  const [sendError, setSendError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) return;

    const cleanPhone = formData.phone.trim().replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setSendError('कृपया सही 10 अंकों का मोबाइल नंबर दर्ज करें।');
      return;
    }

    setLoading(true);
    setSendError('');
    setOtpError('');

    try {
      if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
          size: 'invisible',
        });
      }

      const formattedPhone = cleanPhone.startsWith('91') && cleanPhone.length === 12 ? `+${cleanPhone}` : `+91${cleanPhone.slice(-10)}`;
      const result = await signInWithPhoneNumber(auth, formattedPhone, window.recaptchaVerifier);
      setConfirmationResult(result);
      setStep('otp');
    } catch (err: any) {
      console.error("Firebase Phone Auth error:", err);
      if (window.recaptchaVerifier) {
        try {
          window.recaptchaVerifier.clear();
          window.recaptchaVerifier = undefined;
        } catch (e) {}
      }

      let errorMsg = 'SMS OTP भेजने में समस्या आई।';
      if (err?.code === 'auth/quota-exceeded') {
        errorMsg = 'Firebase Daily SMS Quota (10 SMS/day) पूरा हो गया है! Firebase Console में Test Phone Number जोड़ें या Billing ऑन करें।';
      } else if (err?.code === 'auth/invalid-app-credential') {
        errorMsg = 'Firebase App Credential त्रुटि (App Check / Domain verification failed).';
      } else if (err?.code === 'auth/too-many-requests') {
        errorMsg = 'इस मोबाइल नंबर पर अत्यधिक प्रयास किए गए हैं। कृपया थोड़ी देर बाद प्रयास करें।';
      } else if (err?.message) {
        errorMsg = `Firebase त्रुटि (${err.code || 'error'}): ${err.message}`;
      }

      setSendError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otpInput || otpInput.trim().length < 6) {
      setOtpError('कृपया आपके मोबाइल पर प्राप्त 6 अंकों का SMS OTP दर्ज करें।');
      return;
    }

    setLoading(true);
    setOtpError('');

    try {
      if (confirmationResult) {
        await confirmationResult.confirm(otpInput.trim());
        setStep('success');
      } else {
        setOtpError('सत्यापन सत्र समाप्त हो गया है। कृपया पुनः प्रयास करें।');
      }
    } catch (err: any) {
      console.error("OTP verification error:", err);
      setOtpError('गलत OTP! कृपया आपके मोबाइल पर प्राप्त 6 अंकों का SMS OTP दर्ज करें।');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setStep('form');
    setFormData({ name: '', phone: '', age: '', address: '', pincode: '' });
    setOtpInput('');
    setOtpError('');
    setSendError('');
    setConfirmationResult(null);
  };

  return (
    <section id="order-form-section" className="py-16 bg-[#f8f9fa] border-b border-slate-200 scroll-mt-6">
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        
        {/* Invisible Recaptcha Container for Firebase */}
        <div id="recaptcha-container"></div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl relative">
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center mx-auto mb-3">
              {step === 'otp' ? <KeyRound className="w-6 h-6" /> : <ShoppingBag className="w-6 h-6" />}
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-slate-900">
              {step === 'otp' ? 'OTP सत्यापन (OTP Verification)' : 'कैश ऑन डिलीवरी ऑर्डर फॉर्म'}
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              {step === 'otp'
                ? `आपके मोबाइल नंबर +91 ${formData.phone.slice(-10)} पर 6-अंकों का SMS OTP भेजा गया है`
                : 'नीचे दी गई जानकारी भरें और अपना ऑर्डर दर्ज करें'}
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
                      <span>OTP भेजा जा रहा है...</span>
                    </>
                  ) : (
                    <span>SEND ORDER</span>
                  )}
                </button>
              </div>

            </form>
          )}

          {step === 'otp' && (
            <form onSubmit={handleVerifyOtp} className="space-y-5">
              
              {/* OTP Input */}
              <div>
                <label className="block text-xs font-bold text-slate-900 mb-1.5 text-center">
                  6 अंकों का SMS OTP दर्ज करें (Enter 6-Digit SMS OTP)
                </label>
                <input
                  type="text"
                  required
                  maxLength={6}
                  value={otpInput}
                  onChange={(e) => {
                    setOtpInput(e.target.value);
                    setOtpError('');
                  }}
                  placeholder="••••••"
                  className="w-full px-4 py-3.5 rounded-2xl border-2 border-slate-300 text-center font-bold text-2xl tracking-[0.4em] text-slate-900 placeholder-slate-300 focus:outline-none focus:border-red-600 bg-slate-50"
                />
                {otpError && (
                  <p className="text-xs font-bold text-red-600 text-center mt-2">{otpError}</p>
                )}
              </div>

              {/* Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#cc0000] hover:bg-red-700 disabled:opacity-60 text-white font-black text-base py-4 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>सत्यापित किया जा रहा है...</span>
                    </>
                  ) : (
                    <span>वेरीफाई और ऑर्डर कन्फर्म करें (Verify & Confirm)</span>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setStep('form')}
                  className="w-full flex items-center justify-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900 py-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>फॉर्म वापस बदलें (Edit Form / Phone)</span>
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
                <p><strong>नंबर:</strong> +91 {formData.phone.slice(-10)} <span className="text-emerald-600 font-bold ml-1">✓ Real SMS OTP Verified</span></p>
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
