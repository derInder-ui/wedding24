"use client";

import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export function VenueFilters() {
  const [capacity, setCapacity] = useState([50]);
  const [priceRange, setPriceRange] = useState([10000]);
  const [indoor, setIndoor] = useState(true);
  const [outdoor, setOutdoor] = useState(true);

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold mb-4">Filter</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Gästeanzahl</Label>
              <Slider
                value={capacity}
                onValueChange={setCapacity}
                max={500}
                step={10}
              />
              <span className="text-sm text-gray-500">
                Bis zu {capacity} Gäste
              </span>
            </div>

            <div className="space-y-2">
              <Label>Maximales Budget</Label>
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={20000}
                step={500}
              />
              <span className="text-sm text-gray-500">
                Bis zu {priceRange[0].toLocaleString('de-DE')} €
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="indoor">Indoor Location</Label>
                <Switch
                  id="indoor"
                  checked={indoor}
                  onCheckedChange={setIndoor}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="outdoor">Outdoor Location</Label>
                <Switch
                  id="outdoor"
                  checked={outdoor}
                  onCheckedChange={setOutdoor}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
