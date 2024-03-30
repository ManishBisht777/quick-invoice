import { buttonVariants } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { db } from "@/lib/db";
import { getSession } from "@/lib/session";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import Link from "next/link";
import { invoiceColumns } from "./column";

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
    <div className="space-y-5 p-2">
      <div className="px-6 py-8 border rounded-lg w-full flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">Dashboard</h2>
          <p className="text-muted-foreground text-sm">
            Manage all your invoices in one place
          </p>
        </div>
        <Link
          className={cn(buttonVariants(), "flex gap-2")}
          href="https://github.com/manishbisht777/quick-invoice/"
        >
          <Star size={16} />
          Star
        </Link>
      </div>

      <DataTable columns={invoiceColumns} data={invoices} />
    </div>
  );
}
