import gallery1 from "@/assets/gallery-1.jpg";

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/40 to-accent/40 blur-xl opacity-60 group-hover:opacity-90 transition" />
          <img
            src={gallery1}
            alt="Cozy Ohhh Bunkerzzz interior at sunset"
            width={1024}
            height={1024}
            loading="lazy"
            className="relative rounded-2xl w-full aspect-square object-cover"
          />
          <div className="absolute -bottom-6 -right-6 glass rounded-xl px-6 py-4 text-center">
            <div className="text-3xl font-display font-bold neon-orange">2019</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Est. Uran</div>
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.3em] neon-cyan mb-4">Our Story</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Where <span className="text-gradient">sunsets</span> meet
            <br /> comfort food.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Tucked beside Nagaon's Pirwadi Beach in Uran, Ohhh Bunkerzzz is the coast's iconic sundowner destination.
            We're the kind of place where the sound of waves blends with chatter, where neon glow softens
            into warm Edison light, and where every plate tells a story.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            From cheesy pull-out breads to thick Oreo shakes, we serve comfort with a side of vibe.
            Sit back. Stay a while. The ordinary can wait.
          </p>

          <div className="grid grid-cols-3 gap-6">
            {[
              { value: "4.1★", label: "Rated" },
              { value: "1100+", label: "Reviews" },
              { value: "4", label: "Outlets" },
            ].map((s) => (
              <div key={s.label} className="glass rounded-xl p-4 text-center hover:shadow-neon-cyan transition">
                <div className="text-2xl font-display font-bold text-gradient">{s.value}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
