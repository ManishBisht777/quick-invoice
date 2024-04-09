"use client";

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
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
  saveBasicDetails,
  updateBasicDetails,
} from "@/server/actions/basicDetails";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";

// TODO: Add types for props
interface BasicDetailsFormProps {
  initialValues?: any;
  onSubmit?: () => void;
}

export const basicInvoiceDetailsSchema = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  address: z.string(),
  country: z.string(),
  state: z.string(),
  zip: z.string(),
  city: z.string(),
  isSender: z.boolean(),
  detailsName: z.string().min(1, "Enter a name to save these details as"),
});

export default function BasicDetailsForm({
  initialValues,
}: BasicDetailsFormProps) {
  const form = useForm<z.infer<typeof basicInvoiceDetailsSchema>>({
    resolver: zodResolver(basicInvoiceDetailsSchema),
    defaultValues: initialValues || {
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
    let data;
    if (initialValues) {
      data = await updateBasicDetails(initialValues.id, values);
    } else {
      data = await saveBasicDetails(values);
    }
    if (data.message) {
      toast.error(data.message);
    } else {
      toast.success("Details saved successfully");
      form.reset();
      router.refresh();
    }
  }

  return (
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
                    <FormLabel>Save these details as sender details</FormLabel>
                    <FormDescription>
                      By default these details will be saved as receiver details
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
  );
}
