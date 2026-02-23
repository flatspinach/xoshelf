import { useParams } from "react-router-dom";
import { mixtapes } from "@/data/mixtapes";
import PlaylistLayout from "@/components/PlaylistLayout";

const MixtapePage = () => {
  const { slug } = useParams();

  const mixtape = mixtapes.find((m) => m.slug === slug);

  if (!mixtape) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p>Mixtape not found.</p>
      </div>
    );
  }

  const formattedTracks = mixtape.tracks.map((track) => ({
    id: track.id,
    name: track.name,
    audio: track.audio,
    duration: track.duration,
    cover: mixtape.image,
    artist: "The Weeknd",
  }));

  return (
    <PlaylistLayout
      title={mixtape.title}
      year={mixtape.year}
      type="Mixtape"
      image={mixtape.image}
      tracks={formattedTracks}
    />
  );
};

export default MixtapePage;