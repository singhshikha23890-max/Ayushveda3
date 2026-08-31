    <!-- Floating Scroll To Top Button -->
    <button onclick="scrollToTop()" class="fixed bottom-5 right-5 z-50 bg-[#0070df] text-white p-3 rounded-lg shadow-xl hover:bg-blue-700 transition-all" title="Scroll to Top">
      <i data-lucide="arrow-up" class="w-5 h-5"></i>
    </button>

    <!-- Mobile Sticky Order Bar -->
    <div class="fixed bottom-0 inset-x-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-white/10 p-3 sm:hidden shadow-2xl flex items-center justify-between">
      <div>
        <span class="text-[10px] text-amber-400 font-bold uppercase block">Horse Fire Tablets</span>
        <span class="text-xs font-black text-white">60 Tablets Pack (COD)</span>
      </div>
      <button onclick="scrollToOrderForm()" class="bg-[#cc0000] text-white font-black text-xs px-5 py-2.5 rounded-full shadow flex items-center gap-1.5">
        <span>अभी ऑर्डर करें</span>
        <i data-lucide="zap" class="w-3.5 h-3.5 fill-white"></i>
      </button>
    </div>

    <!-- Footer -->
    <footer class="bg-slate-950 text-slate-500 text-center py-8 text-xs border-t border-white/5 pb-20 sm:pb-8">
      <div class="max-w-4xl mx-auto px-4 space-y-2">
        <p>© <?php echo date('Y'); ?> Horse Fire Official Store. All rights reserved.</p>
        <p class="text-[11px] text-slate-600">
          Disclaimer: This product is an Ayurvedic dietary supplement. Consult a doctor for specific medical advice.
        </p>
      </div>
    </footer>

    <!-- Firebase SDK Compat / Modular CDN -->
    <script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-auth-compat.js"></script>

    <!-- Client-Side App JS -->
    <script src="/assets/js/app.js"></script>
    <script src="/assets/js/firebase-otp.js"></script>

    <script>
      // Initialize Lucide Icons
      if (window.lucide) {
        lucide.createIcons();
      }
    </script>
</body>
</html>
