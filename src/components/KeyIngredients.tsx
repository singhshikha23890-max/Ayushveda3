import React from 'react';

const ingredients = [
  {
    name: 'Ashwagandha Root',
    desc: 'Helps manage daily stress & fatigue and supports energy',
    img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Gokshura',
    desc: 'Helps to promote healthy circulation in the body',
    img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Kaunch Beej',
    desc: 'Helps promote a positive mood and an energized life',
    img: 'https://images.unsplash.com/photo-1594824813566-88855ce75341?auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Safed Musli',
    desc: 'Helps combat fatigue and support energy levels',
    img: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Shatavari',
    desc: 'Support activeness and overall wellness',
    img: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=300&q=80',
  },
];

export const KeyIngredients = () => {
  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-center text-slate-950 mb-12">
          Key Ingredients
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {ingredients.map((ing, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-md hover:shadow-xl transition-all flex items-center justify-between gap-4"
            >
              <div>
                <h3 className="font-bold text-lg text-slate-900">{ing.name}</h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{ing.desc}</p>
              </div>

              <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-amber-50 p-1 border border-slate-100 shadow-inner flex items-center justify-center">
                <img 
                  src={ing.img} 
                  alt={ing.name} 
                  className="w-full h-full object-cover rounded-lg" 
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=300&q=80";
                  }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
