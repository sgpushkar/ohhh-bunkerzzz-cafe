import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Menu } from "@/components/Menu";
import { Gallery } from "@/components/Gallery";
import { Location } from "@/components/Location";
import { Reviews } from "@/components/Reviews";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Drop by Bunkerzzz Cafe - Escape the Ordinary | Pirwadi Beach, Uran" },
      {
        name: "description",
        content:
          "Drop by Bunkerzzz Cafe in Nagaon, Uran - iconic sundowner destination on Pirwadi Beach. Cozy vibes, comfort food, thick shakes & beachside sunsets.",
      },
      { property: "og:title", content: "Drop by Bunkerzzz Cafe - Escape the Ordinary" },
      { property: "og:description", content: "Sundowners, comfort food & live moments by the sea in Nagaon, Uran." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800;900&family=Poppins:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Location />
      <Reviews />
      <Footer />
    </main>
  );
}
