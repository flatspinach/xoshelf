import MiniMusicPlayer from "@/components/MiniMusicPlayer";
import { usePlayer } from "@/context/PlayerContext";

const FloatingPlayer = () => {
  const {
    currentTrack,
    isPlaying,
    togglePlay,
    nextTrack,
    prevTrack,
    currentTime,
    duration,
    seek,
  } = usePlayer();

  if (!currentTrack) return null;

  return (
    <MiniMusicPlayer
      cover={currentTrack.cover}
      trackName={currentTrack.name}
      albumName={currentTrack.duration} // TEMP — read below
      isPlaying={isPlaying}
      onPlayPause={togglePlay}
      onNext={nextTrack}
      onPrev={prevTrack}
      currentTime={currentTime}
      duration={duration}
      onSeek={seek}
    />
  );
};

export default FloatingPlayer;