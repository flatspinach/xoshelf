import { Play, Pause, SkipBack, SkipForward } from "lucide-react";

interface MiniMusicPlayerProps {
  cover: string;
  trackName: string;
  albumName: string;
  isPlaying: boolean;
  onPlayPause: () => void;
  onNext: () => void;
  onPrev: () => void;
  currentTime: number;
  duration: number;
  onSeek: (time: number) => void;
}

const formatTime = (seconds: number) => {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
};

const MiniMusicPlayer = ({
  cover,
  trackName,
  albumName,
  isPlaying,
  onPlayPause,
  onNext,
  onPrev,
  currentTime,
  duration,
  onSeek,
}: MiniMusicPlayerProps) => {
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Container with hover expansion */}
      <div
        className="relative overflow-hidden rounded-2xl shadow-2xl shadow-black/40
          w-[140px] h-[56px] group-hover:w-[380px] group-hover:h-[160px]
          transition-all duration-400 ease-in-out cursor-pointer"
      >
        {/* Background cover image */}
<div
  className="absolute inset-0"
  style={{
    backgroundImage: `url(${cover})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "blur(1px) brightness(0.6)",
    transform: "scale(1.3)",
  }}
/>

<div className="absolute inset-0 bg-black/25 backdrop-blur-md" />

{/* Glass overlay */}
<div className="absolute inset-0 bg-black/30 backdrop-blur-lg" />

        {/* === COLLAPSED STATE === */}
        <div className="absolute inset-0 flex items-center gap-3 px-3 group-hover:opacity-0 transition-opacity duration-200">
          <img
            src={cover}
            alt={trackName}
            className="w-9 h-9 rounded-lg object-cover flex-shrink-0"
          />
          <button
            onClick={onPlayPause}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/25 transition-colors text-white flex-shrink-0"
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
          </button>
        </div>

        {/* === EXPANDED STATE === */}
        <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-400 delay-100">
          {/* Top: Track info */}
          <div className="min-w-0">
            <p className="text-white font-semibold text-sm truncate leading-tight">
              {trackName}
            </p>
            <p className="text-white/50 text-xs truncate mt-0.5">{albumName}</p>
          </div>

          {/* Middle: Controls */}
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={onPrev}
              className="text-white/60 hover:text-white transition-colors"
            >
              <SkipBack size={18} />
            </button>
            <button
              onClick={onPlayPause}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/25 transition-colors text-white"
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
            </button>
            <button
              onClick={onNext}
              className="text-white/60 hover:text-white transition-colors"
            >
              <SkipForward size={18} />
            </button>
          </div>

          {/* Bottom: Seek bar */}
          <div className="flex items-center gap-2">
            <span className="text-white/40 text-[10px] font-mono w-8 text-right">
              {formatTime(currentTime)}
            </span>
            <div className="relative flex-1 h-4 flex items-center group/seek">
              <div className="w-full h-[3px] rounded-full bg-white/15 overflow-hidden">
                <div
                  className="h-full bg-white/70 rounded-full transition-[width] duration-100"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <input
                type="range"
                min={0}
                max={duration || 1}
                value={currentTime}
                onChange={(e) => onSeek(Number(e.target.value))}
                className="absolute inset-0 w-full opacity-0 cursor-pointer"
              />
            </div>
            <span className="text-white/40 text-[10px] font-mono w-8">
              {formatTime(duration)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniMusicPlayer;
