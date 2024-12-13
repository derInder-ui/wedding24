import { BudgetCategory, Expense } from "@/lib/types/budget";

export const budgetCategories: BudgetCategory[] = [
  { id: 1, name: "Location", planned: 8000, actual: 7500, color: "var(--chart-1)" },
  { id: 2, name: "Catering", planned: 6000, actual: 5800, color: "var(--chart-2)" },
  { id: 3, name: "Dekoration", planned: 2000, actual: 1800, color: "var(--chart-3)" },
  { id: 4, name: "Kleidung", planned: 3000, actual: 2500, color: "var(--chart-4)" },
  { id: 5, name: "Musik & Unterhaltung", planned: 1500, actual: 1200, color: "var(--chart-5)" },
];

export const expenses: Expense[] = [
  {
    id: 1,
    category: "Location",
    description: "Anzahlung Hochzeitslocation",
    amount: 2500,
    paid: true,
    dueDate: "2024-06-15",
  },
  {
    id: 2,
    category: "Catering",
    description: "Menüverkostung",
    amount: 150,
    paid: true,
    dueDate: "2024-05-20",
  },
  {
    id: 3,
    category: "Dekoration",
    description: "Blumendekoration",
    amount: 800,
    paid: false,
    dueDate: "2024-07-01",
  },
];