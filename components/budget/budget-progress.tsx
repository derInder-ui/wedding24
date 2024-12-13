"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { budgetCategories } from "@/lib/data/budget-data";

export function BudgetProgress() {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Budgetverteilung</h2>
      
      <div className="space-y-6">
        {budgetCategories.map((category) => {
          const percentage = (category.actual / category.planned) * 100;
          
          return (
            <div key={category.id}>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">
                  {category.name}
                </span>
                <span className="text-sm text-gray-500">
                  {category.actual.toLocaleString('de-DE')} € / {category.planned.toLocaleString('de-DE')} €
                </span>
              </div>
              <Progress
                value={percentage}
                className="h-2"
                style={{ backgroundColor: `${category.color}20` }} // 20 is hex for 12% opacity
                indicatorStyle={{ backgroundColor: category.color }}
              />
            </div>
          );
        })}
      </div>
    </Card>
  );
}