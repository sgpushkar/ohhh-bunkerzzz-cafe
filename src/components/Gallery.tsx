import g1 from "@/assets/gallery/539047181_18351376327083616_6499003214190651115_n.jpg";
import g2 from "@/assets/gallery/540598886_18351376183083616_2040405216563591072_n.jpg";
import g3 from "@/assets/gallery/540677454_18351936787083616_3985505300358881326_n.jpg";
import g4 from "@/assets/gallery/541940648_18352289074083616_2894679527152909923_n.jpg";
import g5 from "@/assets/gallery/Golden hour. Refined sips. Unmatched serenity. ☕✨At Ohhh Bunkerzzz, every moment is crafted to f.jpg";
import g6 from "@/assets/gallery/Uran - Navi Mumbai got its own sundowner Cafe to chill and eat together. Enjoy Lip Smacking burg (1).jpg";
import g7 from "@/assets/gallery/Uran - Navi Mumbai got its own sundowner Cafe to chill and eat together. Enjoy Lip Smacking burg (2).jpg";
import g8 from "@/assets/gallery/Uran - Navi Mumbai got its own sundowner Cafe to chill and eat together. Enjoy Lip Smacking burg.jpg";
import g9 from "@/assets/gallery/gallery (2).png";
import g10 from "@/assets/gallery/gallery.png";

const images = [
  // Interleaved Portraits and Squares for a balanced masonry layout
  { src: g5, alt: "Golden hour at Bunkerzzz" },
  { src: g6, alt: "Sundowner Cafe 1" },
  { src: g1, alt: "Café vibe 1" },
  { src: g2, alt: "Café vibe 2" },
  { src: g7, alt: "Sundowner Cafe 2" },
  { src: g3, alt: "Café vibe 3" },
  { src: g4, alt: "Café vibe 4" },
  { src: g8, alt: "Sundowner Cafe 3" },
  { src: g10, alt: "Gallery highlight 2" },
  { src: g9, alt: "Gallery highlight 1" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.3em] neon-cyan mb-3">Gallery</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold">
            Moments in <span className="text-gradient">moodlight</span>
          </h2>
        </div>

        <div className="columns-2 md:columns-3 gap-4 md:gap-5">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl group cursor-pointer break-inside-avoid mb-4 md:mb-5"
            >
              <img
                src={img.src}
                alt={img.alt}
                width={1024}
                height={1024}
                loading="lazy"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="absolute inset-0 ring-1 ring-inset ring-primary/0 group-hover:ring-primary/60 group-hover:shadow-neon-cyan transition-all duration-500 rounded-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
