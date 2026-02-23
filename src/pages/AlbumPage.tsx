import { useParams } from "react-router-dom";
import { albums } from "@/data/albums";
import PlaylistLayout from "@/components/PlaylistLayout";

const AlbumPage = () => {
  const { slug } = useParams();
  const album = albums.find((a) => a.slug === slug);

  if (!album) return <div className="p-10 text-white">Album not found</div>;

  const formattedTracks = album.tracks.map((track) => ({
    id: track.id,
    name: track.name,
    audio: track.audio,
    duration: track.duration,
    cover: album.image,
    artist: "The Weeknd",
  }));

  return (
    <PlaylistLayout
      title={album.title}
      year={album.year}
      type="Album"
      image={album.image}
      tracks={formattedTracks}
    />
  );
};

export default AlbumPage;