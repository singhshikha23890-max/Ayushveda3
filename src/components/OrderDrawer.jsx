import React, { useState } from 'react';
import { X, CheckCircle2, ShoppingBag, ShieldCheck, Truck, KeyRound, ArrowLeft, Loader2 } from 'lucide-react';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../firebase';

export const OrderDrawer = ({ isOpen, onClose }) => {
  const [step, setStep] = useState('form');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    address: '',
    pincode: '',
  });

  const [confirmationResult, setConfirmationResult] = useState(null);
  const [otpInput, setOtpInput] = useState('');
  const [otpError, setOtpError] = useState('');
  const [sendError, setSendError] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSendOrder = async (e) => {
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
        window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container-drawer', {
          size: 'invisible',
        });
      }

      const formattedPhone = cleanPhone.startsWith('91') && cleanPhone.length === 12 ? `+${cleanPhone}` : `+91${cleanPhone.slice(-10)}`;
      const result = await signInWithPhoneNumber(auth, formattedPhone, window.recaptchaVerifier);
      setConfirmationResult(result);
      setStep('otp');
    } catch (err) {
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
        errorMsg = `Firebase error (${err.code || 'error'}): ${err.message}`;
      }

      setSendError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
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
    } catch (err) {
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
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Invisible Recaptcha Container for Drawer */}
      <div id="recaptcha-container-drawer"></div>

      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div className="pointer-events-auto w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          
          {/* Drawer Header */}
          <div className="bg-slate-900 text-white p-5 flex items-center justify-between shadow">
            <div className="flex items-center gap-2">
              {step === 'otp' ? <KeyRound className="w-5 h-5 text-amber-400" /> : <ShoppingBag className="w-5 h-5 text-amber-400" />}
              <h3 className="font-serif text-lg font-bold text-white">
                {step === 'otp' ? 'OTP सत्यापन' : 'कैश ऑन डिलीवरी ऑर्डर फॉर्म'}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1 rounded-full hover:bg-slate-800 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Drawer Body - Scrollable Form */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            
            {/* Product Quick Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex items-center gap-4 shadow-sm">
              <img
                src="/kajal_raghwani.jpg"
                alt="Horse Fire Tablets"
                className="w-16 h-16 object-cover rounded-xl border border-slate-200"
              />
              <div>
                <h4 className="font-extrabold text-sm text-slate-900">Horse Fire Tablets</h4>
                <p className="text-xs text-slate-500">60 Tablets (1 Month Course)</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-bold text-red-600 text-base">₹1,499</span>
                  <span className="text-xs text-slate-400 line-through">₹3,000</span>
                </div>
              </div>
            </div>

            {step === 'form' && (
              <form onSubmit={handleSendOrder} className="space-y-4">
                <h4 className="font-bold text-sm text-slate-900 border-b border-slate-100 pb-2">
                  अपनी डिलीवरी जानकारी दर्ज करें:
                </h4>

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
                    placeholder="मकान नंबर, गली/गाँव, शहर, राज्य"
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

                {/* Submit Button */}
                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#cc0000] hover:bg-red-700 disabled:opacity-60 text-white font-black text-base py-4 rounded-2xl shadow-xl transition-all uppercase tracking-wider flex items-center justify-center gap-2"
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
              /* Success Confirmation */
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto shadow">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-slate-900">
                  à¤‘à¤°à¥à¤¡à¤° à¤¸à¤«à¤²à¤¤à¤¾à¤ªà¥‚à¤°à¥à¤µà¤• à¤¦à¤°à¥à¤œ à¤¹à¥‹ à¤—à¤¯à¤¾!
                </h3>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs text-slate-600 space-y-1 text-left max-w-sm mx-auto">
                  <p><strong>à¤¨à¤¾à¤®:</strong> {formData.name}</p>
                  <p><strong>à¤¨à¤‚à¤¬à¤°:</strong> +91 {formData.phone.slice(-10)} <span className="text-emerald-600 font-bold ml-1">âœ“ Real SMS OTP Verified</span></p>
                  <p><strong>à¤ªà¤¤à¤¾:</strong> {formData.address}, {formData.pincode}</p>
                </div>
                <p className="text-xs text-slate-600">
                  à¤¹à¤®à¤¾à¤°à¥€ à¤Ÿà¥€à¤® à¤œà¤²à¥à¤¦ à¤¹à¥€ à¤†à¤ªà¤•à¥€ à¤¡à¤¿à¤²à¥€à¤µà¤°à¥€ à¤•à¥€ à¤ªà¥à¤·à¥à¤Ÿà¤¿ à¤•à¥‡ à¤²à¤¿à¤ à¤¸à¤‚à¤ªà¤°à¥à¤• à¤•à¤°à¥‡à¤—à¥€à¥¤
                </p>
                <button
                  onClick={handleReset}
                  className="bg-slate-900 text-white font-bold text-xs px-6 py-2.5 rounded-full"
                >
                  à¤¨à¤¯à¤¾ à¤‘à¤°à¥à¤¡à¤° à¤¦à¤°à¥à¤œ à¤•à¤°à¥‡à¤‚
                </button>
              </div>
            )}

          </div>

          {/* Drawer Footer Trust Badges */}
          <div className="bg-slate-50 border-t border-slate-200 p-4 text-center text-xs text-slate-500 flex items-center justify-around">
            <span className="flex items-center gap-1 font-semibold">
              <Truck className="w-4 h-4 text-emerald-600" /> à¤«à¥à¤°à¥€ à¤¡à¤¿à¤²à¥€à¤µà¤°à¥€
            </span>
            <span className="flex items-center gap-1 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> 100% à¤¸à¥‡à¤« COD
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};
