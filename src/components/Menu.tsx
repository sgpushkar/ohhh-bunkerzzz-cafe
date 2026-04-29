import { useState } from "react";
import burgerAloo from "@/assets/menu/burger-aloo.jpg";
import burgerVeggie from "@/assets/menu/burger-veggie.jpg";
import burgerPeriVeg from "@/assets/menu/burger-peri-veg.jpg";
import burgerCrispyChicken from "@/assets/menu/burger-crispy-chicken.jpg";
import burgerSpicyChicken from "@/assets/menu/burger-spicy-chicken.jpg";
import burgerCheesyChicken from "@/assets/menu/burger-cheesy-chicken.jpg";
import siderNuggets from "@/assets/menu/sider-nuggets.jpg";
import siderVeggieFingers from "@/assets/menu/sider-veggie-fingers.jpg";
import siderMozzarella from "@/assets/menu/sider-mozzarella.jpg";
import siderCheeseBalls from "@/assets/menu/sider-cheese-balls.jpg";
import friesSalted from "@/assets/menu/fries-salted.jpg";
import friesPeri from "@/assets/menu/fries-peri.jpg";
import friesCheesy from "@/assets/menu/fries-cheesy.jpg";
import friesPeriCheesy from "@/assets/menu/fries-peri-cheesy.jpg";
import friesVegLoaded from "@/assets/menu/fries-veg-loaded.jpg";
import extraDip from "@/assets/menu/extra-dip.jpg";
import coolerLemonade from "@/assets/menu/cooler-lemonade.jpg";
import coolerMojito from "@/assets/menu/cooler-mojito.jpg";
import coolerBlueMojito from "@/assets/menu/cooler-blue-mojito.jpg";
import coolerKalaKhatta from "@/assets/menu/cooler-kala-khatta.jpg";
import coolerKiwiOrange from "@/assets/menu/cooler-kiwi-orange.jpg";
import brewColdCoffee from "@/assets/menu/brew-cold-coffee.jpg";
import brewCoffeeIcecream from "@/assets/menu/brew-coffee-icecream.jpg";
import brewChocolate from "@/assets/menu/brew-chocolate.jpg";
import brewOreo from "@/assets/menu/brew-oreo.jpg";
import brewStrawberry from "@/assets/menu/brew-strawberry.jpg";

type Category = "Burgers" | "Siders" | "Fries" | "Coolers" | "Cold Brews";

type Item = {
  name: string;
  desc: string;
  price: string;
  img: string;
  popular?: boolean;
  category: Category;
};

const items: Item[] = [
  // BURGERS
  { name: "Mexican Aloo Tikki Burger", desc: "Spiced potato patty with zesty Mexican salsa & crisp veggies.", price: "₹100", img: burgerAloo, category: "Burgers" },
  { name: "Bunnerette Veggie Burger", desc: "Our signature veggie patty stacked with house sauce & greens.", price: "₹130", img: burgerVeggie, category: "Burgers" },
  { name: "Cheesy Peri Peri Burger", desc: "Fiery peri peri veggie patty drowning in molten cheese.", price: "₹160", img: burgerPeriVeg, popular: true, category: "Burgers" },
  { name: "Crispy Chicken Burger", desc: "Golden-fried chicken fillet, lettuce & creamy mayo.", price: "₹130", img: burgerCrispyChicken, category: "Burgers" },
  { name: "Spicy Chicken Burger", desc: "Marinated chicken with a kick of fiery spice blend.", price: "₹150", img: burgerSpicyChicken, category: "Burgers" },
  { name: "Cheesy Chicken Burger", desc: "Juicy chicken patty smothered in cheddar — pure indulgence.", price: "₹180", img: burgerCheesyChicken, popular: true, category: "Burgers" },

  // SIDERS
  { name: "Chicken Nuggets", desc: "6 pcs of crispy, golden chicken bites with dip.", price: "₹140", img: siderNuggets, category: "Siders" },
  { name: "Veggie Fingers", desc: "6 pcs of crunchy veggie fingers, perfectly seasoned.", price: "₹140", img: siderVeggieFingers, category: "Siders" },
  { name: "Mozzarella Cheese Stix", desc: "4 pcs of gooey mozzarella sticks with marinara dip.", price: "₹140", img: siderMozzarella, popular: true, category: "Siders" },
  { name: "Chicken Cheese Balls", desc: "6 pcs of cheese-stuffed chicken bombs — crisp outside, molten inside.", price: "₹180", img: siderCheeseBalls, popular: true, category: "Siders" },

  // FRIES
  { name: "Salted Fries", desc: "Classic golden fries — crisp, hot, and lightly salted.", price: "₹100", img: friesSalted, category: "Fries" },
  { name: "Peri Peri Fries", desc: "Fries dusted with our signature peri peri spice mix.", price: "₹140", img: friesPeri, category: "Fries" },
  { name: "Cheesy Fries", desc: "Loaded with melted cheese sauce — comfort in every bite.", price: "₹160", img: friesCheesy, popular: true, category: "Fries" },
  { name: "Peri Peri Cheesy Fries", desc: "The best of both worlds — spicy peri peri meets molten cheese.", price: "₹180", img: friesPeriCheesy, popular: true, category: "Fries" },
  { name: "Veg Loaded Fries", desc: "Stacked high with veggies, cheese & sauces. A meal in itself.", price: "₹200", img: friesVegLoaded, category: "Fries" },
  { name: "Extra Dip", desc: "Add an extra dip of your choice.", price: "₹30", img: extraDip, category: "Fries" },

  // COOLERS
  { name: "Classic Lemonade", desc: "Refreshing lemon cooler to beat the Uran heat.", price: "₹80", img: coolerLemonade, category: "Coolers" },
  { name: "Virgin Mojito", desc: "Fresh mint, lime & soda — crisp and reviving.", price: "₹120", img: coolerMojito, category: "Coolers" },
  { name: "Blue Mojito", desc: "Mint-lime mojito with a splash of blue curaçao flavor.", price: "₹120", img: coolerBlueMojito, category: "Coolers" },
  { name: "Kala Khatta Mojito", desc: "Tangy desi twist with kala khatta & mint.", price: "₹120", img: coolerKalaKhatta, popular: true, category: "Coolers" },
  { name: "Kiwi Orange", desc: "Zesty kiwi & orange fusion — sweet meets tang.", price: "₹120", img: coolerKiwiOrange, category: "Coolers" },

  // COLD BREWS
  { name: "Cold Coffee White", desc: "Smooth, chilled coffee blended with creamy milk.", price: "₹100", img: brewColdCoffee, category: "Cold Brews" },
  { name: "Coffee with Icecream", desc: "Cold coffee crowned with a scoop of vanilla ice cream.", price: "₹140", img: brewCoffeeIcecream, popular: true, category: "Cold Brews" },
  { name: "Chocolate Milkshake", desc: "Thick, rich chocolate shake — every sip pure decadence.", price: "₹130", img: brewChocolate, category: "Cold Brews" },
  { name: "Oreo Milkshake", desc: "Cookies & cream blended thick with vanilla ice cream.", price: "₹130", img: brewOreo, popular: true, category: "Cold Brews" },
  { name: "Strawberry Milkshake", desc: "Fresh strawberry shake — fruity, creamy, dreamy.", price: "₹130", img: brewStrawberry, category: "Cold Brews" },
];

const categories = ["All", "Burgers", "Siders", "Fries", "Coolers", "Cold Brews"] as const;

export function Menu() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const filtered = active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <section id="menu" className="relative py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-14">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] neon-orange mb-2 sm:mb-3">The Menu</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold">
            Crafted for <span className="text-gradient">cravings</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-3 py-1.5 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm uppercase tracking-wider transition-all ${
                active === c
                  ? "bg-primary text-primary-foreground shadow-neon-cyan"
                  : "border border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 max-w-6xl mx-auto">
          {filtered.map((item) => (
            <article
              key={item.name}
              onClick={() => setExpandedItem(expandedItem === item.name ? null : item.name)}
              className="group relative rounded-xl overflow-hidden glass hover:shadow-neon-cyan transition-all duration-500 hover:-translate-y-1 flex flex-col cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className={`w-full h-full object-cover transition-all duration-700 ${expandedItem === item.name ? 'scale-110 blur-[2px] brightness-75' : 'group-hover:scale-110'}`}
                />
                <div className={`absolute inset-0 transition-all duration-300 ${expandedItem === item.name ? 'bg-background/80' : 'bg-gradient-to-t from-background via-background/30 to-transparent'}`} />
                {item.popular && (
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider bg-accent text-accent-foreground font-semibold shadow-neon-orange z-10">
                    Popular
                  </span>
                )}
                <div className={`absolute inset-0 p-4 sm:p-5 flex flex-col items-center justify-center text-center transition-all duration-500 z-10 ${expandedItem === item.name ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95 pointer-events-none'}`}>
                  <p className="text-sm sm:text-base font-medium text-foreground leading-relaxed drop-shadow-md">
                    {item.desc}
                  </p>
                </div>
              </div>
              <div className="p-3 sm:p-4 flex-1 flex flex-col relative z-20 bg-background/40 backdrop-blur-sm">
                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <h3 className="font-display text-sm sm:text-base font-bold leading-tight">{item.name}</h3>
                  <span className="font-display text-sm sm:text-base neon-cyan whitespace-nowrap">{item.price}</span>
                </div>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-auto pt-2 opacity-60 group-hover:opacity-100 transition-opacity">
                  {expandedItem === item.name ? 'Close info' : 'Tap for info'}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
