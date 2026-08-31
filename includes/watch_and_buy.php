<?php
$reelVideos = [
    ["id" => 1, "title" => "Kajal Raghwani Official Review", "duration" => "0:45", "type" => "mp4", "videoUrl" => "/video/kajal-raghwani-video.mp4", "thumb" => "/kajal_raghwani.jpg"],
    ["id" => 2, "title" => "Horse Fire YouTube Short 1", "duration" => "0:30", "type" => "youtube", "videoUrl" => "https://www.youtube.com/embed/BbqmbFi4TBA?autoplay=1&mute=1&loop=1&playlist=BbqmbFi4TBA", "thumb" => "https://img.youtube.com/vi/BbqmbFi4TBA/hqdefault.jpg"],
    ["id" => 3, "title" => "Kajal Raghwani Endorsement", "duration" => "0:25", "type" => "mp4", "videoUrl" => "/video/kajal-raghwani-video.mp4", "thumb" => "/kajal_raghwani.jpg"],
    ["id" => 4, "title" => "Horse Fire YouTube Short 2", "duration" => "0:35", "type" => "youtube", "videoUrl" => "https://www.youtube.com/embed/qc2HOgPCMh8?autoplay=1&mute=1&loop=1&playlist=qc2HOgPCMh8", "thumb" => "https://img.youtube.com/vi/qc2HOgPCMh8/hqdefault.jpg"],
    ["id" => 5, "title" => "Horse Fire Short Review 3", "duration" => "0:40", "type" => "youtube", "videoUrl" => "https://www.youtube.com/embed/1pnw1pMcdqo?autoplay=1&mute=1&loop=1&playlist=1pnw1pMcdqo", "thumb" => "https://img.youtube.com/vi/1pnw1pMcdqo/hqdefault.jpg"]
];
?>
<section class="py-16 bg-white border-b border-slate-200">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <h2 class="font-serif text-3xl sm:text-4xl font-extrabold text-center text-slate-900 mb-10">
      Watch & Buy
    </h2>

    <!-- 5 Video Reels Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      <?php foreach ($reelVideos as $reel): ?>
        <div class="relative aspect-[9/16] rounded-3xl overflow-hidden bg-slate-950 group cursor-pointer shadow-md hover:shadow-xl transition-all border border-slate-200"
             <?php if ($reel['type'] === 'mp4'): ?>onclick="toggleReelVideo(<?php echo $reel['id']; ?>)"<?php endif; ?>>
          
          <?php if ($reel['type'] === 'youtube'): ?>
            <iframe src="<?php echo $reel['videoUrl']; ?>" title="<?php echo $reel['title']; ?>" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="w-full h-full object-cover pointer-events-auto"></iframe>
          <?php else: ?>
            <video id="reel-video-<?php echo $reel['id']; ?>" src="<?php echo $reel['videoUrl']; ?>" playsinline autoplay loop muted class="w-full h-full object-cover" poster="<?php echo $reel['thumb']; ?>"></video>

            <!-- Gradient Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity opacity-80"></div>

            <!-- Center Play/Pause Control Button -->
            <div class="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
              <div id="reel-play-btn-<?php echo $reel['id']; ?>" class="w-14 h-14 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg border border-white/30 backdrop-blur-sm transition-all duration-300 opacity-100 scale-100">
                <i data-lucide="play" class="w-7 h-7 fill-white ml-1"></i>
              </div>
            </div>

            <!-- Mute / Unmute Button -->
            <button onclick="toggleReelMute(event, <?php echo $reel['id']; ?>)" class="absolute top-3 right-3 z-30 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all" title="Mute/Unmute">
              <i id="reel-mute-icon-<?php echo $reel['id']; ?>" data-lucide="volume-x" class="w-4 h-4 text-slate-300"></i>
            </button>
          <?php endif; ?>

          <!-- Bottom Details & Duration -->
          <div class="absolute bottom-3 left-3 right-3 text-white z-20 pointer-events-none">
            <span class="text-[10px] bg-red-700 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
              <?php echo $reel['duration']; ?>
            </span>
            <p class="text-xs font-bold mt-1.5 line-clamp-2 leading-snug drop-shadow-md">
              <?php echo $reel['title']; ?>
            </p>
          </div>

        </div>
      <?php endforeach; ?>
    </div>

  </div>
</section>
