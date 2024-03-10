"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { templatePropsSchema } from "@/types/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { InvoiceDetails } from "./form/invoiceDetails";
import { UserDetails } from "./form/userDetails";
import { Form } from "./ui/form";
import ItemDetails from "./form/itemDetails";
import { PaymentDetails } from "./form/paymentDetails";
import { emptyTemplateProps } from "@/config/template";
import Modern from "./templates/Modern";

export default function Editor() {
  const form = useForm<z.infer<typeof templatePropsSchema>>({
    resolver: zodResolver(templatePropsSchema),
    defaultValues: emptyTemplateProps,
  });

  function onSubmit(values: z.infer<typeof templatePropsSchema>) {
    console.log(values);
  }

  // console.log(form.getValues());

  return (
    <div className="p-2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <h1 className="text-2xl font-bold">Editor</h1>
          {/* <Tabs defaultValue="user">
            <TabsList>
              <TabsTrigger value="user">Basic details</TabsTrigger>
              <TabsTrigger value="client">Invoice details</TabsTrigger>
              <TabsTrigger value="items">Items</TabsTrigger>
              <TabsTrigger value="bank details">Payment info</TabsTrigger>
            </TabsList>
            <TabsContent value="user">
              <UserDetails form={form} />
            </TabsContent>
            <TabsContent value="client">
              <InvoiceDetails form={form} />
            </TabsContent>
            <TabsContent value="items">
              <ItemDetails form={form} />
            </TabsContent>
            <TabsContent value="bank details">
              <PaymentDetails form={form} />
            </TabsContent>
          </Tabs> */}
        </form>
        <Modern initialValue={form.watch()} />
      </Form>
    </div>
  );
}
