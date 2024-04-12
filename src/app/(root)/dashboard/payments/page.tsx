import CreatePayment from "@/components/modal/CreatePayment";
import { getPaymentDetails } from "@/server/actions/paymentDetails";
import { ChevronRight, Landmark, UserRound } from "lucide-react";

export default async function page() {
  const paymentDetails = await getPaymentDetails();

  return (
    <div className="space-y-10 p-2">
      <div className="rounded-lg w-full flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold font-serif flex gap-1 items-center">
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
            <p className="flex gap-2 items-center">
              <Landmark className="w-4 h-4" />
              {detail.bankName}
            </p>
            <p className="flex gap-2 items-center">
              <UserRound className="w-4 h-4" />
              {detail.accountNumber}
            </p>
            <p className="flex gap-2 items-center">
              <UserRound className="w-4 h-4" />
              {detail.ifscCode}
            </p>
            <p className="flex gap-2 items-center">
              <UserRound className="w-4 h-4" />
              {detail.accountName}
            </p>
            <p className="flex gap-2 items-center">
              <UserRound className="w-4 h-4" />
              {detail.detailsName}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
