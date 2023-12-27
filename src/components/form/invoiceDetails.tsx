"use client";

import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LayoutList } from "lucide-react";
import { Label } from "../ui/label";

interface InvoiceDetailsProps {
  form: any;
}

export function InvoiceDetails({ form }: InvoiceDetailsProps) {
  return (
    <>
      <div className="space-y-6 mt-6">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Invoice details</h2>
          <div className="flex flex-wrap gap-3">
            <FormField
              control={form.control}
              name={"invoiceDetails.issueDate"}
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="Issue date">Issue date</Label>
                  <FormControl>
                    <Input placeholder="12-12-2023" type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={"invoiceDetails.dueDate"}
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="Due date">Due date</Label>
                  <FormControl>
                    <Input placeholder="12-25-2023" type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      </div>
      <Button type="button" className="mt-4">
        <LayoutList className="mr-2" size={18} /> Next
      </Button>
    </>
  );
}
