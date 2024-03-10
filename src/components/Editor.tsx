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
import { ScrollArea } from "./ui/scroll-area";
import {
  FcBusinessContact,
  FcCurrencyExchange,
  FcMoneyTransfer,
  FcTemplate,
  FcViewDetails,
} from "react-icons/fc";

export default function Editor() {
  const form = useForm<z.infer<typeof templatePropsSchema>>({
    resolver: zodResolver(templatePropsSchema),
    defaultValues: emptyTemplateProps,
  });

  function onSubmit(values: z.infer<typeof templatePropsSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <ScrollArea className="h-screen rounded-md border p-4">
          <EditorTabs className="flex h-screen" defaultValue="user">
            <EditorTabsList>
              <EditorTabsTrigger value="templates">
                <FcTemplate size={40} />
                Templates
              </EditorTabsTrigger>

              <EditorTabsTrigger value="user">
                <FcBusinessContact size={40} />
                <p>Basic</p>
              </EditorTabsTrigger>

              <EditorTabsTrigger value="client">
                <FcCurrencyExchange size={40} />
                <p>Invoice</p>
              </EditorTabsTrigger>
              <EditorTabsTrigger value="items">
                <FcViewDetails size={40} />
                Items
              </EditorTabsTrigger>
              <EditorTabsTrigger value="bank details">
                <FcMoneyTransfer size={40} />
                Payment
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
        </ScrollArea>
      </form>
      <div className="flex flex-1 justify-center items-center">
        <Modern initialValue={form.watch()} />
      </div>
    </Form>
  );
}
