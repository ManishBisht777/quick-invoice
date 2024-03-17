"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { emptyTemplateProps } from "@/config/template";
import { AllTemplates } from "@/lib/templates/util";
import { templatePropsSchema } from "@/types/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { EllipsisVertical, Loader2 } from "lucide-react";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { InvoiceDetails } from "./form/invoiceDetails";
import ItemDetails from "./form/itemDetails";
import { PaymentDetails } from "./form/paymentDetails";
import { UserDetails } from "./form/userDetails";
import { Button } from "./ui/button";
import { Form } from "./ui/form";
import { ScrollArea } from "./ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useState } from "react";

export default function Editor({ id }: { id: string }) {
  const form = useForm<z.infer<typeof templatePropsSchema>>({
    resolver: zodResolver(templatePropsSchema),
    defaultValues: emptyTemplateProps,
    shouldUnregister: false,
  });

  const [loading, setLoading] = useState(false);

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
    setLoading(true);
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
    setLoading(false);
  };

  return (
    <Form {...form}>
      <div className="flex w-full container">
        <div className="w-1/2 space-y-4">
          <div className="relative w-fit">
            <h3 className="text-4xl font-bold">Invoice</h3>
            <span className="bg-[#E87117] px-3 py-1 rounded-full text-white text-xs absolute -top-3 -right-14">
              New
            </span>
          </div>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <ScrollArea className="h-screen rounded-md">
              <Tabs className="h-screen" defaultValue="user">
                <TabsList>
                  <TabsTrigger value="templates">Templates</TabsTrigger>
                  <TabsTrigger value="user">Basic</TabsTrigger>
                  <TabsTrigger value="client">Invoice</TabsTrigger>
                  <TabsTrigger value="items">Items</TabsTrigger>
                  <TabsTrigger value="bank details">Payment</TabsTrigger>
                </TabsList>
                <TabsContent value="user">
                  <UserDetails form={form} />
                </TabsContent>
                <TabsContent value="client">
                  <InvoiceDetails form={form} />
                </TabsContent>
                <TabsContent value="items">
                  <ItemDetails
                    form={form}
                    fields={fields}
                    remove={remove}
                    append={append}
                  />
                </TabsContent>
                <TabsContent value="bank details">
                  <PaymentDetails form={form} />
                </TabsContent>
              </Tabs>
            </ScrollArea>
          </form>
        </div>

        <div className="w-1/2 space-y-4">
          <div className="flex justify-end gap-2">
            <Button variant="secondary">New</Button>

            <Button onClick={savePdf} className="gap-2">
              {loading && <Loader2 size={18} className="animate-spin" />}
              Generate Pdf
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="icon" variant="outline">
                  <EllipsisVertical size={18} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>More actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>Export</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Template initialValue={form.watch()} />
        </div>
      </div>
    </Form>
  );
}
