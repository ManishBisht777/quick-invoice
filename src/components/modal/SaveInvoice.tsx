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
import { Info, Loader2 } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { Checkbox } from "../ui/checkbox";

interface SaveInvoiceProps {
  // TODO: Define the type for initialValues
  initialValues: any;
}

export default function SaveInvoice({ initialValues }: SaveInvoiceProps) {
  const [invoiceName, setInvoiceName] = useState<string>("");
  const [saveClientDetails, setSaveClientDetails] = useState<boolean>(false);

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
        totalAmount,
        saveClientDetails
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
        <div className="space-y-5 mt-2">
          <div className="space-y-2">
            <p className="text-sm">Name</p>
            <Input
              id="name"
              value={invoiceName}
              placeholder="Enter a name for the invoice"
              className="col-span-3"
              onChange={(e) => setInvoiceName(e.target.value)}
            />
          </div>

          <div className="space-y-1">
            <div className="space-x-2 flex items-center">
              <Checkbox
                id="save"
                checked={saveClientDetails}
                onCheckedChange={(value) =>
                  setSaveClientDetails(value as boolean)
                }
              />
              <label
                htmlFor="save"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Save client details for future
              </label>
            </div>
            <p className="text-muted-foreground text-xs">
              We will save the client details for future so you don&apos;t have
              to fill them again
            </p>
          </div>

          {/* <div className="p-2 rounded-md bg-blue-100 flex gap-1 items-center">
            <Info className="w-4 h-4 text-blue-500" />
            <p className="text-sm text-blue-500">
              You can edit the client details before saving the invoice
            </p>
          </div> */}
        </div>
        <DialogFooter>
          <Button onClick={onSaveInvoice} type="button" className="px-6">
            {loading && <Loader2 className="w-4 h-4 animate-spin" />} Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
