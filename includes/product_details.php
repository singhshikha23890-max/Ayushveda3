<?php
$galleryImages = [
    ["url" => "/kajal_raghwani.jpg", "alt" => "Kajal Raghwani holding Horse Fire Bottle", "tag" => "Kajal Raghwani"],
    ["url" => "/bottle_artwork.png", "alt" => "Horse Fire Tablets Bottle Artwork", "tag" => "Horse Fire Tablets"],
    ["url" => "/banners/banner1.jpg", "alt" => "Horse Fire Brand Ambassador", "tag" => "Official Brand Ambassador"],
    ["url" => "/banners/banner2.jpg", "alt" => "Ayurvedic Doctor Endorsement", "tag" => "Dr. का भरोसा"],
    ["url" => "/banners/banner3.jpg", "alt" => "Natural Power Maximum Performance", "tag" => "Natural Power"],
    ["url" => "/banners/banner4.png", "alt" => "1 Month Course 60 Capsules", "tag" => "60 Capsules Course"]
];
?>
<section class="py-8 sm:py-12 bg-white text-slate-900 border-b border-slate-200 w-full max-w-full">
  <div class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full max-w-full">
    <div class="grid lg:grid-cols-12 gap-6 sm:gap-10 items-start w-full max-w-full">
      
      <!-- Left Column: STICKY Product Image Gallery -->
      <div class="lg:col-span-6 lg:sticky lg:top-6 lg:self-start space-y-3 sm:space-y-4 w-full max-w-full z-10">
        
        <!-- Main Showcase Frame -->
        <div class="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-50 border border-slate-200 shadow-md w-full max-w-full">
          
          <!-- Top Live Stats Badges -->
          <div class="absolute top-2 sm:top-4 left-2 sm:left-4 z-10 flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span class="bg-red-600 text-white font-bold text-[10px] sm:text-xs px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full shadow flex items-center gap-1">
              <span class="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-white animate-pulse"></span>
              2,523 Live Visitors
            </span>
            <span class="bg-emerald-800 text-white font-bold text-[10px] sm:text-xs px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full shadow">
              385 Sold in last 2 hours
            </span>
          </div>

          <!-- Main Image -->
          <div class="h-[320px] sm:h-[450px] lg:h-[480px] w-full flex items-center justify-center p-2 bg-white">
            <img id="main-product-img" src="<?php echo $galleryImages[0]['url']; ?>" alt="<?php echo $galleryImages[0]['alt']; ?>" class="max-h-full max-w-full object-contain rounded-xl sm:rounded-2xl transition-transform duration-300">
          </div>

          <!-- Bottom Tag -->
          <div class="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 z-10">
            <span id="main-product-tag" class="bg-red-700/95 text-white font-serif font-bold text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-lg backdrop-blur-sm border border-red-400/30">
              <?php echo $galleryImages[0]['tag']; ?>
            </span>
          </div>

        </div>

        <!-- Thumbnails Row -->
        <div class="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-none w-full max-w-full">
          <?php foreach ($galleryImages as $idx => $img): ?>
            <button onclick="setProductGalleryImage(<?php echo $idx; ?>, '<?php echo $img['url']; ?>', '<?php echo addslashes($img['tag']); ?>')" class="gallery-thumb-btn w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl overflow-hidden border-2 transition-all shrink-0 bg-slate-100 p-0.5 sm:p-1 <?php echo $idx === 0 ? 'border-red-600 ring-2 ring-red-600/30 scale-105 shadow-md' : 'border-slate-200 opacity-70 hover:opacity-100'; ?>">
              <img src="<?php echo $img['url']; ?>" alt="<?php echo $img['alt']; ?>" class="w-full h-full object-cover rounded-lg sm:rounded-xl">
            </button>
          <?php endforeach; ?>
        </div>

      </div>

      <!-- Right Column: Independent Scrolling Content -->
      <div class="lg:col-span-6 space-y-5 sm:space-y-6 w-full max-w-full">
        
        <div>
          <h1 class="font-serif text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Horse Fire Tablets
          </h1>
          <p class="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
            Promotes daily energy, stamina and overall wellness — crafted with traditional Ayurvedic herbs.
          </p>

          <!-- Star Rating -->
          <div class="flex items-center gap-2 mt-2.5">
            <div class="flex text-amber-500 text-sm">
              ★★★★★
            </div>
            <span class="text-xs font-bold text-slate-800">4.6 (2,180 reviews)</span>
          </div>
        </div>

        <!-- Best Price Banner -->
        <div class="bg-[#1c140d] text-white p-3.5 sm:p-4 rounded-2xl border border-amber-950 flex items-center justify-between shadow-md">
          <div class="flex items-center gap-2.5 sm:gap-3">
            <span class="bg-red-700 text-white text-[9px] sm:text-[10px] font-black uppercase px-2 sm:px-2.5 py-1 rounded">
              BEST PRICE
            </span>
            <div>
              <h4 class="font-bold text-xs sm:text-sm text-white">Just for online payments!</h4>
              <p class="text-[11px] sm:text-xs text-amber-200/80">Pay online and get it for just ₹1,349</p>
            </div>
          </div>
        </div>

        <!-- 60 Tablets Pack Selection Box -->
        <div class="p-5 sm:p-6 rounded-2xl bg-white border-2 border-red-600 relative shadow-sm text-center">
          <span class="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] sm:text-[11px] font-bold px-3 sm:px-4 py-0.5 rounded-full uppercase whitespace-nowrap">
            60 Tablets
          </span>

          <div class="flex items-baseline justify-center gap-2 sm:gap-3 mt-1 sm:mt-2">
            <span class="font-extrabold text-2xl sm:text-3xl text-slate-900">₹1,499</span>
            <span class="text-xs sm:text-sm text-slate-400 line-through font-semibold">₹3,000</span>
          </div>
          <p class="text-[10px] sm:text-[11px] text-slate-500 mt-0.5">MRP incl. of all taxes</p>

          <div class="mt-2.5 sm:mt-3 inline-block bg-red-700 text-white font-bold text-[10px] sm:text-xs px-3 py-1 rounded-full uppercase tracking-wider">
            Save ₹1,501
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <button onclick="scrollToOrderForm()" class="bg-[#c02425] hover:bg-red-700 text-white font-black text-sm sm:text-base py-3.5 sm:py-4 rounded-2xl shadow-lg shadow-red-700/30 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5">
            <i data-lucide="shopping-cart" class="w-4 sm:w-5 h-4 sm:h-5"></i>
            <span>अभी ऑर्डर करें</span>
          </button>

          <button onclick="scrollToOrderForm()" class="bg-white hover:bg-slate-50 border-2 border-slate-900 text-slate-900 font-bold text-sm sm:text-base py-3.5 sm:py-4 rounded-2xl shadow-sm transition-all">
            कार्ट में जोड़ें
          </button>
        </div>

        <p class="text-[10px] sm:text-[11px] text-center text-slate-500 font-medium">
          Pay via <strong class="text-slate-800">GPay, PhonePe, Paytm, UPI</strong> and get Instant discount
        </p>

        <!-- What's Different? -->
        <div class="space-y-3 pt-2">
          <h3 class="font-serif font-extrabold text-base sm:text-lg text-slate-900">What's Different?</h3>

          <div class="space-y-2">
            <div class="flex items-center gap-3 bg-[#1d5939] text-white p-3 sm:p-3.5 rounded-full text-xs sm:text-sm font-semibold shadow-sm">
              <i data-lucide="zap" class="w-4 h-4 text-amber-300 shrink-0"></i>
              <span>Supports Daily Wellness and Energy Balance</span>
            </div>

            <div class="flex items-center gap-3 bg-[#1d5939] text-white p-3 sm:p-3.5 rounded-full text-xs sm:text-sm font-semibold shadow-sm">
              <i data-lucide="refresh-cw" class="w-4 h-4 text-amber-300 shrink-0"></i>
              <span>Supports Relaxation and Calmness</span>
            </div>

            <div class="flex items-center gap-3 bg-[#1d5939] text-white p-3 sm:p-3.5 rounded-full text-xs sm:text-sm font-semibold shadow-sm">
              <i data-lucide="award" class="w-4 h-4 text-amber-300 shrink-0"></i>
              <span>Supports Natural Energy & Strength</span>
            </div>

            <div class="flex items-center gap-3 bg-[#1d5939] text-white p-3 sm:p-3.5 rounded-full text-xs sm:text-sm font-semibold shadow-sm">
              <i data-lucide="check-circle-2" class="w-4 h-4 text-amber-300 shrink-0"></i>
              <span>Helps Maintain Energy and Overall Wellness</span>
            </div>
          </div>
        </div>

        <!-- Dark Maroon Trust & Compliance Box -->
        <div class="bg-[#240b0b] text-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-amber-950/50 space-y-5 sm:space-y-6">
          
          <div class="grid grid-cols-4 gap-1.5 sm:gap-2 text-center border-b border-white/10 pb-4 sm:pb-6">
            <div>
              <i data-lucide="refresh-cw" class="w-4 sm:w-5 h-4 sm:h-5 text-amber-400 mx-auto mb-1"></i>
              <span class="text-[9px] sm:text-[10px] font-bold block text-amber-200 leading-tight">Easy Returns</span>
            </div>
            <div>
              <i data-lucide="credit-card" class="w-4 sm:w-5 h-4 sm:h-5 text-amber-400 mx-auto mb-1"></i>
              <span class="text-[9px] sm:text-[10px] font-bold block text-amber-200 leading-tight">Secure Payments</span>
            </div>
            <div>
              <i data-lucide="truck" class="w-4 sm:w-5 h-4 sm:h-5 text-amber-400 mx-auto mb-1"></i>
              <span class="text-[9px] sm:text-[10px] font-bold block text-amber-200 leading-tight">Free Shipping</span>
            </div>
            <div>
              <i data-lucide="shield-check" class="w-4 sm:w-5 h-4 sm:h-5 text-amber-400 mx-auto mb-1"></i>
              <span class="text-[9px] sm:text-[10px] font-bold block text-amber-200 leading-tight">COD Available</span>
            </div>
          </div>

          <!-- White Inner Certificates -->
          <div class="grid grid-cols-2 gap-3 sm:gap-4">
            <div class="bg-white text-slate-900 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl text-center shadow">
              <span class="font-serif font-black text-xs sm:text-sm text-red-900 block">FSSAI</span>
              <span class="text-[9px] sm:text-[10px] font-semibold text-slate-600 block">Lic. No. 10725994000235</span>
            </div>

            <div class="bg-white text-slate-900 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl text-center shadow">
              <span class="font-serif font-black text-xs sm:text-sm text-red-900 block">ISO 9001:2015</span>
              <span class="text-[9px] sm:text-[10px] font-semibold text-slate-600 block">ISO Certified</span>
            </div>
          </div>

        </div>

        <!-- Circular Quality Badges -->
        <div class="grid grid-cols-4 gap-2 sm:gap-4 text-center pt-1">
          <div>
            <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-amber-600 flex items-center justify-center mx-auto text-amber-700 text-xs sm:text-base mb-1 bg-amber-50">
              🌱
            </div>
            <span class="text-[9px] sm:text-[10px] font-bold uppercase text-slate-700 block">AYUSH</span>
          </div>

          <div>
            <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-emerald-600 flex items-center justify-center mx-auto text-emerald-700 text-xs sm:text-base mb-1 bg-emerald-50">
              ✓
            </div>
            <span class="text-[9px] sm:text-[10px] font-bold uppercase text-slate-700 block">FDA Approved</span>
          </div>

          <div>
            <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-amber-600 flex items-center justify-center mx-auto text-amber-700 text-xs sm:text-base mb-1 bg-amber-50">
              ✦
            </div>
            <span class="text-[9px] sm:text-[10px] font-bold uppercase text-slate-700 block">GMP Quality</span>
          </div>

          <div>
            <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-emerald-600 flex items-center justify-center mx-auto text-emerald-700 text-xs sm:text-base mb-1 bg-emerald-50">
              🇮🇳
            </div>
            <span class="text-[9px] sm:text-[10px] font-bold uppercase text-slate-700 block">Made In India</span>
          </div>
        </div>

      </div>

    </div>
  </div>
</section>
