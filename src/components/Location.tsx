import { MapPin, Clock, Phone } from "lucide-react";

export function Location() {
  return (
    <section id="location" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.3em] neon-orange mb-3">Find Us</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold">
            Drop by the <span className="text-gradient">Ohhh Bunkerzzz Cafe</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 relative rounded-2xl overflow-hidden glass min-h-[400px]">
            <iframe
              title="Ohhh Bunkerzzz Café Uran location"
              src="https://www.google.com/maps?q=Ohhh+Bunkerzzz+Pirwadi+Beach+Nagaon+Uran&output=embed"
              className="absolute inset-0 w-full h-full border-0 grayscale contrast-110"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="lg:col-span-2 flex flex-col gap-5">
            {[
              {
                icon: MapPin,
                title: "Address",
                lines: ["Shop No. 1, Pirwadi Beach", "Near Darga, Nagaon", "Uran, Maharashtra 400702"],
              },
              {
                icon: Clock,
                title: "Open Daily",
                lines: ["Monday — Sunday", "9:30 AM — 11:30 PM"],
              },
              {
                icon: Phone,
                title: "Reach Us",
                lines: ["+91 99673 13509", "@ohhhbunkerzzz on Instagram"],
              },
            ].map((c) => (
              <div
                key={c.title}
                className="glass rounded-2xl p-6 flex gap-4 items-start hover:shadow-neon-cyan transition-all hover:-translate-y-1"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center">
                  <c.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-1">{c.title}</h3>
                  {c.lines.map((l) => (
                    <p key={l} className="text-sm text-muted-foreground leading-relaxed">{l}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
