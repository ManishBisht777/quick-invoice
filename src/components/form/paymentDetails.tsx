"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import { useTemplateStrore } from "@/store/templateStore";

const formSchema = z.object({
  paymentDetails: z.object({
    bankName: z.string().min(1),
    accountName: z.string().min(1),
    accountNumber: z.string().min(1),
  }),
});

export function PaymentDetails() {
  const { paymentDetails, setPaymentDetails } = useTemplateStrore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      paymentDetails: {
        bankName: "",
        accountName: "",
        accountNumber: "",
      },
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setPaymentDetails(values.paymentDetails);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
        onChange={() => {
          console.log(form.getValues().paymentDetails);
          setPaymentDetails(form.getValues().paymentDetails);
        }}
      >
        <div className="space-y-6 mt-6">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold">Payment info</h2>
            <div className="flex flex-wrap gap-3">
              <FormField
                control={form.control}
                name={"paymentDetails.bankName"}
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="Bank name">Bank name</Label>
                    <FormControl>
                      <Input placeholder="Bank name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={"paymentDetails.accountName"}
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="Account holder name">
                      Account holder name
                    </Label>
                    <FormControl>
                      <Input placeholder="manish bisht" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={"paymentDetails.accountNumber"}
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="Account number">Account number</Label>
                    <FormControl>
                      <Input placeholder="12345678999" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
        <Button type="submit">Next</Button>
      </form>
    </Form>
  );
}
