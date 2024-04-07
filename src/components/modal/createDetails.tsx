"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { saveBasicDetails } from "@/server/actions/basicDetails";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface CreateDetailsProps {}

export const basicInvoiceDetailsSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  address: z.string(),
  country: z.string(),
  state: z.string(),
  zip: z.string(),
  city: z.string(),
  isSender: z.boolean(),
  detailsName: z.string().min(1, "Details name is required"),
});

export default function CreateDetails({}: CreateDetailsProps) {
  const [open, setOpen] = useState<boolean>(false);

  const form = useForm<z.infer<typeof basicInvoiceDetailsSchema>>({
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
      isSender: false,
    },
  });

  const router = useRouter();

  async function onSubmit(values: z.infer<typeof basicInvoiceDetailsSchema>) {
    const data = await saveBasicDetails(values);
    if (data.message) {
      toast.error(data.message);
    } else {
      toast.success("Details saved successfully");
      form.reset();
      router.refresh();
      setOpen(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
        <div className="py-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="space-y-3">
                <h2 className="text-xl font-semibold w-fit">
                  Sender&apos;s details
                </h2>
                <div className="grid grid-cols-3 gap-2">
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
                <FormField
                  control={form.control}
                  name="isSender"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          Save these details as sender details
                        </FormLabel>
                        <FormDescription>
                          By default these details will be saved as receiver
                          details
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={"detailsName"}
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
                      <FormDescription>
                        Enter a name to save these details as
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="w-full flex justify-end">
                  <Button type="submit">Save details</Button>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}