import { TransactionCategory, TransactionType } from "@prisma/client";

export type TransactionPercentagePerType = {
  [key in TransactionType]: number;
};

export interface TotalExpensePercategory {
  category: TransactionCategory;
  totalAmount: number;
  percentageOfTotal: number;
}
