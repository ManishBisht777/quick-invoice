"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import saveInvoice from "@/server/actions/saveInvoice";
import { $Enums } from "@prisma/client";
import { Loader2 } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

interface SaveInvoiceProps {
  // TODO: Define the type for initialValues
  initialValues: any;
}

export default function SaveInvoice({ initialValues }: SaveInvoiceProps) {
  const [invoiceName, setInvoiceName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const params = useParams();
  const templateType = params.Id as $Enums.Template;

  const onSaveInvoice = async () => {
    if (!invoiceName || !templateType) {
      toast.error("Please enter a name for the invoice");
      return;
    }

    setLoading(true);
    try {
      const total = initialValues.items.reduce(
        (acc: number, item: any) => acc + item.amount,
        0
      );

      const taxPercentage = initialValues.tax;
      const taxAmount = (total * taxPercentage) / 100;

      const discountPercentage = initialValues.discount;
      const discountAmount = (total * discountPercentage) / 100;

      const shippingPercentage = initialValues.shipping;
      const shippingAmount = (total * shippingPercentage) / 100;

      const totalAmount = total + taxAmount - discountAmount + shippingAmount;

      const data = await saveInvoice(
        initialValues,
        invoiceName,
        templateType,
        totalAmount
      );

      if ("message" in data) {
        toast.error(data.message);
      } else {
        toast.success("Invoice saved successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error saving invoice");
    }
    setLoading(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Save Invoice</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Save Invoice</DialogTitle>
        </DialogHeader>
        <div className="space-y-1 mt-2">
          <p className="text-sm">Name</p>
          <Input
            id="name"
            value={invoiceName}
            className="col-span-3"
            onChange={(e) => setInvoiceName(e.target.value)}
          />

          <div>
            <Input
              type="checkbox"
              className="text-primary-500"
              id="send-email"
            />
            Save sender details for future
          </div>
        </div>
        <DialogFooter>
          <Button onClick={onSaveInvoice} type="button">
            {loading && <Loader2 className="w-4 h-4 animate-spin" />} Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
