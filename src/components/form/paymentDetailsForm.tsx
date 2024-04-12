"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  savePaymentDetails,
  updatePaymentDetails,
} from "@/server/actions/paymentDetails";
import { toast } from "sonner";

// TODO: Add types for props
interface BasicDetailsFormProps {
  initialValues?: any;
  onSubmit?: () => void;
}

export const paymentDetailsSchema = z.object({
  detailsName: z.string().min(1, "Enter a name to save these details as"),
  bankName: z.string(),
  accountNumber: z.string(),
  accountName: z.string(),
  ifscCode: z.string(),
});

export default function PaymentDetailsForm({
  initialValues,
}: BasicDetailsFormProps) {
  const form = useForm<z.infer<typeof paymentDetailsSchema>>({
    resolver: zodResolver(paymentDetailsSchema),
    defaultValues: initialValues || {
      accountNumber: "",
      accountName: "",
      bankName: "",
      detailsName: "",
      ifscCode: "",
    },
  });

  const router = useRouter();

  async function onSubmit(values: z.infer<typeof paymentDetailsSchema>) {
    let data;
    if (initialValues) {
      data = await updatePaymentDetails(initialValues.id, values);
    } else {
      data = await savePaymentDetails(values);
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
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-2">
              <FormField
                control={form.control}
                name={"detailsName"}
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="Details name">Details name</Label>
                    <FormControl>
                      <Input
                        placeholder="124567864"
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
                name={"bankName"}
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="Bank's name">Bank name</Label>
                    <FormControl>
                      <Input
                        placeholder="Bank of asia"
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
                name={"accountName"}
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="Account name">Account name</Label>
                    <FormControl>
                      <Input
                        placeholder="manish bisht"
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
                name={"accountNumber"}
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="Account number">Account number</Label>
                    <FormControl>
                      <Input
                        placeholder="124567864"
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
                name={"ifscCode"}
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="IFSC code">IFSC code</Label>
                    <FormControl>
                      <Input
                        placeholder="124567864"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="w-full flex justify-end">
              <Button type="submit">Save details</Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
