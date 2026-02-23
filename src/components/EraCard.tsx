import { useNavigate } from "react-router-dom";

interface EraCardProps {
  title: string;
  year: string;
  trackCount: number;
  glowClass: string;
  image: string;
}

const EraCard = ({
  title,
  year,
  trackCount,
  glowClass,
  image,
}: EraCardProps) => {
  const navigate = useNavigate();

  const slug = title
    .toLowerCase()
    .replace(/,/g, "")
    .replace(/\s+/g, "-");

  return (
    <div
      onClick={() => navigate(`/eras/${slug}`)}
      className="group flex-shrink-0 w-72 sm:w-80 cursor-pointer"
    >
      <div
        className={`relative overflow-hidden rounded-2xl glass transition-all duration-500 hover:${glowClass} p-1`}
      >
        <div className="relative h-48 sm:h-56 rounded-xl overflow-hidden flex flex-col justify-end">
          
          {/* Album Cover */}
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* Text Content */}
          <div className="relative z-10 p-6">
            <p className="text-white/70 text-xs tracking-[0.2em] uppercase mb-1">
              {year} · {trackCount} tracks
            </p>
            <h3 className="text-white text-2xl font-bold tracking-tight">
              {title}
            </h3>
          </div>

          {/* Corner Accent */}
          <div className="absolute top-4 right-4 w-8 h-8 border border-white/30 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-90">
            <span className="text-white/70 text-xs">→</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EraCard;
