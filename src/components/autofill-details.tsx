import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { basicDetails } from "@/types/template";
import { basicInvoiceDetails } from "@prisma/client";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface AutofillDetailsProps {
  setValue: any;
  basicDetails: any;
}

export default function AutofillDetails({
  basicDetails,
  setValue,
}: AutofillDetailsProps) {
  const [selectedField, setSelectedField] =
    useState<basicInvoiceDetails | null>();
  const [open, setOpen] = useState(false);

  const fillDetails = () => {
    if (!selectedField) {
      toast.error("Please select a address to autofill");
      return;
    }

    setValue("basicDetails.to.address.address", selectedField.address);
    setValue("basicDetails.to.address.city", selectedField.city);
    setValue("basicDetails.to.address.country", selectedField.country);
    setValue("basicDetails.to.address.state", selectedField.state);
    setValue("basicDetails.to.phoneNumber", selectedField.phone);
    setValue("basicDetails.to.address.zipCode", selectedField.zip);
    setValue("basicDetails.to.name", selectedField.name);

    toast.success("Details auto-filled successfully");
    setOpen(false);
  };

  useEffect(() => {
    fillDetails();
  }, [selectedField]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Autofill from saved details</Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Autofill details</DialogTitle>
          <DialogDescription>
            Autofill the details with your saved details.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-3 gap-4">
          {basicDetails.map((detail: any, index: number) => (
            <div
              className={cn("p-2 border rounded-md cursor-pointer")}
              key={detail.id}
              onClick={() => {
                setSelectedField(detail);
              }}
            >
              <p className="text-sm font-medium">{detail.name}</p>
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
              {/* <pre>{JSON.stringify(detail, null, 2)}</pre> */}
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

// setValue("basicDetails.to.address.address", detail.address);
// setValue("basicDetails.to.address.city", detail.city);
// setValue("basicDetails.to.address.country", detail.country);
// setValue("basicDetails.to.address.state", detail.state);
// setValue("basicDetails.to.phoneNumber", detail.phone);
// setValue("basicDetails.to.address.zipCode", detail.zip);
// setValue("basicDetails.to.name", detail.name);
