<?php
$ingredients = [
    ["name" => "Ashwagandha Root", "desc" => "Helps manage daily stress & fatigue and supports energy", "img" => "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=300&q=80"],
    ["name" => "Gokshura", "desc" => "Helps to promote healthy circulation in the body", "img" => "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=300&q=80"],
    ["name" => "Kaunch Beej", "desc" => "Helps promote a positive mood and an energized life", "img" => "https://images.unsplash.com/photo-1594824813566-88855ce75341?auto=format&fit=crop&w=300&q=80"],
    ["name" => "Safed Musli", "desc" => "Helps combat fatigue and support energy levels", "img" => "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=300&q=80"],
    ["name" => "Shatavari", "desc" => "Support activeness and overall wellness", "img" => "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=300&q=80"]
];
?>
<section class="py-16 bg-white border-b border-slate-200">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <h2 class="font-serif text-3xl sm:text-4xl font-extrabold text-center text-slate-950 mb-12">
      Key Ingredients
    </h2>

    <div class="grid md:grid-cols-3 gap-6">
      <?php foreach ($ingredients as $item): ?>
        <div class="bg-slate-50 rounded-2xl p-5 border border-slate-200 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
          <img src="<?php echo $item['img']; ?>" alt="<?php echo $item['name']; ?>" class="w-16 h-16 rounded-xl object-cover shrink-0 border border-slate-200">
          <div>
            <h3 class="font-serif font-extrabold text-base text-slate-900 mb-1"><?php echo $item['name']; ?></h3>
            <p class="text-xs text-slate-600 leading-relaxed font-normal"><?php echo $item['desc']; ?></p>
          </div>
        </div>
      <?php endforeach; ?>
    </div>

  </div>
</section>
