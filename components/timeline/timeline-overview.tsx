"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const timelineStages = [
  {
    id: 1,
    title: "12+ Monate vorher",
    tasks: [
      "Hochzeitstermin festlegen",
      "Budget planen",
      "Location suchen und buchen",
      "Gästeliste erstellen",
    ],
    status: "completed",
  },
  {
    id: 2,
    title: "9-12 Monate vorher",
    tasks: [
      "Dienstleister buchen (Fotograf, DJ, etc.)",
      "Save-the-Date Karten versenden",
      "Hochzeitskleid aussuchen",
      "Trauzeugen bestimmen",
    ],
    status: "in-progress",
  },
  {
    id: 3,
    title: "6-9 Monate vorher",
    tasks: [
      "Einladungskarten gestalten und versenden",
      "Eheringe aussuchen",
      "Hochzeitstorte bestellen",
      "Unterkünfte für Gäste organisieren",
    ],
    status: "upcoming",
  },
];

export function TimelineOverview() {
  const [selectedStage, setSelectedStage] = useState(timelineStages[0]);

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Zeitplan</h2>
        <Button variant="outline">
          <Calendar className="h-4 w-4 mr-2" />
          Zum Kalender
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="space-y-4">
          {timelineStages.map((stage) => (
            <div
              key={stage.id}
              className={cn(
                "p-4 rounded-lg cursor-pointer transition-colors",
                selectedStage.id === stage.id
                  ? "bg-pink-50 border border-pink-200"
                  : "hover:bg-gray-50 border border-transparent",
                {
                  "border-l-4 border-l-green-500": stage.status === "completed",
                  "border-l-4 border-l-blue-500": stage.status === "in-progress",
                  "border-l-4 border-l-gray-300": stage.status === "upcoming",
                }
              )}
              onClick={() => setSelectedStage(stage)}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-gray-900">{stage.title}</h3>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          ))}
        </div>

        <div className="md:col-span-2">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4">{selectedStage.title}</h3>
            <ul className="space-y-3">
              {selectedStage.tasks.map((task, index) => (
                <li key={index} className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-pink-500 mr-3" />
                  <span className="text-gray-700">{task}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Card>
  );
}