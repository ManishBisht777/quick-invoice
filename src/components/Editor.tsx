"use client";

import { templatePropsSchema } from "@/types/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
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
import { AllTemplates } from "@/lib/templates/util";
import { Button } from "./ui/button";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

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

  const downloadComponentAsPDF = () => {
    const componentNode = document.getElementById("invoice");

    html2canvas(componentNode).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const imgWidth = pdf.internal.pageSize.getWidth();
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let position = 0;

      const addImageToPDF = () => {
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      };

      const saveAndContinue = () => {
        pdf.addPage();
        position -= pdf.internal.pageSize.getHeight();
        addImageToPDF();
      };

      const addContentToPDF = () => {
        const contentHeight = componentNode.offsetHeight;

        // Add the content to the current page
        addImageToPDF();

        // Check if there's remaining content and add to subsequent pages if necessary
        const remainingHeight = contentHeight - position;
        if (remainingHeight > pdf.internal.pageSize.getHeight()) {
          saveAndContinue();
        }
      };

      addContentToPDF();

      pdf.save("component.pdf");
    });
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
      <Button onClick={downloadComponentAsPDF}>save</Button>

      <div id="invoice" className="flex flex-1 justify-center items-center">
        <Template initialValue={form.watch()} />
      </div>
    </Form>
  );
}
