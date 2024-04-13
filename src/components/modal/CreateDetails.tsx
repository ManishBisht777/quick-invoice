"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { useState } from "react";
import BasicDetailsForm from "../form/basicDetailsForm";

interface CreateDetailsProps {}

export default function CreateDetails({}: CreateDetailsProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="min-h-40 flex border-dashed border-2 items-center justify-center rounded-md flex-col cursor-pointer h-full gap-1 capitalize hover:bg-slate-50/40">
          <Plus size={30} />
          Create new details
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create details</DialogTitle>
          <DialogDescription>
            Create new details to autofill in invoices
          </DialogDescription>
        </DialogHeader>
        <BasicDetailsForm />
      </DialogContent>
    </Dialog>
  );
}
