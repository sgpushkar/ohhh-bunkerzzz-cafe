import { Instagram, Facebook, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border mt-12">
      <div className="container mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="text-3xl font-display font-bold text-gradient mb-3">Ohhh Bunkerzzz</div>
          <p className="text-muted-foreground max-w-sm leading-relaxed">
            Uran's iconic sundowner destination on Pirwadi Beach. Sunsets, beach vibes, comfort food &amp; live moments — served daily.
          </p>
          <div className="flex gap-3 mt-6">
            <a
              href="https://instagram.com/ohhhbunkerzzz"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-primary/40 flex items-center justify-center text-primary hover:shadow-neon-cyan hover:bg-primary/10 transition-all"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full border border-primary/40 flex items-center justify-center text-primary hover:shadow-neon-cyan hover:bg-primary/10 transition-all"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="#location"
              aria-label="Map"
              className="w-10 h-10 rounded-full border border-accent/40 flex items-center justify-center text-accent hover:shadow-neon-orange hover:bg-accent/10 transition-all"
            >
              <MapPin className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold uppercase tracking-wider text-sm mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {["About", "Menu", "Gallery", "Location", "Reviews"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="hover:text-primary transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold uppercase tracking-wider text-sm mb-4">Visit</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Pirwadi Beach, Nagaon<br />
            Uran, Maharashtra 400702<br />
            +91 99673 13509
          </p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Ohhh Bunkerzzz Café. All rights reserved.</p>
          <p>Crafted with <span className="neon-orange">♥</span> by the beach.</p>
        </div>
      </div>
    </footer>
  );
}
