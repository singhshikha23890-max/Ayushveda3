import React, { useState } from 'react';
import { Star, CheckCircle2, MessageSquarePlus, X } from 'lucide-react';

const initialReviews = [
  {
    id: 1,
    author: 'Vikram Singh',
    rating: 5,
    date: '2 days ago',
    comment: 'Horse Fire Tablets à¤µà¤¾à¤¸à¥à¤¤à¤µ à¤®à¥‡à¤‚ à¤•à¤¾à¤® à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆ! 1 à¤®à¤¹à¥€à¤¨à¥‡ à¤•à¥‡ à¤¨à¤¿à¤¯à¤®à¤¿à¤¤ à¤‰à¤ªà¤¯à¥‹à¤— à¤•à¥‡ à¤¬à¤¾à¤¦ à¤Šà¤°à¥à¤œà¤¾ à¤”à¤° à¤¸à¥à¤Ÿà¥ˆà¤®à¤¿à¤¨à¤¾ à¤®à¥‡à¤‚ à¤•à¤¾à¤«à¥€ à¤¸à¥à¤§à¤¾à¤° à¤®à¤¹à¤¸à¥‚à¤¸ à¤¹à¥à¤†à¥¤',
    verified: true,
  },
  {
    id: 2,
    author: 'Rajesh Kumar',
    rating: 5,
    date: '4 days ago',
    comment: 'à¤‰à¤¤à¥à¤ªà¤¾à¤¦ à¤•à¥€ à¤—à¥à¤£à¤µà¤¤à¥à¤¤à¤¾ à¤¬à¤¹à¥à¤¤ à¤…à¤šà¥à¤›à¥€ à¤¹à¥ˆà¥¤ à¤¦à¥‚à¤§ à¤•à¥‡ à¤¸à¤¾à¤¥ à¤²à¥‡à¤¨à¥‡ à¤¸à¥‡ 15-20 à¤¦à¤¿à¤¨à¥‹à¤‚ à¤®à¥‡à¤‚ à¤ªà¤°à¤¿à¤£à¤¾à¤® à¤¦à¤¿à¤–à¤¨à¥‡ à¤²à¤—à¤¤à¤¾ à¤¹à¥ˆà¥¤ COD à¤¡à¤¿à¤²à¥€à¤µà¤°à¥€ à¤¬à¤¹à¥à¤¤ à¤¤à¥‡à¤œà¤¼ à¤¥à¥€à¥¤',
    verified: true,
  },
  {
    id: 3,
    author: 'Amit Sharma',
    rating: 4,
    date: '1 week ago',
    comment: '100% à¤†à¤¯à¥à¤°à¥à¤µà¥‡à¤¦à¤¿à¤• à¤”à¤° à¤¸à¥à¤°à¤•à¥à¤·à¤¿à¤¤à¥¤ à¤¥à¤•à¤¾à¤¨ à¤®à¤¹à¤¸à¥‚à¤¸ à¤¨à¤¹à¥€à¤‚ à¤¹à¥‹à¤¤à¥€ à¤¦à¤¿à¤¨à¤­à¤°à¥¤ à¤ªà¥ˆà¤•à¥‡à¤œà¤¿à¤‚à¤— à¤­à¥€ à¤¬à¤¹à¥à¤¤ à¤…à¤šà¥à¤›à¥€ à¤¥à¥€à¥¤',
    verified: true,
  },
  {
    id: 4,
    author: 'Suresh Patel',
    rating: 5,
    date: '2 weeks ago',
    comment: 'à¤•à¤¾à¤œà¤² à¤°à¤¾à¤˜à¤µà¤¾à¤¨à¥€ à¤œà¥€ à¤•à¥‡ à¤µà¤¿à¤œà¥à¤žà¤¾à¤ªà¤¨ à¤•à¥‡ à¤¬à¤¾à¤¦ à¤‘à¤°à¥à¤¡à¤° à¤•à¤¿à¤¯à¤¾ à¤¥à¤¾à¥¤ à¤¬à¤¹à¥à¤¤ à¤¬à¤¢à¤¼à¤¿à¤¯à¤¾ à¤ªà¥à¤°à¥‹à¤¡à¤•à¥à¤Ÿ à¤¹à¥ˆ, à¤ªà¥‚à¤°à¥‡ à¤ªà¤°à¤¿à¤µà¤¾à¤° à¤¨à¥‡ à¤­à¤°à¥‹à¤¸à¤¾ à¤œà¤¤à¤¾à¤¯à¤¾à¥¤',
    verified: true,
  },
];

export const CustomerReviews = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState('');

  const handleAddReview = (e) => {
    e.preventDefault();
    if (newAuthor && newComment) {
      const item = {
        id: Date.now(),
        author: newAuthor,
        rating: newRating,
        date: 'Just now',
        comment: newComment,
        verified: true,
      };
      setReviews([item, ...reviews]);
      setIsModalOpen(false);
      setNewAuthor('');
      setNewComment('');
    }
  };

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Rating Summary Block */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
          
          <div className="text-center md:text-left">
            <h2 className="font-serif text-3xl font-extrabold text-slate-900">à¤—à¥à¤°à¤¾à¤¹à¤• à¤¸à¤®à¥€à¤•à¥à¤·à¤¾à¤à¤‚ (Reviews)</h2>
            <div className="flex items-center gap-3 mt-2 justify-center md:justify-start">
              <span className="text-4xl font-extrabold text-slate-900">4.83</span>
              <div>
                <div className="flex text-amber-500 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs text-slate-500 font-medium">Based on 2,180 verified ratings</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#2f6f4e] hover:bg-emerald-800 text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-lg flex items-center gap-2 transition-all shrink-0"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>à¤¸à¤®à¥€à¤•à¥à¤·à¤¾ à¤²à¤¿à¤–à¥‡à¤‚ (Write a Review)</span>
          </button>

        </div>

        {/* Reviews List */}
        <div className="space-y-4">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-[#0066cc] cursor-pointer hover:underline">
                    {rev.author}
                  </span>
                  {rev.verified && (
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Verified Buyer
                    </span>
                  )}
                </div>
                <span className="text-xs text-slate-400">{rev.date}</span>
              </div>

              <div className="flex text-emerald-800 text-xs">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < rev.rating ? 'fill-[#2f6f4e] text-[#2f6f4e]' : 'text-slate-200'
                    }`}
                  />
                ))}
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                {rev.comment}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Write Review Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-5 relative animate-fadeIn">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-serif font-bold text-lg text-slate-900">à¤…à¤ªà¤¨à¥€ à¤¸à¤®à¥€à¤•à¥à¤·à¤¾ à¤²à¤¿à¤–à¥‡à¤‚</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-700 p-1 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddReview} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-900 mb-1">à¤†à¤ªà¤•à¤¾ à¤¨à¤¾à¤®</label>
                <input
                  type="text"
                  required
                  value={newAuthor}
                  onChange={(e) => setNewAuthor(e.target.value)}
                  placeholder="à¤…à¤ªà¤¨à¤¾ à¤¨à¤¾à¤® à¤¦à¤°à¥à¤œ à¤•à¤°à¥‡à¤‚"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-900 mb-1">à¤°à¥‡à¤Ÿà¤¿à¤‚à¤— (Rating)</label>
                <select
                  value={newRating}
                  onChange={(e) => setNewRating(Number(e.target.value))}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-white"
                >
                  <option value={5}>5 Stars â˜…â˜…â˜…â˜…â˜…</option>
                  <option value={4}>4 Stars â˜…â˜…â˜…â˜…â˜†</option>
                  <option value={3}>3 Stars â˜…â˜…â˜…â˜†â˜†</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-900 mb-1">à¤†à¤ªà¤•à¥€ à¤¸à¤®à¥€à¤•à¥à¤·à¤¾ (Review)</label>
                <textarea
                  rows={3}
                  required
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="à¤‰à¤¤à¥à¤ªà¤¾à¤¦ à¤•à¥‡ à¤…à¤¨à¥à¤­à¤µ à¤•à¥‡ à¤¬à¤¾à¤°à¥‡ à¤®à¥‡à¤‚ à¤¬à¤¤à¤¾à¤à¤‚..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#2f6f4e] hover:bg-emerald-800 text-white font-bold text-sm py-3.5 rounded-2xl shadow-md transition-all"
              >
                à¤¸à¤®à¥€à¤•à¥à¤·à¤¾ à¤ªà¥‹à¤¸à¥à¤Ÿ à¤•à¤°à¥‡à¤‚ (Submit Review)
              </button>
            </form>

          </div>
        </div>
      )}

    </section>
  );
};
