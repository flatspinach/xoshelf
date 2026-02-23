import { ReactNode } from "react";

interface MusicSectionProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  gradient?: string;
}

const MusicSection = ({ title, subtitle, children, gradient }: MusicSectionProps) => {
  return (
    <section className="relative py-20 px-6 md:px-12 overflow-hidden">
      {/* Optional background gradient */}
      {gradient && (
        <div className="bg-black" />
      )}

      <div className="relative z-10 max-w-[1400px] mx-auto">
        <div className="mb-10">
          {subtitle && (
            <p className="text-muted-foreground text-xs tracking-[0.25em] uppercase mb-3">{subtitle}</p>
          )}
          <h2 className="text-foreground text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            {title}
          </h2>
          <div className="w-16 h-0.5 bg-primary mt-4 rounded-full" />
        </div>

        {/* Horizontal scrollable content */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hidden pb-4 -mx-2 px-2">
          {children}
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
