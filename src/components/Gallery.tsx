import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const images = [
  { src: g1, alt: "Café interior at sunset", span: "md:row-span-2" },
  { src: g2, alt: "Pirwadi beach sunset" },
  { src: g5, alt: "Café food spread flatlay" },
  { src: g4, alt: "Neon café sign", span: "md:col-span-2" },
  { src: g3, alt: "Friends at café table" },
  { src: g6, alt: "Acoustic guitar on brick wall" },
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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 auto-rows-[200px] md:auto-rows-[260px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${img.span ?? ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                width={1024}
                height={1024}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
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
