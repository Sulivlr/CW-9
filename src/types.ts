export interface Category {
  id: string;
  name: string;
  type: CategoryType;
}

export type CategoryType = 'income' | 'expense';

export interface ApiCategory {
  name: string;
  type: CategoryType;
}

export interface ApiCategoryList {
  [id: string]: ApiCategory;
}

export interface Transaction {
  id: string;
  category: Category;
  createdAt: string;
  amount: number;
}

export interface ApiTransaction {
  id: string;
  amount: number;
  createdAt: string;
}

export interface ApiTransactions {
  [id: string]: ApiTransaction;
}