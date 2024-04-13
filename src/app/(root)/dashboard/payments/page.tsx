import CreatePayment from "@/components/modal/CreatePayment";
import { getPaymentDetails } from "@/server/actions/paymentDetails";
import { ChevronRight, Landmark, UserRound } from "lucide-react";
import Image from "next/image";

export default async function page() {
  const paymentDetails = await getPaymentDetails();

  return (
    <div className="space-y-10 p-2">
      <div className="rounded-lg w-full flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold flex gap-1 items-center">
            Dashboard <ChevronRight />
            <span className="text-hot-orange">Payment details</span>
          </h2>
          <p className="text-muted-foreground text-sm">
            Manage all your payment details for autofill in invoice
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <CreatePayment />
        {paymentDetails.data?.map((detail) => (
          <div
            className="border p-6 rounded-md space-y-1 relative"
            key={detail.id}
          >
            <div className="flex gap-3 items-center">
              <div className="relative w-10 h-10 border-2 rounded-full border-hot-orange">
                <Image
                  src="/icons/bank.svg"
                  layout="fill"
                  objectFit="contain"
                  alt="bank"
                />
              </div>
              <div>
                <p className="font-medium text-xl capitalize">
                  {detail.detailsName}
                </p>
                <p className="text-sm flex gap-2 items-center text-muted-foreground">
                  {detail.bankName}
                </p>
              </div>
            </div>
            <div className="ml-[3.25rem] text-muted-foreground">
              <p>{detail.accountNumber}</p>
              <p>{detail.ifscCode}</p>
              <p>{detail.accountName}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
