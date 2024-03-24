import { buttonVariants } from "@/components/ui/button";
import { db } from "@/lib/db";
import { getSession } from "@/lib/session";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import Link from "next/link";

type Props = {};

export default async function page({}: Props) {
  const session = await getSession();

  console.log(session);
  if (!session) {
    return null;
  }

  const invoices = await db.invoice.findMany({
    where: {
      userId: session.user.id,
    },
  });

  console.log(invoices);

  return (
    <div>
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
    </div>
  );
}
