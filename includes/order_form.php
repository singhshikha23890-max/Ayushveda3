<section id="order-form-section" class="py-16 bg-[#f8f9fa] border-b border-slate-200 scroll-mt-6">
  <div class="max-w-xl mx-auto px-4 sm:px-6">
    
    <!-- Invisible Recaptcha Container for Firebase -->
    <div id="recaptcha-container"></div>

    <div class="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl relative">
      
      <!-- Header -->
      <div class="text-center mb-8">
        <div id="order-header-icon" class="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center mx-auto mb-3">
          <i data-lucide="shopping-bag" class="w-6 h-6"></i>
        </div>
        <h2 id="order-form-title" class="font-serif text-2xl sm:text-3xl font-extrabold text-slate-900">
          कैश ऑन डिलीवरी ऑर्डर फॉर्म
        </h2>
        <p id="order-form-subtitle" class="text-xs text-slate-500 mt-1">
          नीचे दी गई जानकारी भरें और अपना ऑर्डर दर्ज करें
        </p>
      </div>

      <!-- Step 1: Order Form -->
      <form id="cod-order-form" onsubmit="handleSendOrderSubmit(event)" class="space-y-4">
        
        <!-- Name -->
        <div>
          <label class="block text-xs font-bold text-slate-900 mb-1">
            पूरा नाम (Full Name)
          </label>
          <input type="text" id="order-name" required placeholder="अपना पूरा नाम दर्ज करें" class="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-600 bg-white">
        </div>

        <!-- Number with +91 Country Code -->
        <div>
          <label class="block text-xs font-bold text-slate-900 mb-1">
            मोबाइल नंबर (Phone Number)
          </label>
          <div class="flex items-center gap-2">
            <div class="flex items-center gap-1.5 px-3 py-3 rounded-xl border border-slate-300 bg-slate-100 text-slate-800 text-sm font-bold shrink-0 select-none shadow-sm">
              <span class="text-base">🇮🇳</span>
              <span>+91</span>
            </div>
            <input type="tel" id="order-phone" required maxlength="10" placeholder="10 अंकों का नंबर दर्ज करें" oninput="this.value = this.value.replace(/\D/g, '')" class="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-600 bg-white">
          </div>
        </div>

        <!-- Age -->
        <div>
          <label class="block text-xs font-bold text-slate-900 mb-1">
            उम्र (Age)
          </label>
          <input type="number" id="order-age" required min="18" max="99" placeholder="अपनी उम्र दर्ज करें" class="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-600 bg-white">
        </div>

        <!-- Address -->
        <div>
          <label class="block text-xs font-bold text-slate-900 mb-1">
            पूरा पता (Address)
          </label>
          <textarea id="order-address" rows="3" required placeholder="मकान नंबर, गली/गाँव, शहर, जिला, राज्य" class="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-600 bg-white"></textarea>
        </div>

        <!-- Pincode -->
        <div>
          <label class="block text-xs font-bold text-slate-900 mb-1">
            पिन कोड (PIN Code)
          </label>
          <input type="text" id="order-pincode" required maxlength="6" placeholder="6 अंकों का PIN code" class="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-600 bg-white">
        </div>

        <p id="order-send-error" class="text-xs font-bold text-red-600 text-center pt-1 hidden"></p>

        <!-- Red Send Button -->
        <div class="pt-4">
          <button type="submit" id="order-submit-btn" class="w-full bg-[#cc0000] hover:bg-red-700 disabled:opacity-60 text-white font-black text-lg py-4 rounded-2xl shadow-xl transition-all uppercase tracking-wider flex items-center justify-center gap-2">
            <span>SEND ORDER</span>
          </button>
        </div>

      </form>

      <!-- Step 2: OTP Verification Form (Hidden by default) -->
      <form id="cod-otp-form" onsubmit="handleVerifyOtpSubmit(event)" class="space-y-5 hidden">
        <div>
          <label class="block text-xs font-bold text-slate-900 mb-1.5 text-center">
            6 अंकों का SMS OTP दर्ज करें (Enter 6-Digit SMS OTP)
          </label>
          <input type="text" id="otp-input-field" required maxlength="6" placeholder="••••••" oninput="this.value = this.value.replace(/\D/g, '')" class="w-full px-4 py-3.5 rounded-2xl border-2 border-slate-300 text-center font-bold text-2xl tracking-[0.4em] text-slate-900 placeholder-slate-300 focus:outline-none focus:border-red-600 bg-slate-50">
          <p id="otp-verify-error" class="text-xs font-bold text-red-600 text-center mt-2 hidden"></p>
        </div>

        <div class="space-y-3 pt-2">
          <button type="submit" id="otp-verify-btn" class="w-full bg-[#cc0000] hover:bg-red-700 disabled:opacity-60 text-white font-black text-base py-4 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2">
            <span>वेरीफाई और ऑर्डर कन्फर्म करें (Verify & Confirm)</span>
          </button>

          <button type="button" onclick="handleEditFormStep()" class="w-full flex items-center justify-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900 py-2">
            <i data-lucide="arrow-left" class="w-4 h-4"></i>
            <span>फॉर्म वापस बदलें (Edit Form / Phone)</span>
          </button>
        </div>
      </form>

      <!-- Step 3: Success Confirmation Screen (Hidden by default) -->
      <div id="cod-success-screen" class="text-center py-10 space-y-4 hidden">
        <div class="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto shadow">
          <i data-lucide="check-circle-2" class="w-10 h-10"></i>
        </div>
        <h3 class="font-serif text-2xl font-bold text-slate-900">
          ऑर्डर सफलतापूर्वक दर्ज हो गया!
        </h3>
        <div class="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs text-slate-600 space-y-1 text-left max-w-sm mx-auto">
          <p><strong>नाम:</strong> <span id="summary-name"></span></p>
          <p><strong>नंबर:</strong> +91 <span id="summary-phone"></span> <span class="text-emerald-600 font-bold ml-1">✓ Real SMS OTP Verified</span></p>
          <p><strong>पता:</strong> <span id="summary-address"></span>, <span id="summary-pincode"></span></p>
        </div>
        <p class="text-xs text-slate-600">
          हमारी टीम जल्द ही आपकी डिलीवरी की पुष्टि के लिए संपर्क करेगी।
        </p>
        <button onclick="handleResetOrderForm()" class="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-6 py-2.5 rounded-full">
          नया ऑर्डर दर्ज करें
        </button>
      </div>

    </div>

  </div>
</section>
