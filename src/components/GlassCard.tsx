import { Play } from "lucide-react";

interface GlassCardProps {
  title: string;
  subtitle: string;
  image: string;
  onClick?: () => void;
  onPlayClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const GlassCard = ({
  title,
  subtitle,
  image,
  onClick,
  onPlayClick,
}: GlassCardProps) => (
  <div
    className="group flex-shrink-0 w-56 sm:w-64 cursor-pointer"
    onClick={onClick}
  >
    <div className="relative overflow-hidden rounded-2xl glass transition-all duration-500 hover:glow-primary">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

        {/* Floating play button */}
        <button
          onClick={onPlayClick}
          className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-primary hover:scale-110"
        >
          <Play className="h-5 w-5 fill-primary-foreground text-primary-foreground ml-0.5" />
        </button>
      </div>
      <div className="p-4">
        <p className="text-foreground font-semibold text-sm truncate">
          {title}
        </p>
        <p className="text-muted-foreground text-xs mt-1 truncate">
          {subtitle}
        </p>
      </div>
    </div>
  </div>
);

export default GlassCard;