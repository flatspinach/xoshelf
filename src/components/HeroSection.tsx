const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/cover.png')",
        }}
      />

      {/* Fade overlay (controls blending to black) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black" />

      {/* Floating orbs (make them subtle & behind text only) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-glow-primary/5 blur-[120px] animate-float z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-glow-accent/5 blur-[100px] animate-float z-0" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-glow-warm/5 blur-[80px] animate-float z-0" style={{ animationDelay: '4s' }} />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6 opacity-70">
          XOTWOD
        </p>

        <h1 className="text-gradient-hero text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tighter mb-8">
          XO
          <br />
          <span className="font-light italic">SHELF</span>
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-10">
          VAULT OF ABEL'S DISCOGRAPHY
        </p>

        <button className="glass px-8 py-3 rounded-full text-foreground text-sm tracking-wider uppercase hover:glow-primary transition-all duration-500 hover:border-glow-primary/50">
          SCROLL DOWN TO EXPLORE
        </button>
      </div>

      {/* Bottom fade into pure black */}
      <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default HeroSection;