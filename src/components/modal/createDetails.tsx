"use client";

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
import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Label } from "../ui/label";
import { useForm } from "react-hook-form";
import { basicInvoiceDetails } from "@prisma/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

interface CreateDetailsProps {}

const basicInvoiceDetailsSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  address: z.string(),
  country: z.string(),
  state: z.string(),
  zip: z.string(),
});

export default function CreateDetails({}: CreateDetailsProps) {
  const form = useForm<basicInvoiceDetails>({
    resolver: zodResolver(basicInvoiceDetailsSchema),
    defaultValues: {
      address: "",
      city: "",
      country: "",
      detailsName: "",
      name: "",
      phone: "",
      state: "",
      zip: "",
      email: "",
    },
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex border-dashed items-center justify-center border h-40 rounded-md flex-col cursor-pointer">
          <Plus size={24} />
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
        <div className="grid grid-cols-2 gap-4 py-4">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold w-fit">
              Sender&apos;s details
            </h2>
            <div className="flex flex-wrap gap-3">
              <FormField
                control={form.control}
                name={"name"}
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="Sender's name">Name</Label>
                    <FormControl>
                      <Input
                        placeholder="Manish bisht"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={"email"}
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="Sender's Email">Email</Label>
                    <FormControl>
                      <Input
                        placeholder="Manish@example.com"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={"phone"}
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="Sender's mobile number">Phone no</Label>
                    <FormControl>
                      <Input
                        placeholder="+91 1234567890"
                        type="number"
                        onChange={field.onChange}
                        ref={field.ref}
                        name={field.name}
                        onBlur={field.onBlur}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={"address"}
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="Sender's Address">Address</Label>
                    <FormControl>
                      <Input
                        placeholder="Street No 45, X - Block"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={"country"}
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="Sender's country">Country</Label>
                    <FormControl>
                      <Input
                        placeholder="India"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={"state"}
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="Sender's state">State</Label>
                    <FormControl>
                      <Input
                        placeholder="Delhi"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={"zip"}
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="Sender's zipcode">Zipcode</Label>
                    <FormControl>
                      <Input
                        placeholder="110034"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
