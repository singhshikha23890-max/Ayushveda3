<?php
$reviews = [
    ["id" => 1, "author" => "Vikram Singh", "rating" => 5, "date" => "2 days ago", "comment" => "Horse Fire Tablets वास्तव में काम करता है! 1 महीने के नियमित उपयोग के बाद ऊर्जा और स्टैमिना में काफी सुधार महसूस हुआ।", "verified" => true],
    ["id" => 2, "author" => "Rajesh Kumar", "rating" => 5, "date" => "4 days ago", "comment" => "उत्पाद की गुणवत्ता बहुत अच्छी है। दूध के साथ लेने से 15-20 दिनों में परिणाम दिखने लगता है। COD डिलीवरी बहुत तेज़ थी।", "verified" => true],
    ["id" => 3, "author" => "Amit Sharma", "rating" => 4, "date" => "1 week ago", "comment" => "100% आयुर्वेदिक और सुरक्षित। थकान महसूस नहीं होती दिनभर। पैकेजिंग भी बहुत अच्छी थी।", "verified" => true],
    ["id" => 4, "author" => "Suresh Patel", "rating" => 5, "date" => "2 weeks ago", "comment" => "काजल राघवानी जी के विज्ञापन के बाद ऑर्डर किया था। बहुत बढ़िया प्रोडक्ट है, पूरे परिवार ने भरोसा जताया।", "verified" => true]
];
?>
<section class="py-16 bg-white border-b border-slate-200">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
      <div>
        <h2 class="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Customer Reviews & Feedback
        </h2>
        <div class="flex items-center gap-2 mt-2">
          <div class="flex text-amber-500 text-base">★★★★★</div>
          <span class="text-sm font-bold text-slate-800">4.8 out of 5</span>
          <span class="text-xs text-slate-500">(Based on 2,180 verified customers)</span>
        </div>
      </div>

      <button onclick="openReviewModal()" class="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-full shadow flex items-center justify-center gap-2 transition-all self-start sm:self-auto">
        <i data-lucide="message-square-plus" class="w-4 h-4 text-amber-400"></i>
        <span>Write a Review</span>
      </button>
    </div>

    <!-- Reviews Grid -->
    <div id="reviews-grid" class="grid md:grid-cols-2 gap-6">
      <?php foreach ($reviews as $rev): ?>
        <div class="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3 relative">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <div class="w-9 h-9 rounded-full bg-slate-900 text-white font-bold text-sm flex items-center justify-center uppercase">
                <?php echo mb_substr($rev['author'], 0, 1, 'UTF-8'); ?>
              </div>
              <div>
                <h4 class="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                  <span><?php echo $rev['author']; ?></span>
                  <?php if ($rev['verified']): ?>
                    <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600 fill-emerald-100" title="Verified Customer"></i>
                  <?php endif; ?>
                </h4>
                <span class="text-[10px] text-slate-400"><?php echo $rev['date']; ?></span>
              </div>
            </div>

            <div class="flex text-amber-500 text-xs">
              <?php echo str_repeat('★', $rev['rating']); ?>
            </div>
          </div>

          <p class="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            "<?php echo $rev['comment']; ?>"
          </p>
        </div>
      <?php endforeach; ?>
    </div>

  </div>
</section>

<!-- Review Modal -->
<div id="review-modal" class="fixed inset-0 z-50 overflow-y-auto hidden">
  <div class="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onclick="closeReviewModal()"></div>

  <div class="flex min-h-full items-center justify-center p-4">
    <div class="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5 z-10 border border-slate-200">
      
      <div class="flex items-center justify-between border-b border-slate-100 pb-4">
        <h3 class="font-serif text-xl font-bold text-slate-900">Write a Customer Review</h3>
        <button onclick="closeReviewModal()" class="text-slate-400 hover:text-slate-900 p-1 rounded-full hover:bg-slate-100">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>
      </div>

      <form onsubmit="handleAddReviewSubmit(event)" class="space-y-4">
        <div>
          <label class="block text-xs font-bold text-slate-900 mb-1">Your Name</label>
          <input type="text" id="new-review-author" required placeholder="e.g. Rahul Sharma" class="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-600">
        </div>

        <div>
          <label class="block text-xs font-bold text-slate-900 mb-1">Rating</label>
          <select id="new-review-rating" class="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-600 bg-white">
            <option value="5">★★★★★ (5/5 Excellent)</option>
            <option value="4">★★★★☆ (4/5 Very Good)</option>
            <option value="3">★★★☆☆ (3/5 Average)</option>
          </select>
        </div>

        <div>
          <label class="block text-xs font-bold text-slate-900 mb-1">Your Feedback / Review</label>
          <textarea id="new-review-comment" rows="3" required placeholder="Share your experience..." class="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-600"></textarea>
        </div>

        <button type="submit" class="w-full bg-[#cc0000] hover:bg-red-700 text-white font-bold text-sm py-3.5 rounded-xl shadow-md transition-all">
          Submit Review
        </button>
      </form>

    </div>
  </div>
</div>
