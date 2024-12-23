import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { StatusBadge } from "@/components/ui/status-badge";
import { db } from "@/lib/db";
import { AllTemplates } from "@/lib/templates/util";
import { ChevronRight, MoveRight } from "lucide-react";
import CellAction from "./cell-action";
import { ScrollArea } from "@/components/ui/scroll-area";
import { currentUser } from "@clerk/nextjs/server";

type Props = {};

export default async function page({}: Props) {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  const invoices = await db.invoice.findMany({
    where: {
      userId: user.id,
    },
  });

  return (
    <div className="space-y-10 p-2">
      <div className="rounded-lg w-full flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold flex gap-1 items-center">
            Dashboard <ChevronRight />
            <span className="text-hot-orange">All Invoices</span>
          </h2>
          <p className="text-muted-foreground text-sm">
            Manage all your invoices in one place
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {invoices.map((invoice) => {
          const Template = AllTemplates[invoice.template]?.component;

          return (
            // move to a separate component
            <div
              key={invoice.id}
              className="p-6 border border-slate-300 rounded-lg font-serif h-60 flex flex-col justify-between cursor-pointer hover:shadow-md transition-all duration-200 ease-in-out group"
            >
              <div className="flex justify-between items-center">
                {/* move this variant check inside StatusBadge */}
                <StatusBadge
                  variant={
                    invoice.status === "Draft"
                      ? "draft"
                      : invoice.status === "Paid"
                      ? "paid"
                      : invoice.status === "Overdue"
                      ? "overdue"
                      : invoice.status === "Sent"
                      ? "sent"
                      : "draft"
                  }
                >
                  {invoice.status}
                </StatusBadge>
                <CellAction data={invoice} />
              </div>
              <div>
                {/* Move this sheet to a separate file */}
                <Sheet>
                  <SheetTrigger asChild>
                    <div className="flex gap-4 items-center">
                      <h2 className="text-2xl text-slate-800">
                        {invoice.name}
                      </h2>
                      <MoveRight className="text-hot-orange group-hover:translate-x-1 transition-all" />
                    </div>
                  </SheetTrigger>
                  <SheetContent className="md:w-[42rem] w-full">
                    <p className="text-2xl font-semibold font-serif">
                      Invoice Details
                    </p>
                    <ScrollArea className="h-[96vh] mt-8">
                      <Template initialValue={JSON.parse(invoice.content)} />
                    </ScrollArea>
                  </SheetContent>
                </Sheet>

                <p className="text-muted-foreground text-sm">
                  {invoice.totalAmount} -{" "}
                  {new Date(invoice.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
