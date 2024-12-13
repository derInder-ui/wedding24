import { Venue } from "@/lib/types/venue";

export const venues: Venue[] = [
  {
    id: 1,
    name: "Schloss Schönbrunn",
    location: "Schönbrunner Schlossstraße 47",
    city: "München",
    state: "Bayern",
    capacity: {
      min: 50,
      max: 200,
    },
    priceRange: {
      min: 5000,
      max: 15000,
    },
    rating: 4.8,
    reviews: 156,
    features: [
      "Historisches Gebäude",
      "Parkanlage",
      "Catering verfügbar",
      "Parkplätze",
      "Barrierefreier Zugang",
    ],
    images: [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3",
      "https://images.unsplash.com/photo-1519741347686-c1e0b7cf8b2a",
    ],
    description: "Ein majestätisches Schloss mit weitläufiger Parkanlage, perfekt für eine märchenhafte Hochzeit.",
    indoor: true,
    outdoor: true,
    availability: ["2024-06-15", "2024-07-20", "2024-08-10"],
  },
  {
    id: 2,
    name: "Weingut Rosenberg",
    location: "Weinstraße 123",
    city: "Stuttgart",
    state: "Baden-Württemberg",
    capacity: {
      min: 30,
      max: 120,
    },
    priceRange: {
      min: 3000,
      max: 8000,
    },
    rating: 4.6,
    reviews: 89,
    features: [
      "Weinkeller",
      "Terrasse",
      "Eigenes Catering",
      "Weinverkostung",
      "Übernachtungsmöglichkeiten",
    ],
    images: [
      "https://images.unsplash.com/photo-1510076857177-7470076d4098",
      "https://images.unsplash.com/photo-1522413452208-996ff3f3e740",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3",
    ],
    description: "Romantisches Weingut inmitten von Weinbergen mit rustikalem Charme und exquisiten Weinen.",
    indoor: true,
    outdoor: true,
    availability: ["2024-05-25", "2024-06-08", "2024-09-14"],
  },
];