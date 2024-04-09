"use client";

import CreateDetails from "@/components/modal/CreateDetails";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getBasicDetails } from "@/server/actions/basicDetails";
import { basicInvoiceDetails } from "@prisma/client";
import { PencilIcon, Star } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

export default async function page() {
  const basicDetails = await getBasicDetails();

  if (basicDetails.status === "error") {
    toast.error(basicDetails.message);
  }

  return (
    <div className="space-y-5 p-2">
      <div className="px-6 py-8 border rounded-lg w-full flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">Saved Details</h2>
          <p className="text-muted-foreground text-sm">
            Manage saved details for autofill
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

      <div className="grid grid-cols-4 gap-4">
        <CreateDetails />

        {basicDetails?.data?.map((detail: basicInvoiceDetails) => (
          <div className={cn("p-2 border rounded-md relative")} key={detail.id}>
            <p className="font-medium">{detail.detailsName}</p>
            <p className="text-sm text-muted-foreground font-medium">
              {detail.name}
            </p>
            <div className="text-xs text-muted-foreground mt-1">
              <p>{detail.address}</p>
              <div className="flex gap-1">
                <p>{detail.city}</p>
                <p>{detail.state}</p>
                <span>{detail.country}</span>
                <span>{detail.zip}</span>
              </div>
              <span>{detail.phone}</span>
            </div>

            <Link
              className={cn(
                buttonVariants(),
                "absolute top-2 right-2 w-6 h-6 flex justify-center items-center p-0"
              )}
              href={`/dashboard/details/${detail.id}`}
            >
              <PencilIcon className="w-3 h-3" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
