<?php
$bannerSlides = [
    ["id" => 1, "image" => "/banners/banner1.jpg", "alt" => "Horse Fire Capsules Brand Ambassador Banner"],
    ["id" => 2, "image" => "/banners/banner2.jpg", "alt" => "Horse Fire Doctor Endorsement Banner"],
    ["id" => 3, "image" => "/banners/banner3.jpg", "alt" => "Horse Fire Natural Power Flaming Horse Banner"],
    ["id" => 4, "image" => "/banners/banner4.png", "alt" => "Horse Fire Rs 1499 Pack Offer Banner"],
    ["id" => 5, "image" => "/banners/banner5.jpg", "alt" => "Horse Fire 60 Capsules 1 Month Course Banner"]
];
?>
<div id="hero-slider" class="relative w-full max-w-full bg-black overflow-hidden select-none border-b border-slate-900 shadow-2xl">
  <!-- Banner Slider Container -->
  <div onclick="scrollToOrderForm()" class="cursor-pointer relative w-full max-w-full overflow-hidden">
    <div id="slider-track" class="flex transition-transform duration-700 ease-in-out w-full">
      <?php foreach ($bannerSlides as $slide): ?>
        <div class="w-full max-w-full shrink-0 flex justify-center bg-black">
          <img src="<?php echo $slide['image']; ?>" alt="<?php echo $slide['alt']; ?>" class="w-full max-w-full h-auto object-contain max-h-[220px] sm:max-h-[420px] md:max-h-[550px] bg-black">
        </div>
      <?php endforeach; ?>
    </div>
  </div>

  <!-- Red Left Navigation Arrow -->
  <button id="slider-prev" class="absolute left-1.5 sm:left-4 top-1/2 -translate-y-1/2 z-20 text-red-600 hover:text-red-500 bg-black/60 hover:bg-black/80 p-1.5 sm:p-3 rounded-full border border-red-600/40 backdrop-blur-md shadow-lg transition-all" title="Previous Banner">
    <i data-lucide="chevron-left" class="w-4 h-4 sm:w-8 sm:h-8 stroke-[3]"></i>
  </button>

  <!-- Red Right Navigation Arrow -->
  <button id="slider-next" class="absolute right-1.5 sm:right-4 top-1/2 -translate-y-1/2 z-20 text-red-600 hover:text-red-500 bg-black/60 hover:bg-black/80 p-1.5 sm:p-3 rounded-full border border-red-600/40 backdrop-blur-md shadow-lg transition-all" title="Next Banner">
    <i data-lucide="chevron-right" class="w-4 h-4 sm:w-8 sm:h-8 stroke-[3]"></i>
  </button>

  <!-- Pagination Indicator Dots -->
  <div class="absolute bottom-1.5 sm:bottom-3 inset-x-0 z-20 flex justify-center gap-1.5 sm:gap-2">
    <?php foreach ($bannerSlides as $idx => $slide): ?>
      <button onclick="setSlide(<?php echo $idx; ?>)" class="slider-dot h-2 sm:h-2.5 rounded-full transition-all duration-300 <?php echo $idx === 0 ? 'w-6 sm:w-8 bg-red-600' : 'w-2 sm:w-2.5 bg-white/40 hover:bg-white'; ?>" title="Banner <?php echo $idx + 1; ?>"></button>
    <?php endforeach; ?>
  </div>
</div>
