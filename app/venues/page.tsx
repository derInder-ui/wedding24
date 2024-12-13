import { VenueSearch } from "@/components/venues/venue-search";
import { VenueList } from "@/components/venues/venue-list";
import { VenueFilters } from "@/components/venues/venue-filters";

export default function VenuesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Hochzeitslocations
        </h1>
        <p className="text-gray-600 mb-8">
          Entdecken Sie die perfekte Location für Ihre Traumhochzeit. 
          Von historischen Schlössern bis zu modernen Eventlocations - 
          finden Sie den idealen Ort für Ihren besonderen Tag.
        </p>

        <VenueSearch />
        
        <div className="grid md:grid-cols-4 gap-8 mt-8">
          <div className="md:col-span-1">
            <VenueFilters />
          </div>
          <div className="md:col-span-3">
            <VenueList />
          </div>
        </div>
      </div>
    </div>
  );
}