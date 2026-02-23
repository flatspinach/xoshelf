import Equalizer from "./Equalizer";

interface Track {
  id: number;
  name: string;
  duration: string;
}

interface Props {
  tracks: Track[];
  currentTrack: Track | null;
  playTrack: (track: Track, list: Track[]) => void;
}

const TrackList = ({ tracks, currentTrack, playTrack }: Props) => {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-12">
      <div className="space-y-1">
        {tracks.map((track, i) => {
          const isActive = currentTrack?.id === track.id;

          return (
            <button
              key={track.id}
              onClick={() => playTrack(track, tracks)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg
                transition-all duration-300 ease-out text-left group
                ${isActive ? "bg-white/5 glow-border" : "hover:bg-white/[0.03] hover:-translate-y-[1px]"}
              `}
            >
              <div className="w-8 text-center shrink-0">
                <span className="text-sm text-muted-foreground font-light">
                  {i + 1}
                </span>
              </div>

              <div className="flex-1 flex items-center min-w-0">
                <span
                  className={`text-sm font-medium truncate transition-colors duration-300 ${
                    isActive ? "glow-text" : "text-foreground"
                  }`}
                >
                  {track.name}
                </span>
                {isActive && <Equalizer />}
              </div>

              <span className="text-sm text-muted-foreground font-light tabular-nums shrink-0">
                {track.duration}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default TrackList;