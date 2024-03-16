"use client";

import { emptyTemplateProps } from "@/config/template";
import { AllTemplates } from "@/lib/templates/util";
import { templatePropsSchema } from "@/types/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import {
  FcBusinessContact,
  FcCurrencyExchange,
  FcMoneyTransfer,
  FcTemplate,
  FcViewDetails,
} from "react-icons/fc";
import { z } from "zod";
import { InvoiceDetails } from "./form/invoiceDetails";
import ItemDetails from "./form/itemDetails";
import { PaymentDetails } from "./form/paymentDetails";
import { UserDetails } from "./form/userDetails";
import { Button } from "./ui/button";
import {
  EditorTabs,
  EditorTabsContent,
  EditorTabsList,
  EditorTabsTrigger,
} from "./ui/editor-tabs";
import { Form } from "./ui/form";
import { ScrollArea } from "./ui/scroll-area";

export default function Editor({ id }: { id: string }) {
  const form = useForm<z.infer<typeof templatePropsSchema>>({
    resolver: zodResolver(templatePropsSchema),
    defaultValues: emptyTemplateProps,
    shouldUnregister: false,
  });

  function onSubmit(values: z.infer<typeof templatePropsSchema>) {
    console.log(values);
  }

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "items",
  });

  const Template = AllTemplates[id]?.component;

  if (!Template) {
    return <div>Template not found</div>;
  }

  const savePdf = async () => {
    ("use server");
    const data = await fetch("/api/invoice/generate", {
      method: "POST",
      body: JSON.stringify({
        values: form.getValues(),
        templateId: id,
      }),
    });
    const result = await data.blob();

    if (result instanceof Blob && result.size > 0) {
      // Create a blob URL to trigger the download
      const url = window.URL.createObjectURL(result);

      // Create an anchor element to initiate the download
      const a = document.createElement("a");
      a.href = url;
      a.download = "invoice.pdf";
      document.body.appendChild(a);

      // Trigger the download
      a.click();

      // Clean up the URL object
      window.URL.revokeObjectURL(url);
    }
  };

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
              <ItemDetails
                form={form}
                fields={fields}
                remove={remove}
                append={append}
              />
            </EditorTabsContent>
            <EditorTabsContent value="bank details">
              <PaymentDetails form={form} />
            </EditorTabsContent>
          </EditorTabs>
        </ScrollArea>
      </form>
      <Button onClick={() => savePdf()}>save</Button>

      {/* <div id="invoice" className="flex flex-1 justify-center items-center">
        <Template initialValue={form.watch()} />
      </div> */}
    </Form>
  );
}
