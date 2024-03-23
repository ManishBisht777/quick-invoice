"use client";

import * as z from "zod";

import { Button } from "@/components/ui/button";
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
    <>
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
      <Button className="mt-4" type="submit">
        Next
      </Button>
    </>
  );
}
