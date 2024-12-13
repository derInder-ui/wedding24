import { BudgetOverview } from "@/components/budget/budget-overview";
import { ExpensesList } from "@/components/budget/expenses-list";
import { BudgetProgress } from "@/components/budget/budget-progress";

export default function BudgetPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Budgetplanung
        </h1>
        <p className="text-gray-600 mb-8">
          Behalten Sie Ihr Hochzeitsbudget im Überblick und planen Sie Ihre Ausgaben smart.
          Unser Budgetplaner hilft Ihnen, Ihre finanziellen Ziele im Auge zu behalten.
        </p>
        
        <div className="grid gap-8">
          <BudgetOverview />
          <div className="grid md:grid-cols-2 gap-8">
            <ExpensesList />
            <BudgetProgress />
          </div>
        </div>
      </div>
    </div>
  );
}