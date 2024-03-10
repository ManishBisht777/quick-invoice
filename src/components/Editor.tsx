"use client";

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
import {
  EditorTabs,
  EditorTabsContent,
  EditorTabsList,
  EditorTabsTrigger,
} from "./ui/editor-tabs";

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
          <EditorTabs defaultValue="user">
            <EditorTabsList>
              <EditorTabsTrigger value="user">Basic details</EditorTabsTrigger>
              <EditorTabsTrigger value="client">
                Invoice details
              </EditorTabsTrigger>
              <EditorTabsTrigger value="items">Items</EditorTabsTrigger>
              <EditorTabsTrigger value="bank details">
                Payment info
              </EditorTabsTrigger>
            </EditorTabsList>
            <EditorTabsContent value="user">
              <UserDetails form={form} />
            </EditorTabsContent>
            <EditorTabsContent value="client">
              <InvoiceDetails form={form} />
            </EditorTabsContent>
            <EditorTabsContent value="items">
              <ItemDetails form={form} />
            </EditorTabsContent>
            <EditorTabsContent value="bank details">
              <PaymentDetails form={form} />
            </EditorTabsContent>
          </EditorTabs>
        </form>
        <Modern initialValue={form.watch()} />
      </Form>
    </div>
  );
}
