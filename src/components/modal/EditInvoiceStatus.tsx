"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { status } from "@/data/status";
import { AllTemplates } from "@/lib/templates/util";
import { updateInvoiceStatus } from "@/server/actions/invoice";
import { $Enums, Invoice } from "@prisma/client";
import { Badge } from "../ui/badge";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface EditInvoiceStatusProps {
  data: Invoice;
  isOpen: boolean;
  onClose: (open: boolean) => void;
}

export const EditInvoiceStatus: React.FC<EditInvoiceStatusProps> = ({
  data,
  isOpen,
  onClose,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [invoiceStatus, setInvoiceStatus] = useState<string>(data.status);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const onSave = async () => {
    console.log("cs");
    setLoading(true);
    try {
      const response = await updateInvoiceStatus(
        data.id,
        invoiceStatus as $Enums.Status
      );
      if ("message" in response) {
        toast.error(response.message);
      } else {
        toast.success("Status updated successfully");
        router.refresh();
        onClose(false);
      }
    } catch (error) {}

    setLoading(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit status</DialogTitle>
          <DialogDescription>
            Change the status of the invoice
          </DialogDescription>
        </DialogHeader>
        <div className="flex gap-6 py-4">
          <img
            src={AllTemplates[data.template].image}
            alt=""
            className="h-80"
          />
          <div className="w-full">
            <p className="text-xl font-semibold">{data.name}</p>
            <div className="flex gap-2 mt-2">
              <Badge variant="secondary">{data.template}</Badge>
              <Badge>{data.status}</Badge>
            </div>
            <div className="flex justify-center flex-col items-center w-full mt-10">
              <h3 className="text-5xl font-bold">{data.totalAmount}</h3>
              <p className="text-xs text-muted-foreground">Amount</p>
            </div>
            <Select onValueChange={setInvoiceStatus} value={invoiceStatus}>
              <SelectTrigger className="mt-10">
                <SelectValue placeholder="Change status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Status</SelectLabel>
                  {status.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={onSave}>
            {loading && <Loader2 className="mr-2 w-4 h-4 animate-spin" />}
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
