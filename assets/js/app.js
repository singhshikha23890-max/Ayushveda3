// Global Interactive App JavaScript

// 1. Smooth Scroll Helpers
function scrollToOrderForm() {
  const el = document.getElementById("order-form-section");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// 2. Hero Banner Slider Logic
let currentSlideIdx = 0;
const totalSlides = 5;
let sliderTimer = null;

function setSlide(index) {
  currentSlideIdx = (index + totalSlides) % totalSlides;
  const track = document.getElementById("slider-track");
  if (track) {
    track.style.transform = `translateX(-${currentSlideIdx * 100}%)`;
  }
  
  const dots = document.querySelectorAll(".slider-dot");
  dots.forEach((dot, idx) => {
    if (idx === currentSlideIdx) {
      dot.className = "slider-dot h-2 sm:h-2.5 rounded-full transition-all duration-300 w-6 sm:w-8 bg-red-600";
    } else {
      dot.className = "slider-dot h-2 sm:h-2.5 rounded-full transition-all duration-300 w-2 sm:w-2.5 bg-white/40 hover:bg-white";
    }
  });
}

function startSliderAutoPlay() {
  stopSliderAutoPlay();
  sliderTimer = setInterval(() => {
    setSlide(currentSlideIdx + 1);
  }, 4000);
}

function stopSliderAutoPlay() {
  if (sliderTimer) clearInterval(sliderTimer);
}

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("hero-slider");
  if (slider) {
    slider.addEventListener("mouseenter", stopSliderAutoPlay);
    slider.addEventListener("mouseleave", startSliderAutoPlay);
  }
  const prevBtn = document.getElementById("slider-prev");
  const nextBtn = document.getElementById("slider-next");
  if (prevBtn) prevBtn.addEventListener("click", (e) => { e.stopPropagation(); setSlide(currentSlideIdx - 1); });
  if (nextBtn) nextBtn.addEventListener("click", (e) => { e.stopPropagation(); setSlide(currentSlideIdx + 1); });
  
  startSliderAutoPlay();
});

// 3. Product Details Gallery Thumbnail Switcher
function setProductGalleryImage(index, url, tag) {
  const mainImg = document.getElementById("main-product-img");
  const mainTag = document.getElementById("main-product-tag");
  if (mainImg) mainImg.src = url;
  if (mainTag) mainTag.innerText = tag;

  const thumbs = document.querySelectorAll(".gallery-thumb-btn");
  thumbs.forEach((thumb, idx) => {
    if (idx === index) {
      thumb.className = "gallery-thumb-btn w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl overflow-hidden border-2 transition-all shrink-0 bg-slate-100 p-0.5 sm:p-1 border-red-600 ring-2 ring-red-600/30 scale-105 shadow-md";
    } else {
      thumb.className = "gallery-thumb-btn w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl overflow-hidden border-2 transition-all shrink-0 bg-slate-100 p-0.5 sm:p-1 border-slate-200 opacity-70 hover:opacity-100";
    }
  });
}

// 4. Watch & Buy Video Reels Control
function toggleReelVideo(id) {
  const video = document.getElementById(`reel-video-${id}`);
  const playBtn = document.getElementById(`reel-play-btn-${id}`);
  if (!video) return;

  if (video.paused) {
    video.muted = false;
    video.play().catch(() => {});
    if (playBtn) playBtn.classList.add("opacity-0");
  } else {
    video.pause();
    if (playBtn) playBtn.classList.remove("opacity-0");
  }
}

function toggleReelMute(e, id) {
  e.stopPropagation();
  const video = document.getElementById(`reel-video-${id}`);
  const muteIcon = document.getElementById(`reel-mute-icon-${id}`);
  if (!video) return;

  video.muted = !video.muted;
  if (muteIcon) {
    if (video.muted) {
      muteIcon.setAttribute("data-lucide", "volume-x");
      muteIcon.className = "w-4 h-4 text-slate-300";
    } else {
      muteIcon.setAttribute("data-lucide", "volume-2");
      muteIcon.className = "w-4 h-4 text-amber-400";
    }
    if (window.lucide) lucide.createIcons();
  }
}

// 5. FAQ Accordion Toggle
function toggleFaq(index) {
  const answer = document.getElementById(`faq-answer-${index}`);
  const icon = document.getElementById(`faq-icon-${index}`);
  if (!answer) return;

  const isHidden = answer.classList.contains("hidden");
  
  // Close all answers
  document.querySelectorAll("[id^=faq-answer-]").forEach((el) => el.classList.add("hidden"));
  document.querySelectorAll("[id^=faq-icon-]").forEach((el) => el.classList.remove("rotate-180", "text-emerald-700"));

  if (isHidden) {
    answer.classList.remove("hidden");
    if (icon) icon.classList.add("rotate-180", "text-emerald-700");
  }
}

// 6. Review Submission Modal & Dynamic Card Creation
function openReviewModal() {
  const modal = document.getElementById("review-modal");
  if (modal) modal.classList.remove("hidden");
}

function closeReviewModal() {
  const modal = document.getElementById("review-modal");
  if (modal) modal.classList.add("hidden");
}

function handleAddReviewSubmit(e) {
  e.preventDefault();
  const author = document.getElementById("new-review-author").value;
  const rating = parseInt(document.getElementById("new-review-rating").value) || 5;
  const comment = document.getElementById("new-review-comment").value;

  if (!author || !comment) return;

  const grid = document.getElementById("reviews-grid");
  if (grid) {
    const card = document.createElement("div");
    card.className = "bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3 relative";
    card.innerHTML = `
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="w-9 h-9 rounded-full bg-slate-900 text-white font-bold text-sm flex items-center justify-center uppercase">
            ${author.charAt(0)}
          </div>
          <div>
            <h4 class="font-bold text-sm text-slate-900 flex items-center gap-1.5">
              <span>${author}</span>
              <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600 fill-emerald-100"></i>
            </h4>
            <span class="text-[10px] text-slate-400">Just now</span>
          </div>
        </div>
        <div class="flex text-amber-500 text-xs">${"★".repeat(rating)}</div>
      </div>
      <p class="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">"${comment}"</p>
    `;
    grid.prepend(card);
    if (window.lucide) lucide.createIcons();
  }

  closeReviewModal();
  document.getElementById("new-review-author").value = "";
  document.getElementById("new-review-comment").value = "";
}
