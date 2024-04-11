import CreateDetails from "@/components/modal/CreateDetails";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getBasicDetails } from "@/server/actions/basicDetails";
import { basicInvoiceDetails } from "@prisma/client";
import {
  ChevronRight,
  Mail,
  MapPin,
  PencilIcon,
  Phone,
  Star,
  Trash,
  User,
} from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

const basicDetails = getBasicDetails();

export default async function page() {
  const basicDetails = await getBasicDetails();

  console.log(basicDetails);

  return (
    <div className="space-y-10 p-2">
      <div className="rounded-lg w-full flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold font-serif flex gap-1 items-center">
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
          <div className={cn("p-6 border rounded-md relative")} key={detail.id}>
            <p className="font-medium text-xl capitalize">
              {detail.detailsName}
            </p>
            <p className="text mt-3 flex gap-2 items-center">
              <User className="w-4 h-4" /> {detail.name}
            </p>
            <div className="text-sm text-muted-foreground mt-2 space-y-2">
              <div className="flex gap-2 items-start">
                <MapPin className="w-4 h-4 mt-1" />
                <div className="">
                  <p className="capitalize">{detail.address}</p>
                  <div className="flex flex-wrap gap-2">
                    <span>{detail.city}</span>
                    <span>{detail.state}</span>
                    <span>{detail.country}</span>
                    <span>{detail.zip}</span>
                  </div>
                </div>
              </div>
              {detail.email && (
                <p className="flex gap-2 items-center">
                  <Mail className="w-4 h-4" />
                  <span>{detail.email}</span>
                </p>
              )}

              {detail.phone && (
                <p className="flex gap-2 items-center">
                  <Phone className="w-4 h-4 mt-1" />
                  <span>{detail.phone}</span>
                </p>
              )}
            </div>

            <div className="absolute top-4 right-4 flex gap-2">
              {/* <Button
                className={cn(
                  buttonVariants({ variant: "destructive" }),
                  "w-6 h-6 flex justify-center items-center p-0"
                )}
              >
                <Trash className="w-3 h-3" />
              </Button> */}
              <Link
                className={cn(
                  buttonVariants(),
                  "w-6 h-6 flex justify-center items-center p-0"
                )}
                href={`/dashboard/details/${detail.id}`}
              >
                <PencilIcon className="w-3 h-3" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
