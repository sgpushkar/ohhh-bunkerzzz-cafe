import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Aarav S.",
    where: "Zomato · Uran",
    rating: 5,
    text: "Cheesy pull-out bread is a religion here. The sunset view from the window seat sealed the deal. Coming back every weekend.",
  },
  {
    name: "Priya M.",
    where: "Justdial · Uran",
    rating: 5,
    text: "Hidden gem on Pirwadi beach. Cozy vibes, friendly staff, and pocket-friendly prices. The Oreo shake is unreal.",
  },
  {
    name: "Rohan K.",
    where: "Google · Panvel",
    rating: 4,
    text: "Tried the Mexican aloo tikki burger and farmhouse pizza — both yummy. Great hangout spot with friends.",
  },
  {
    name: "Sneha R.",
    where: "District · Thakur Village",
    rating: 5,
    text: "Surprised by the quality for the price. Compact, cozy, and the lighting is perfect for photos. A real find.",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.3em] neon-cyan mb-3">Word on the Street</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold">
            Loved by <span className="text-gradient">regulars</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reviews.map((r, i) => (
            <article
              key={i}
              className="relative glass rounded-2xl p-8 hover:shadow-neon-orange transition-all hover:-translate-y-1"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-accent/30" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, k) => (
                  <Star key={k} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed mb-6 italic">"{r.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-display font-bold text-primary-foreground">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{r.where}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
