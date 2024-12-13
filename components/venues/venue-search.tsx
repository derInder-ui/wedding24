"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function VenueSearch() {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <Input
        type="search"
        placeholder="Location oder Stadt suchen..."
        className="pl-10 h-12"
      />
      <Button className="absolute right-0 top-0 h-12">
        Suchen
      </Button>
    </div>
  );
}