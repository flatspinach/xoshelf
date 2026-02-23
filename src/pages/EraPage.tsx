import { useParams, useNavigate } from "react-router-dom";
import { eras } from "../data/eras";
import { usePlayer } from "../context/PlayerContext";

const EraPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { playTrack, currentTrack } = usePlayer();

  const era = eras.find((e) => e.slug === slug);

  if (!era) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p>Era not found.</p>
      </div>
    );
  }

  // Prepare enriched tracks (with cover + artist)
  const enrichedTracks = era.tracks.map((track) => ({
    ...track,
    cover: era.image,
    artist: era.title,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white">

      {/* Back Button */}
      <div className="p-6">
        <button
          onClick={() => navigate("/")}
          className="text-white/60 hover:text-white transition"
        >
          ← Back
        </button>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-12 gap-12">

        {/* Album Cover */}
        <div className="relative group">
          <img
            src={era.image}
            alt={era.title}
            className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-3xl shadow-2xl transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 rounded-3xl bg-white/10 blur-3xl -z-10" />
        </div>

        {/* Text Section */}
        <div className="max-w-xl">
          <p className="text-white/40 uppercase tracking-[0.3em] text-sm mb-4">
            {era.year}
          </p>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 capitalize">
            {era.title}
          </h1>

          <p className="text-white/60 leading-relaxed">
            This era represents a distinct sonic and visual chapter.
          </p>

          <div className="mt-8 flex gap-4">
            <button
              onClick={() => playTrack(enrichedTracks[0], enrichedTracks)}
              className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:scale-105 transition"
            >
              Play All
            </button>

            <button className="px-6 py-3 border border-white/30 rounded-full hover:bg-white/10 transition">
              Shuffle
            </button>
          </div>
        </div>
      </div>

      {/* Tracklist Section */}
      <div className="px-6 md:px-20 py-16 border-t border-white/10">
        <h2 className="text-2xl font-semibold mb-8">Tracklist</h2>

        <div className="space-y-3">
          {enrichedTracks.map((track, index) => {
            const isActive = currentTrack?.audio === track.audio;

            return (
              <div
                key={track.id}
                onClick={() => playTrack(track, enrichedTracks)}
                className={`flex justify-between items-center p-4 rounded-xl cursor-pointer transition duration-300
                ${
                  isActive
                    ? "bg-white text-black"
                    : "bg-zinc-900/60 hover:bg-zinc-800"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="w-6 text-sm">
                    {index + 1}
                  </span>
                  <span className="font-medium">
                    {track.name}
                  </span>
                </div>

                <span className="text-sm opacity-70">
                  {track.duration}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EraPage;