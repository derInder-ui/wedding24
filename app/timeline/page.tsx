import { TimelineOverview } from "@/components/timeline/timeline-overview";
import { ChecklistOverview } from "@/components/timeline/checklist-overview";

export default function TimelinePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Zeitplan & Checklisten
        </h1>
        <p className="text-gray-600 mb-8">
          Behalten Sie den Überblick über alle wichtigen Termine und Aufgaben für Ihre Hochzeit.
          Unser digitaler Hochzeitsplaner hilft Ihnen, nichts zu vergessen.
        </p>
        
        <div className="grid gap-8">
          <TimelineOverview />
          <ChecklistOverview />
        </div>
      </div>
    </div>
  );
}