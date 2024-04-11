import { buttonVariants } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { db } from "@/lib/db";
import { getSession } from "@/lib/session";
import { cn } from "@/lib/utils";
import { ChevronRight, MoreVertical, MoveRight, Star } from "lucide-react";
import Link from "next/link";
import { invoiceColumns } from "./column";
import { Badge } from "@/components/ui/badge";
import { StatusBadge } from "@/components/ui/status-badge";
import CellAction from "./cell-action";

type Props = {};

export default async function page({}: Props) {
  const session = await getSession();

  if (!session) {
    return null;
  }

  const invoices = await db.invoice.findMany({
    where: {
      userId: session.user.id,
    },
  });

  return (
    <div className="space-y-10 p-2">
      <div className="rounded-lg w-full flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold font-serif flex gap-1 items-center">
            Dashboard <ChevronRight />
            <span className="text-hot-orange">All Invoices</span>
          </h2>
          <p className="text-muted-foreground text-sm">
            Manage all your invoices in one place
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-2 gap-5">
        {invoices.map((invoice) => (
          <div
            key={invoice.id}
            className="p-6 border rounded-lg font-serif h-60 flex flex-col justify-between cursor-pointer hover:shadow-md transition-all duration-200 ease-in-out group"
          >
            <div className="flex justify-between items-center">
              <StatusBadge className="bg-purple-100 text-purple-600 border-purple-600 font-semibold px-4 py-1 font-sans tracking-wide text-xs">
                Draft
              </StatusBadge>
              <CellAction data={invoice} />
            </div>
            {/* <div className="flex gap-2 flex-wrap">
              <StatusBadge className="bg-green-100 text-green-600 border-green-600 font-semibold px-6 py-2 font-sans tracking-wide text-xs">
                PAID
              </StatusBadge>
              <StatusBadge className="bg-yellow-100 text-yellow-600 border-yellow-600 font-semibold px-6 py-2 font-sans tracking-wide text-xs">
                SENT
              </StatusBadge>
              <StatusBadge className="bg-red-100 text-red-600 border-red-600 font-semibold px-6 py-2 font-sans tracking-wide text-xs">
                OVERDUE
              </StatusBadge>
            </div> */}
            <div>
              <div className="flex gap-4 items-center">
                <h2 className="text-2xl text-slate-800">{invoice.name}</h2>
                <MoveRight className="text-hot-orange group-hover:translate-x-1 transition-all" />
              </div>
              <p className="text-muted-foreground text-sm">
                {invoice.totalAmount} -{" "}
                {new Date(invoice.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* <DataTable columns={invoiceColumns} data={invoices} /> */}
    </div>
  );
}
