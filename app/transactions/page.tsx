//export interface pageProps { }

import { db } from "../_lib/prisma";

import { DataTable } from "../_components/ui/data-table";
import { transactionColumns } from "./_columns";
import AddTransactionButton from "../_components/add-transaction-button";

export default async function TransactionsPage() {
  // Do that a take all register from my table
  const transactions = await db.transaction.findMany({});

  return (
    <div className="space-y-6 p-6">
      {/* Title and Button */}
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Tansações</h1>
        <AddTransactionButton />
      </div>
      <DataTable
        columns={transactionColumns}
        data={JSON.parse(JSON.stringify(transactions))}
      />
    </div>
  );
}
