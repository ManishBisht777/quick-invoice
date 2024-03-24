"use client";

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
import { Input } from "@/components/ui/input";
import { useSession } from "next-auth/react";
import saveInvoice from "@/lib/actions/saveInvoice";
import { useState } from "react";

interface SaveInvoiceProps {
  // TODO: Define the type for initialValues
  initialValues: any;
}

export default function SaveInvoice({ initialValues }: SaveInvoiceProps) {
  const [invoiceName, setInvoiceName] = useState<string>("");

  // const saveInvoice = async () => {
  //   console.log(invoiceName);
  // };

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
        </div>
        <DialogFooter>
          <Button onClick={() => saveInvoice()} type="button">
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
