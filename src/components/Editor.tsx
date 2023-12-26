"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { emptyTemplateProps, templatePropsSchema } from "@/types/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, useForm } from "react-hook-form";
import { z } from "zod";
import { UserDetails } from "./form/userDetails";

export default function Editor() {
  const form = useForm<z.infer<typeof templatePropsSchema>>({
    resolver: zodResolver(templatePropsSchema),
    defaultValues: emptyTemplateProps,
  });

  function onSubmit(values: z.infer<typeof templatePropsSchema>) {
    console.log(values);
  }

  return (
    <div className="p-2">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8"
          onChange={() => {}}
        >
          <h1 className="my-4 text-2xl font-bold">Editor</h1>
          <Tabs defaultValue="user">
            <TabsList>
              <TabsTrigger value="user">Basic details</TabsTrigger>
              <TabsTrigger value="client">Invoice details</TabsTrigger>
              <TabsTrigger value="items">Items</TabsTrigger>
              <TabsTrigger value="bank details">Payment info</TabsTrigger>
            </TabsList>
            <TabsContent value="user">
              <UserDetails
                formValues={form.getValues().basicDetails}
                form={form}
              />
            </TabsContent>
            {/* <TabsContent value="client">
              <InvoiceDetails />
            </TabsContent>
            <TabsContent value="items">
              <ItemDetails />
            </TabsContent>
            <TabsContent value="bank details">
              <PaymentDetails />
            </TabsContent> */}
          </Tabs>
        </form>
      </Form>
    </div>
  );
}
