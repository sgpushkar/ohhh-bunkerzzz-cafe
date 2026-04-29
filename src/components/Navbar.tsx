import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Location" },
  { href: "#reviews", label: "Reviews" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="text-2xl font-display font-bold text-gradient">Ohhh Bunkerzzz</span>
          <span className="text-xs neon-orange tracking-widest hidden sm:inline">CAFÉ</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#menu"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full border border-primary/40 text-primary text-sm uppercase tracking-wider hover:shadow-neon-cyan hover:bg-primary/10 transition-all"
        >
          Order Now
        </a>

        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground p-2"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-0.5 bg-current transition ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`h-0.5 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 bg-current transition ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass mx-6 mt-3 rounded-xl p-6 animate-fade-in">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-base uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
