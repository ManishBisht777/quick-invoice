import BasicDetailsAction from "@/components/basicDetailsAction";
import CreateDetails from "@/components/modal/CreateDetails";

import { cn } from "@/lib/utils";
import { getBasicDetails } from "@/server/actions/basicDetails";
import { basicInvoiceDetails } from "@prisma/client";
import { ChevronRight, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default async function page() {
  const basicDetails = await getBasicDetails();

  console.log(basicDetails);

  return (
    <div className="space-y-10 p-2">
      <div className="rounded-lg w-full flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold flex gap-1 items-center">
            Dashboard <ChevronRight />
            <span className="text-hot-orange">Basic details</span>
          </h2>
          <p className="text-muted-foreground text-sm">
            Manage basic details for auto-filling invoices
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <CreateDetails />

        {basicDetails?.data?.map((detail: basicInvoiceDetails) => (
          <div
            className={cn("p-6 border border-slate-300 rounded-md relative")}
            key={detail.id}
          >
            <div className="flex gap-2 items-center">
              <div className="border-2 border-hot-orange p-2 rounded-full w-fit">
                <Image
                  src="/icons/house.png"
                  alt="logo"
                  width={20}
                  height={20}
                />
              </div>
              <div>
                <p className="font-medium text-xl capitalize">
                  {detail.detailsName}
                </p>
                {detail.email && (
                  <p className="text-sm flex gap-2 items-center text-muted-foreground">
                    <span>{detail.email}</span>
                  </p>
                )}
              </div>
            </div>
            <p className="text mt-3 flex gap-2 items-center">{detail.name}</p>
            <div className="text-xs text-muted-foreground space-y-1 flex gap-2">
              <MapPin className="w-4 h-4" />
              <div className="">
                <p className="capitalize flex gap-1 items-center">
                  {detail.address}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span>{detail.city}</span>
                  <span>{detail.state}</span>
                  <span>{detail.country}</span>
                  <span>{detail.zip}</span>
                </div>
              </div>
            </div>
            {detail.phone && (
              <p className="flex gap-2 items-center text-xs text-muted-foreground mt-1">
                <Phone className="w-4 h-4" />
                <span>{detail.phone}</span>
              </p>
            )}
            <BasicDetailsAction id={detail.id} />
          </div>
        ))}
      </div>
    </div>
  );
}
