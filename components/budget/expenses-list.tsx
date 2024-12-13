"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { expenses } from "@/lib/data/budget-data";
import { cn } from "@/lib/utils";

export function ExpensesList() {
  const [filter, setFilter] = useState<"all" | "paid" | "unpaid">("all");

  const filteredExpenses = expenses.filter((expense) => {
    if (filter === "paid") return expense.paid;
    if (filter === "unpaid") return !expense.paid;
    return true;
  });

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Ausgaben</h2>
        <div className="flex space-x-2">
          {["all", "paid", "unpaid"].map((f) => (
            <Button
              key={f}
              variant={filter === f ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(f as typeof filter)}
            >
              {f === "all" ? "Alle" : f === "paid" ? "Bezahlt" : "Offen"}
            </Button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {filteredExpenses.map((expense) => (
          <div
            key={expense.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center space-x-4">
              <Checkbox checked={expense.paid} />
              <div>
                <p className="font-medium text-gray-900">{expense.description}</p>
                <p className="text-sm text-gray-500">{expense.category}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium text-gray-900">
                {expense.amount.toLocaleString('de-DE')} €
              </p>
              <p className="text-sm text-gray-500">
                Fällig am {new Date(expense.dueDate).toLocaleDateString('de-DE')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}