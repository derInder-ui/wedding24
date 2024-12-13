"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { budgetCategories } from "@/lib/data/budget-data";

export function BudgetOverview() {
  const totalBudget = budgetCategories.reduce((sum, cat) => sum + cat.planned, 0);
  const totalSpent = budgetCategories.reduce((sum, cat) => sum + cat.actual, 0);
  const remaining = totalBudget - totalSpent;

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Budgetübersicht</h2>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Ausgabe hinzufügen
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-green-50 rounded-lg p-4">
          <h3 className="text-sm font-medium text-green-800">Gesamtbudget</h3>
          <p className="text-2xl font-bold text-green-900">{totalBudget.toLocaleString('de-DE')} €</p>
        </div>

        <div className="bg-blue-50 rounded-lg p-4">
          <h3 className="text-sm font-medium text-blue-800">Ausgegeben</h3>
          <p className="text-2xl font-bold text-blue-900">{totalSpent.toLocaleString('de-DE')} €</p>
        </div>

        <div className="bg-purple-50 rounded-lg p-4">
          <h3 className="text-sm font-medium text-purple-800">Verbleibend</h3>
          <p className="text-2xl font-bold text-purple-900">{remaining.toLocaleString('de-DE')} €</p>
        </div>
      </div>
    </Card>
  );
}