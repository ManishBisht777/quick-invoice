"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
interface PaymentDetailsProps {
  form: any;
}

export function PaymentDetails({ form }: PaymentDetailsProps) {
  return (
    <div className="space-y-6 mt-6">
      <div className="space-y-3">
        <h2 className="text-xl font-semibold">Payment info</h2>
        <div className="grid md:grid-cols-3 grid-cols-2 gap-3">
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
                <Label htmlFor="Account holder name">Account holder name</Label>
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
          <FormField
            control={form.control}
            name={"paymentDetails.tax"}
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="Tax">Tax</Label>
                <FormControl>
                  <Input type="number" placeholder="30%" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={"paymentDetails.discount"}
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="Discount">Discount</Label>
                <FormControl>
                  <Input type="number" placeholder="5%" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={"paymentDetails.shipping"}
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="Shipping">Shipping</Label>
                <FormControl>
                  <Input type="number" placeholder="5%" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  );
}
