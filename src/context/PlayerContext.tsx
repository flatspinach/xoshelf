import {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Track = {
  id: number;
  name: string;
  audio: string;
  duration: string;
  cover: string;
  artist: string;
};

type PlayerContextType = {
  currentTrack: Track | null;
  isPlaying: boolean;
  playTrack: (track: Track, list?: Track[]) => void;
  togglePlay: () => void;
  nextTrack: () => void;
  prevTrack: () => void;
  audioRef: React.MutableRefObject<HTMLAudioElement>;
  currentTime: number;
  duration: number;
  seek: (time: number) => void;
};

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const PlayerProvider = ({ children }: { children: ReactNode }) => {
  const audioRef = useRef<HTMLAudioElement>(new Audio());

  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [trackList, setTrackList] = useState<Track[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const playTrack = (track: Track, list?: Track[]) => {
    // If album/mixtape passed
    if (list && list.length > 0) {
      setTrackList(list);
      const index = list.findIndex((t) => t.audio === track.audio);
      setCurrentIndex(index >= 0 ? index : 0);
    } 
    // If single (no list)
    else {
      setTrackList([track]);
      setCurrentIndex(0);
    }

    

    const fullAudioPath = window.location.origin + track.audio;

    if (audioRef.current.src !== fullAudioPath) {
      audioRef.current.src = track.audio;
    }

    audioRef.current.play();
    setCurrentTrack(track);
    setIsPlaying(true);
  };
  
  const seek = (time: number) => {
  audioRef.current.currentTime = time;
  setCurrentTime(time);
};

  const togglePlay = () => {
    if (!currentTrack) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  const nextTrack = () => {
    if (!trackList.length) return;

    const nextIndex = (currentIndex + 1) % trackList.length;
    const next = trackList[nextIndex];

    setCurrentIndex(nextIndex);
    playTrack(next, trackList);
  };

  const prevTrack = () => {
    if (!trackList.length) return;

    const prevIndex =
      (currentIndex - 1 + trackList.length) % trackList.length;
    const prev = trackList[prevIndex];

    setCurrentIndex(prevIndex);
    playTrack(prev, trackList);
  };

  useEffect(() => {
  const audio = audioRef.current;

  const handleEnded = () => {
    nextTrack();
  };

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);

  const handleTimeUpdate = () => {
    setCurrentTime(audio.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audio.duration);
  };

  audio.addEventListener("ended", handleEnded);
  audio.addEventListener("play", handlePlay);
  audio.addEventListener("pause", handlePause);
  audio.addEventListener("timeupdate", handleTimeUpdate);
  audio.addEventListener("loadedmetadata", handleLoadedMetadata);

  return () => {
    audio.removeEventListener("ended", handleEnded);
    audio.removeEventListener("play", handlePlay);
    audio.removeEventListener("pause", handlePause);
    audio.removeEventListener("timeupdate", handleTimeUpdate);
    audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
  };
}, [currentIndex, trackList]);
  return (
    <PlayerContext.Provider
  value={{
    currentTrack,
    isPlaying,
    playTrack,
    togglePlay,
    nextTrack,
    prevTrack,
    audioRef,
    currentTime,
    duration,
    seek,
  }}
>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error("usePlayer must be used inside PlayerProvider");
  }
  return context;
};