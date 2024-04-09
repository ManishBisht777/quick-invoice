import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { basicInvoiceDetails } from "@prisma/client";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTriggerV2 } from "./ui/tabs";
import useClientDetails from "@/hooks/useClientDetails";

interface AutofillDetailsProps {
  setValue: any;
}

export default function AutofillDetails({ setValue }: AutofillDetailsProps) {
  const [open, setOpen] = useState(false);
  const { basicDetails } = useClientDetails();

  const fillDetails = (isSender: boolean, details: basicInvoiceDetails) => {
    if (isSender) {
      setValue("basicDetails.from.address.address", details.address);
      setValue("basicDetails.from.address.city", details.city);
      setValue("basicDetails.from.address.country", details.country);
      setValue("basicDetails.from.address.state", details.state);
      setValue("basicDetails.from.phoneNumber", details.phone);
      setValue("basicDetails.from.address.zipCode", details.zip);
      setValue("basicDetails.from.name", details.name);
    } else {
      setValue("basicDetails.to.address.address", details.address);
      setValue("basicDetails.to.address.city", details.city);
      setValue("basicDetails.to.address.country", details.country);
      setValue("basicDetails.to.address.state", details.state);
      setValue("basicDetails.to.phoneNumber", details.phone);
      setValue("basicDetails.to.address.zipCode", details.zip);
      setValue("basicDetails.to.name", details.name);
    }

    toast.success("Details auto-filled successfully");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="z-50" asChild>
        <Button>Saved details</Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Autofill details</DialogTitle>
          <DialogDescription>
            Autofill the details with your saved details.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="receiver">
          <TabsList className="grid grid-cols-2 gap-4 w-full">
            <TabsTriggerV2 value="sender">Sender</TabsTriggerV2>
            <TabsTriggerV2 value="receiver">Receiver</TabsTriggerV2>
          </TabsList>
          <TabsContent value="sender">
            <div className="grid grid-cols-3 gap-4 mt-5">
              {basicDetails
                .filter((detail) => detail.isSender)
                .map((detail) => (
                  <div
                    className={cn("p-2 border rounded-md cursor-pointer")}
                    key={detail.id}
                    onClick={() => {
                      fillDetails(true, detail);
                    }}
                  >
                    <p className="text-sm font-medium">{detail.detailsName}</p>
                    <div className="text-xs text-muted-foreground mt-1">
                      <p>{detail.name}</p>
                      <p>{detail.address}</p>
                      <div className="flex gap-1">
                        <p>{detail.city}</p>
                        <p>{detail.state}</p>
                        <span>{detail.country}</span>
                        <span>{detail.zip}</span>
                      </div>
                      <span>{detail.phone}</span>
                    </div>
                  </div>
                ))}
            </div>
          </TabsContent>
          <TabsContent value="receiver">
            <div className="grid grid-cols-3 gap-4 mt-5">
              {basicDetails
                .filter((detail) => !detail.isSender)
                .map((detail) => (
                  <div
                    className={cn("p-2 border rounded-md cursor-pointer")}
                    key={detail.id}
                    onClick={() => {
                      fillDetails(false, detail);
                    }}
                  >
                    <p className="text-sm font-medium">{detail.detailsName}</p>
                    <div className="text-xs text-muted-foreground mt-1">
                      <p>{detail.name}</p>
                      <p>{detail.address}</p>
                      <div className="flex gap-1">
                        <p>{detail.city}</p>
                        <p>{detail.state}</p>
                        <span>{detail.country}</span>
                        <span>{detail.zip}</span>
                      </div>
                      <span>{detail.phone}</span>
                    </div>
                  </div>
                ))}
            </div>
          </TabsContent>
        </Tabs>
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
