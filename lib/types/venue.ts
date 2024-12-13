export interface Venue {
  id: number;
  name: string;
  location: string;
  city: string;
  state: string;
  capacity: {
    min: number;
    max: number;
  };
  priceRange: {
    min: number;
    max: number;
  };
  rating: number;
  reviews: number;
  features: string[];
  images: string[];
  description: string;
  indoor: boolean;
  outdoor: boolean;
  availability: string[];
}

export type VenueFilter = {
  location: string;
  capacity: number;
  maxPrice: number;
  indoor: boolean;
  outdoor: boolean;
};