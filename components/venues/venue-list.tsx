"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Users, Euro } from "lucide-react";
import { venues } from "@/lib/data/venues-data";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function VenueList() {
  return (
    <div className="space-y-6">
      {venues.map((venue) => (
        <Card key={venue.id} className="overflow-hidden">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative h-64 md:h-full">
              <Image
                src={venue.images[0]}
                alt={venue.name}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="p-6 md:col-span-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {venue.name}
                  </h3>
                  <p className="text-gray-500 flex items-center mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    {venue.city}, {venue.state}
                  </p>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-1" />
                  <span className="font-medium">{venue.rating}</span>
                  <span className="text-gray-500 ml-1">
                    ({venue.reviews} Bewertungen)
                  </span>
                </div>
              </div>

              <p className="mt-4 text-gray-600">{venue.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {venue.features.slice(0, 3).map((feature, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                  >
                    {feature}
                  </span>
                ))}
                {venue.features.length > 3 && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    +{venue.features.length - 3} weitere
                  </span>
                )}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex space-x-4">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">
                      {venue.capacity.min}-{venue.capacity.max} Gäste
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Euro className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">
                      {venue.priceRange.min.toLocaleString('de-DE')} - {venue.priceRange.max.toLocaleString('de-DE')} €
                    </span>
                  </div>
                </div>
                <Button>Details ansehen</Button>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}