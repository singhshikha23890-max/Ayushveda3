import { TopBar } from './components/TopBar';
import { TopHeroSlider } from './components/TopHeroSlider';
import { ProductDetails } from './components/ProductDetails';
import { WatchAndBuy } from './components/WatchAndBuy';
import { ProductDescription } from './components/ProductDescription';
import { KeyIngredients } from './components/KeyIngredients';
import { BenefitsSection } from './components/BenefitsSection';
import { CelebrityBanner } from './components/CelebrityBanner';
import { DailyRoutine } from './components/DailyRoutine';
import { EnergyActivenessBanner } from './components/EnergyActivenessBanner';
import { PosterBanner } from './components/PosterBanner';
import { HowToConsume } from './components/HowToConsume';
import { OrderForm } from './components/OrderForm';
import { FaqAccordion } from './components/FaqAccordion';
import { CustomerReviews } from './components/CustomerReviews';
import { ArrowUp, Zap } from 'lucide-react';

export function App() {
  const scrollToOrderForm = () => {
    const el = document.getElementById('order-form-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-red-600 selection:text-white">
      
      {/* 1. Top Red Promo Banner */}
      <TopBar />

      {/* 2. Top Interactive Hero Slider */}
      <TopHeroSlider onOrderClick={scrollToOrderForm} />

      {/* 3. Product Details with Sticky Left Gallery & Independent Right Content */}
      <ProductDetails onOrderClick={scrollToOrderForm} />

      {/* 4. Watch & Buy Video Reels */}
      <WatchAndBuy />

      {/* 5. Product Description Section */}
      <ProductDescription />

      {/* 6. Key Ingredients */}
      <KeyIngredients />

      {/* 7. Benefits Section */}
      <BenefitsSection />

      {/* 8. Celebrity Endorsement Banner */}
      <CelebrityBanner />

      {/* 9. Daily Routine Section */}
      <DailyRoutine />

      {/* 10. Supports Daily Energy & Activeness Runner Banner */}
      <EnergyActivenessBanner />

      {/* 11. Cash on Delivery Order Form */}
      <OrderForm />

      {/* 12. Poster Banner */}
      <PosterBanner />

      {/* 13. How To Consume (1-2-3 Hexagon Steps) */}
      <HowToConsume />

      {/* 14. Mint Green FAQs */}
      <FaqAccordion />

      {/* 15. Customer Reviews Widget */}
      <CustomerReviews />

      {/* Floating Scroll To Top Button (blue ^ icon) */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 z-50 bg-[#0070df] text-white p-3 rounded-lg shadow-xl hover:bg-blue-700 transition-all"
        title="Scroll to Top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* Mobile Sticky Order Bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-white/10 p-3 sm:hidden shadow-2xl flex items-center justify-between">
        <div>
          <span className="text-[10px] text-amber-400 font-bold uppercase block">Horse Fire Tablets</span>
          <span className="text-xs font-black text-white">60 Tablets Pack (COD)</span>
        </div>
        <button
          onClick={scrollToOrderForm}
          className="bg-[#cc0000] text-white font-black text-xs px-5 py-2.5 rounded-full shadow flex items-center gap-1.5"
        >
          <span>अभी ऑर्डर करें</span>
          <Zap className="w-3.5 h-3.5 fill-white" />
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 text-center py-8 text-xs border-t border-white/5 pb-20 sm:pb-8">
        <div className="max-w-4xl mx-auto px-4 space-y-2">
          <p>© {new Date().getFullYear()} Horse Fire Official Store. All rights reserved.</p>
          <p className="text-[11px] text-slate-600">
            Disclaimer: This product is an Ayurvedic dietary supplement. Consult a doctor for specific medical advice.
          </p>
        </div>
      </footer>

    </div>
  );
}

export default App;
