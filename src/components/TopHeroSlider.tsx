import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const bannerSlides = [
  {
    id: 1,
    image: '/banners/banner1.jpg',
    alt: 'Horse Fire Capsules Brand Ambassador Banner',
  },
  {
    id: 2,
    image: '/banners/banner2.jpg',
    alt: 'Horse Fire Doctor Endorsement Banner',
  },
  {
    id: 3,
    image: '/banners/banner3.jpg',
    alt: 'Horse Fire Natural Power Flaming Horse Banner',
  },
  {
    id: 4,
    image: '/banners/banner4.png',
    alt: 'Horse Fire Rs 1499 Pack Offer Banner',
  },
  {
    id: 5,
    image: '/banners/banner5.jpg',
    alt: 'Horse Fire 60 Capsules 1 Month Course Banner',
  },
];

interface TopHeroSliderProps {
  onOrderClick: () => void;
}

export const TopHeroSlider: React.FC<TopHeroSliderProps> = ({ onOrderClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % bannerSlides.length);
  };

  return (
    <div 
      className="relative w-full max-w-full bg-black overflow-hidden select-none border-b border-slate-900 shadow-2xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Banner Slider Container */}
      <div 
        onClick={onOrderClick}
        className="cursor-pointer relative w-full max-w-full overflow-hidden"
      >
        <div 
          className="flex transition-transform duration-700 ease-in-out w-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {bannerSlides.map((slide) => (
            <div key={slide.id} className="w-full max-w-full shrink-0 flex justify-center bg-black">
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full max-w-full h-auto object-contain max-h-[220px] sm:max-h-[420px] md:max-h-[550px] bg-black"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Red Left Navigation Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-1.5 sm:left-4 top-1/2 -translate-y-1/2 z-20 text-red-600 hover:text-red-500 bg-black/60 hover:bg-black/80 p-1.5 sm:p-3 rounded-full border border-red-600/40 backdrop-blur-md shadow-lg transition-all"
        title="Previous Banner"
      >
        <ChevronLeft className="w-4 h-4 sm:w-8 sm:h-8 stroke-[3]" />
      </button>

      {/* Red Right Navigation Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-1.5 sm:right-4 top-1/2 -translate-y-1/2 z-20 text-red-600 hover:text-red-500 bg-black/60 hover:bg-black/80 p-1.5 sm:p-3 rounded-full border border-red-600/40 backdrop-blur-md shadow-lg transition-all"
        title="Next Banner"
      >
        <ChevronRight className="w-4 h-4 sm:w-8 sm:h-8 stroke-[3]" />
      </button>

      {/* Pagination Indicator Dots */}
      <div className="absolute bottom-1.5 sm:bottom-3 inset-x-0 z-20 flex justify-center gap-1.5 sm:gap-2">
        {bannerSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(idx);
            }}
            className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
              currentIndex === idx ? 'w-6 sm:w-8 bg-red-600' : 'w-2 sm:w-2.5 bg-white/40 hover:bg-white'
            }`}
            title={`Banner ${idx + 1}`}
          />
        ))}
      </div>

    </div>
  );
};
