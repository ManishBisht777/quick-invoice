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
  issueDate: z.string().min(1),
  dueDate: z.string().min(1),
  currency: z.string().min(1),
});

export function InvoiceDetails() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      issueDate: "",
      dueDate: "",
      currency: "",
    },
  });

  const { invoiceDetails, setInvoiceDetails } = useTemplateStrore();

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setInvoiceDetails(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-6 mt-6">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold">Invoice details</h2>
            <div className="flex flex-wrap gap-3">
              <FormField
                control={form.control}
                name={"issueDate"}
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="Issue date">Issue date</Label>
                    <FormControl>
                      <Input
                        placeholder="12-12-2023"
                        type="date"
                        value={invoiceDetails?.issueDate}
                        onChange={(e) =>
                          setInvoiceDetails({
                            ...invoiceDetails,
                            issueDate: e.target.value,
                          } as z.infer<typeof formSchema>)
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={"dueDate"}
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="Due date">Due date</Label>
                    <FormControl>
                      <Input
                        placeholder="12-25-2023"
                        type="date"
                        value={invoiceDetails?.dueDate}
                        onChange={(e) =>
                          setInvoiceDetails({
                            ...invoiceDetails,
                            dueDate: e.target.value,
                          } as z.infer<typeof formSchema>)
                        }
                      />
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
