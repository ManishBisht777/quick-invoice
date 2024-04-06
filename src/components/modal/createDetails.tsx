import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Plus } from "lucide-react";

interface CreateDetailsProps {}

export default function CreateDetails({}: CreateDetailsProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex border-dashed items-center justify-center border h-40 rounded-md flex-col cursor-pointer">
          <Plus size={24} />
          Create new details
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create details</DialogTitle>
          <DialogDescription>
            Create new details to autofill in invoices
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 py-4">
          <div>
            <label className="text-sm" htmlFor="name">
              Name
            </label>
            <Input placeholder="John Doe" />
          </div>
          <div>
            <label className="text-sm" htmlFor="address">
              Address
            </label>
            <Input placeholder="123, Main St" />
          </div>
          <div>
            <label className="text-sm" htmlFor="city">
              City
            </label>
            <Input placeholder="New York" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
