import AlbumHero from "@/components/AlbumHero";
import TrackList from "@/components/TrackList";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { usePlayer } from "@/context/PlayerContext";

interface Track {
  id: number;
  name: string;
  audio: string;
  duration: string;
  cover: string;
  artist: string;
}

interface Props {
  title: string;
  year?: string;
  type: string;
  image: string;
  tracks: Track[];
}

const PlaylistLayout = ({ title, year, type, image, tracks }: Props) => {
  const navigate = useNavigate();
  const { playTrack, currentTrack } = usePlayer();

  return (
    <div className="min-h-screen bg-black text-white">

  <div className="px-6 md:px-16 pt-10">
    <button
      onClick={() => navigate(-1)}
      className="flex items-center gap-2 text-zinc-400 hover:text-white transition mb-8"
    >
      <ArrowLeft size={18} />
      Back
    </button>
  </div>

  <AlbumHero
    title={title}
    year={year}
    type={type}
    image={image}
    tracks={tracks}
    onPlay={() => tracks.length > 0 && playTrack(tracks[0], tracks)}
  />

  <TrackList
    tracks={tracks}
    currentTrack={currentTrack}
    playTrack={playTrack}
  />
</div>
  );
};

export default PlaylistLayout;