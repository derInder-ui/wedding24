export interface Expense {
  id: number;
  category: string;
  description: string;
  amount: number;
  paid: boolean;
  dueDate: string;
}

export interface BudgetCategory {
  id: number;
  name: string;
  planned: number;
  actual: number;
  color: string;
}