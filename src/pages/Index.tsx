import { eras } from "@/data/eras";
import { albums } from "@/data/albums";
import { mixtapes } from "@/data/mixtapes";
import { singles } from "@/data/singles";

import HeroSection from "@/components/HeroSection";
import MusicSection from "@/components/MusicSection";
import GlassCard from "@/components/GlassCard";
import EraCard from "@/components/EraCard";
import FloatingPlayer from "@/components/FloatingPlayer";

import { usePlayer } from "@/context/PlayerContext";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const { playTrack } = usePlayer();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroSection />

      {/* Albums */}
      <MusicSection
        title="Albums"
        subtitle="Full-length releases"
        gradient="bg-gradient-to-b from-[hsl(340,40%,6%)] to-transparent"
      >
        {albums.map((album) => (
          <GlassCard
            key={album.slug}
            title={album.title}
            subtitle={`Album · ${album.year}`}
            image={album.image}
            onClick={() => navigate(`/albums/${album.slug}`)}
            onPlayClick={(e) => {
  e.stopPropagation();

  if (!album.tracks?.length) return;

  const formattedTracks = album.tracks.map((track) => ({
    id: track.id,
    name: track.name,
    audio: track.audio,
    duration: track.duration,
    cover: album.image,
    artist: "The Weeknd",
  }));

  playTrack(formattedTracks[0], formattedTracks);
}}
          />
        ))}
      </MusicSection>

      {/* Singles */}
      <MusicSection
        title="Singles & EPs"
        subtitle="Short form releases"
        gradient="bg-gradient-to-b from-[hsl(270,30%,6%)] to-transparent"
      >
        {singles.map((single) => (
          <GlassCard
            key={single.id}
            title={single.title}
            subtitle={`Single · ${single.year}`}
            image={single.image}
            onPlayClick={(e) => {
              e.stopPropagation();
              playTrack({
                id: 1,
                name: single.title,
                audio: single.audio,
                duration: single.duration,
                cover: single.image,
                artist: "The Weeknd",
              });
            }}
          />
        ))}
      </MusicSection>

      {/* Mixtapes */}
      <MusicSection
        title="Mixtapes"
        subtitle="Curated collections"
        gradient="bg-gradient-to-b from-[hsl(220,30%,6%)] to-transparent"
      >
        {mixtapes.map((mixtape) => (
          <GlassCard
            key={mixtape.slug}
            title={mixtape.title}
            subtitle={`Mixtape · ${mixtape.year}`}
            image={mixtape.image}
            onClick={() => navigate(`/mixtapes/${mixtape.slug}`)}
            onPlayClick={(e) => {
  e.stopPropagation();

  if (!mixtape.tracks?.length) return;

  const formattedTracks = mixtape.tracks.map((track) => ({
    id: track.id,
    name: track.name,
    audio: track.audio,
    duration: track.duration,
    cover: mixtape.image,
    artist: "The Weeknd",
  }));

  playTrack(formattedTracks[0], formattedTracks);
}}
          />
        ))}
      </MusicSection>

      {/* Eras */}
      <section className="relative py-20 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(280,30%,5%)] via-[hsl(300,20%,4%)] to-background opacity-60" />

        <div className="relative z-10 max-w-[1400px] mx-auto">
          <div className="mb-10">
            <p className="text-muted-foreground text-xs tracking-[0.25em] uppercase mb-3">
              The vault
            </p>
            <h2 className="text-foreground text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Unreleased
            </h2>
            <p className="text-muted-foreground mt-3 text-sm max-w-md">
              Explore unreleased material organized by creative eras.
            </p>
            <div className="w-16 h-0.5 bg-primary mt-4 rounded-full" />
          </div>

          <div className="flex gap-6 overflow-x-auto scrollbar-hidden pb-4 -mx-2 px-2">
            {eras.map((era) => (
              <EraCard
                key={era.slug}
                title={era.title}
                year={era.year}
                trackCount={era.tracks.length}
                image={era.image}
                glowClass="shadow-primary/40"
              />
            ))}
          </div>
        </div>
      </section>

      <footer className="py-16 px-6 text-center">
        <p className="text-muted-foreground text-xs tracking-[0.2em] uppercase">
          © 2026 XO Shelf · All rights reserved
        </p>
      </footer>

      <FloatingPlayer />
    </div>
  );
};

export default Index;