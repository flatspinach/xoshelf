import { Play, Shuffle } from "lucide-react";

interface AlbumHeroProps {
  title: string;
  year?: string;
  type: string;
  image: string;
  tracks: any[];
  onPlay: () => void;
}

const AlbumHero = ({ title, year, type, image, tracks, onPlay }: AlbumHeroProps) => {
  return (
    <section className="relative w-full min-h-[70vh] flex items-end overflow-hidden">
      {/* Blurred background */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover scale-110 blur-3xl opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="absolute inset-0 ambient-glow" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-12 pt-24 flex flex-col md:flex-row items-center md:items-end gap-8 md:gap-12">
        {/* Album Cover */}
        <div className="shrink-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-lg overflow-hidden glow-box shadow-2xl">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Album Info */}
        <div className="flex flex-col items-center md:items-start gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-light">
            Album
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-none text-center md:text-left">
            {title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="text-foreground font-medium">The Weeknd</span>
<span className="w-1 h-1 rounded-full bg-muted-foreground" />
<span>{year}</span>
<span className="w-1 h-1 rounded-full bg-muted-foreground" />
<span>{tracks.length} tracks</span>
          </div>

          <div className="flex items-center gap-4 mt-4">
            
            <button
  onClick={onPlay}
  className="flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm tracking-wide glow-box hover:brightness-110 transition-all duration-300"
>
  <Play size={18} fill="currentColor" />
  Play
</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlbumHero;