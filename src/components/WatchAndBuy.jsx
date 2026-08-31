import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const reelVideos = [
  {
    id: 1,
    title: 'Kajal Raghwani Official Review',
    duration: '0:45',
    type: 'mp4',
    videoUrl: '/video/kajal-raghwani-video.mp4',
    thumb: '/kajal_raghwani.jpg',
  },
  {
    id: 2,
    title: 'Horse Fire YouTube Short 1',
    duration: '0:30',
    type: 'youtube',
    videoUrl: 'https://www.youtube.com/embed/BbqmbFi4TBA?autoplay=1&mute=1&loop=1&playlist=BbqmbFi4TBA',
    youtubeId: 'BbqmbFi4TBA',
    thumb: 'https://img.youtube.com/vi/BbqmbFi4TBA/hqdefault.jpg',
  },
  {
    id: 3,
    title: 'Kajal Raghwani Endorsement',
    duration: '0:25',
    type: 'mp4',
    videoUrl: '/video/kajal-raghwani-video.mp4',
    thumb: '/kajal_raghwani.jpg',
  },
  {
    id: 4,
    title: 'Horse Fire YouTube Short 2',
    duration: '0:35',
    type: 'youtube',
    videoUrl: 'https://www.youtube.com/embed/qc2HOgPCMh8?autoplay=1&mute=1&loop=1&playlist=qc2HOgPCMh8',
    youtubeId: 'qc2HOgPCMh8',
    thumb: 'https://img.youtube.com/vi/qc2HOgPCMh8/hqdefault.jpg',
  },
  {
    id: 5,
    title: 'Horse Fire Short Review 3',
    duration: '0:40',
    type: 'youtube',
    videoUrl: 'https://www.youtube.com/embed/1pnw1pMcdqo?autoplay=1&mute=1&loop=1&playlist=1pnw1pMcdqo',
    youtubeId: '1pnw1pMcdqo',
    thumb: 'https://img.youtube.com/vi/1pnw1pMcdqo/hqdefault.jpg',
  },
];

export const WatchAndBuy = () => {
  const [playingId, setPlayingId] = useState(1);
  const [mutedMap, setMutedMap] = useState({
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
  });

  const videoRefs = useRef({});

  const togglePlay = (id) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (playingId === id && !video.paused) {
      video.pause();
      setPlayingId(null);
    } else {
      // Pause all other mp4 videos
      Object.keys(videoRefs.current).forEach((keyStr) => {
        const k = Number(keyStr);
        if (k !== id && videoRefs.current[k]) {
          videoRefs.current[k]?.pause();
        }
      });

      video.muted = false; // Unmute on click
      setMutedMap((prev) => ({ ...prev, [id]: false }));
      video.play().catch(() => {});
      setPlayingId(id);
    }
  };

  const toggleMute = (e, id) => {
    e.stopPropagation();
    const video = videoRefs.current[id];
    if (!video) return;
    video.muted = !video.muted;
    setMutedMap((prev) => ({ ...prev, [id]: video.muted }));
  };

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-center text-slate-900 mb-10">
          Watch & Buy
        </h2>

        {/* 5 Video Reels Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {reelVideos.map((reel) => {
            const isPlaying = playingId === reel.id;
            const isMuted = mutedMap[reel.id] ?? true;

            return (
              <div
                key={reel.id}
                onClick={() => reel.type === 'mp4' && togglePlay(reel.id)}
                className="relative aspect-[9/16] rounded-3xl overflow-hidden bg-slate-950 group cursor-pointer shadow-md hover:shadow-xl transition-all border border-slate-200"
              >
                {/* YouTube Embed Player for Cards 2 and 4 */}
                {reel.type === 'youtube' ? (
                  <iframe
                    src={reel.videoUrl}
                    title={reel.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full object-cover pointer-events-auto"
                  />
                ) : (
                  /* Auto-Playing Local MP4 Video Player for Cards 1, 3, 5 */
                  <>
                    <video
                      ref={(el) => {
                        videoRefs.current[reel.id] = el;
                      }}
                      src={reel.videoUrl}
                      playsInline
                      autoPlay
                      loop
                      muted={isMuted}
                      className="w-full h-full object-cover"
                      poster={reel.thumb}
                    />

                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity ${
                      isPlaying && !isMuted ? 'opacity-40 hover:opacity-90' : 'opacity-80'
                    }`} />

                    {/* Center Play/Pause Control Button */}
                    <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                      <div className={`w-14 h-14 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg border border-white/30 backdrop-blur-sm transition-all duration-300 ${
                        isPlaying && !isMuted ? 'opacity-0 group-hover:opacity-100 scale-90' : 'opacity-100 scale-100'
                      }`}>
                        {!isMuted ? (
                          <Pause className="w-7 h-7 fill-white" />
                        ) : (
                          <Play className="w-7 h-7 fill-white ml-1" />
                        )}
                      </div>
                    </div>

                    {/* Mute / Unmute Button (Top Right) */}
                    <button
                      onClick={(e) => toggleMute(e, reel.id)}
                      className="absolute top-3 right-3 z-30 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all"
                      title={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted ? (
                        <VolumeX className="w-4 h-4 text-slate-300" />
                      ) : (
                        <Volume2 className="w-4 h-4 text-amber-400" />
                      )}
                    </button>
                  </>
                )}

                {/* Bottom Details & Duration */}
                <div className="absolute bottom-3 left-3 right-3 text-white z-20 pointer-events-none">
                  <span className="text-[10px] bg-red-700 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                    {reel.duration}
                  </span>
                  <p className="text-xs font-bold mt-1.5 line-clamp-2 leading-snug drop-shadow-md">
                    {reel.title}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
