import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import usePaymentDetails from "@/hooks/usePaymentDetails";
import { cn } from "@/lib/utils";
import { paymentDetails } from "@prisma/client";
import { useState } from "react";
import { toast } from "sonner";

interface AutofillPaymentProps {
  setValue: any;
}

export default function AutofillPayment({ setValue }: AutofillPaymentProps) {
  const [open, setOpen] = useState(false);
  const { basicDetails } = usePaymentDetails();

  const fillDetails = (details: paymentDetails) => {
    toast.success("Details auto-filled successfully");

    setValue("paymentDetails.bankName", details.bankName);
    setValue("paymentDetails.accountNumber", details.accountNumber);
    setValue("paymentDetails.ifscCode", details.ifscCode);

    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="z-50" asChild>
        <Button>Autofill</Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Autofill details</DialogTitle>
          <DialogDescription>
            Autofill the details with your saved details.
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-3 gap-4 mt-5">
          {basicDetails.map((detail) => (
            <div
              className={cn("p-2 border rounded-md cursor-pointer")}
              key={detail.id}
              onClick={() => {
                fillDetails(detail);
              }}
            >
              <p className="text-sm font-medium">{detail.bankName}</p>
              <p className="text-xs text-gray-500">{detail.accountNumber}</p>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
