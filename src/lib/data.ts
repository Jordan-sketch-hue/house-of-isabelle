export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  category: "bundles" | "closures" | "wigs" | "raw";
  textures: string[];
  lengths: number[];
  priceMap: Record<number, number>;
  description: string;
  details: string[];
  image: string;
  images: string[];
  featured: boolean;
  badge?: string;
}

export const products: Product[] = [
  {
    id: "vietnamese-straight",
    slug: "vietnamese-straight",
    name: "Vietnamese Straight",
    subtitle: "Raw Single Donor",
    category: "bundles",
    textures: ["Straight"],
    lengths: [12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
    priceMap: {
      12: 10500, 14: 11500, 16: 12500, 18: 13500, 20: 14500,
      22: 16000, 24: 18000, 26: 20000, 28: 22000, 30: 25000,
    },
    description:
      "Sourced from a single Vietnamese donor. Silky, bone-straight and naturally lustrous — holds a curl, takes colour and lasts for years with proper care.",
    details: [
      "Single donor raw hair",
      "Can be coloured up to 613",
      "Minimal shedding & tangling",
      "Full cuticle aligned",
    ],
    image: "/images/vietnamese-straight.jpg",
    images: ["/images/vietnamese-straight.jpg"],
    featured: true,
    badge: "Best Seller",
  },
  {
    id: "burmese-curly",
    slug: "burmese-curly",
    name: "Burmese Curly",
    subtitle: "Raw Single Donor",
    category: "bundles",
    textures: ["Curly"],
    lengths: [10, 12, 14, 16, 18, 20, 22, 24],
    priceMap: {
      10: 12000, 12: 13500, 14: 15000, 16: 16500, 18: 18000,
      20: 20000, 22: 22500, 24: 25000,
    },
    description:
      "Tight, luxurious curl pattern from raw Burmese hair. Natural volume that blends seamlessly with Type 3–4 textures.",
    details: [
      "Single donor raw hair",
      "Retains curl pattern when wet",
      "Low-maintenance natural look",
      "Full cuticle aligned",
    ],
    image: "/images/burmese-curly.jpg",
    images: ["/images/burmese-curly.jpg"],
    featured: true,
    badge: "New Arrival",
  },
  {
    id: "body-wave",
    slug: "body-wave",
    name: "Body Wave",
    subtitle: "Raw Single Donor",
    category: "bundles",
    textures: ["Body Wave"],
    lengths: [12, 14, 16, 18, 20, 22, 24, 26, 28],
    priceMap: {
      12: 11000, 14: 12000, 16: 13500, 18: 15000, 20: 16500,
      22: 18500, 24: 21000, 26: 23000, 28: 26000,
    },
    description:
      "Effortless S-wave movement that flows naturally. Versatile enough to straighten or enhance the wave for full body.",
    details: [
      "Single donor raw hair",
      "Consistent S-wave pattern",
      "Versatile — straight or wavy",
      "Full cuticle aligned",
    ],
    image: "/images/body-wave.jpg",
    images: ["/images/body-wave.jpg"],
    featured: true,
  },
  {
    id: "hd-lace-closure",
    slug: "hd-lace-closure",
    name: "HD Lace Closure",
    subtitle: "5×5 Invisible Lace",
    category: "closures",
    textures: ["Straight", "Body Wave", "Curly"],
    lengths: [14, 16, 18, 20],
    priceMap: { 14: 18000, 16: 21000, 18: 24000, 20: 28000 },
    description:
      "Ultra-thin HD lace that melts into any skin tone. Pairs with any of our bundle sets for an undetectable install.",
    details: [
      "5×5 HD transparent lace",
      "Pre-plucked natural hairline",
      "Bleached knots",
      "Fits all skin tones",
    ],
    image: "/images/hd-lace-closure.jpg",
    images: ["/images/hd-lace-closure.jpg"],
    featured: false,
  },
  {
    id: "full-lace-wig",
    slug: "full-lace-wig",
    name: "Full Lace Wig",
    subtitle: "Raw Vietnamese · Custom",
    category: "wigs",
    textures: ["Straight", "Body Wave"],
    lengths: [16, 18, 20, 22, 24, 26],
    priceMap: {
      16: 65000, 18: 72000, 20: 80000, 22: 88000, 24: 98000, 26: 110000,
    },
    description:
      "Full perimeter lace for maximum styling freedom. Installed by our certified team or delivered ready to wear.",
    details: [
      "Full perimeter HD lace",
      "Raw Vietnamese hair",
      "Custom density available",
      "Pre-customised on request",
    ],
    image: "/images/full-lace-wig.jpg",
    images: ["/images/full-lace-wig.jpg"],
    featured: true,
    badge: "Signature",
  },
];

export const getFeatured = () => products.filter((p) => p.featured);
export const getBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);
export const getByCategory = (cat: Product["category"]) =>
  products.filter((p) => p.category === cat);
