import heroImg from "@/assets/hero-cafe.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Ohhh Bunkerzzz Café moody interior at night"
          width={1920}
          height={1280}
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)", opacity: 0.35 }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <p className="text-sm md:text-base uppercase tracking-[0.4em] neon-cyan animate-fade-in mb-6">
          Pirwad · Uran
        </p>
        <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.95] animate-fade-up">
          Escape the
          <br />
          <span className="text-gradient animate-glow inline-block">Ordinary</span>
        </h1>
        <p className="mt-8 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Sundowners, comfort food, and live moments by the sea. A cozy café where every sunset feels personal.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#menu"
            className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold uppercase tracking-wider text-sm hover:shadow-neon-cyan hover:scale-105 transition-all duration-300"
          >
            View Menu
          </a>
          <a
            href="#location"
            className="px-8 py-4 rounded-full border border-accent/60 text-accent font-semibold uppercase tracking-wider text-sm hover:bg-accent/10 hover:shadow-neon-orange hover:scale-105 transition-all duration-300"
          >
            Get Directions
          </a>
        </div>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2">
          <span className="w-1 h-2 rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
}
