"use client";

import { emptyTemplateProps } from "@/config/template";
import { AllTemplates } from "@/lib/templates/util";
import { templatePropsSchema } from "@/types/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Info, Loader2 } from "lucide-react";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import AutofillDetails from "./autofill-details";
import AutofillPayment from "./autofill-payments";
import { InvoiceDetails } from "./form/invoiceDetails";
import ItemDetails from "./form/itemDetails";
import { PaymentDetails } from "./form/paymentDetails";
import { UserDetails } from "./form/userDetails";
import SaveInvoice from "./modal/SaveInvoice";
import { Button } from "./ui/button";
import { Form } from "./ui/form";
import { ScrollArea } from "./ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function Editor({ id }: { id: string }) {
  const form = useForm<z.infer<typeof templatePropsSchema>>({
    resolver: zodResolver(templatePropsSchema),
    defaultValues: emptyTemplateProps,
    shouldUnregister: false,
  });

  const [loading, setLoading] = useState(false);
  const user = useSession().data?.user;

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
      const url = window.URL.createObjectURL(result);
      const a = document.createElement("a");
      a.href = url;
      a.download = "invoice.pdf";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    }
    setLoading(false);
  };

  return (
    <Form {...form}>
      <div className="flex w-full gap-4">
        <div className="w-1/2 md:block hidden space-y-4">
          <div className="relative w-fit">
            <h3 className="text-4xl font-bold">Invoice</h3>
            <span className="bg-[#E87117] px-3 py-1 rounded-full text-white text-xs absolute -top-3 -right-14">
              New
            </span>
          </div>
          <form>
            <ScrollArea className="h-screen rounded-md">
              <Tabs className="h-screen" defaultValue="user">
                <TabsList>
                  <TabsTrigger value="user">Basic</TabsTrigger>
                  <TabsTrigger value="client">Invoice</TabsTrigger>
                  <TabsTrigger value="items">Items</TabsTrigger>
                  <TabsTrigger value="bank details">Payment</TabsTrigger>
                </TabsList>
                <TabsContent className="relative space-y-2 mt-4" value="user">
                  <div className="flex justify-end rounded-lg items-center mb-4">
                    {!user ? (
                      <div className="border p-4 rounded-md w-full">
                        <p className="font-medium flex gap-1 items-center">
                          <Info size={18} className="mr-1" />
                          You can access this feature by signing in
                        </p>
                      </div>
                    ) : (
                      <AutofillDetails setValue={form.setValue} />
                    )}
                  </div>
                  <UserDetails form={form} />
                </TabsContent>
                <TabsContent value="client">
                  <InvoiceDetails form={form} setValue={form.setValue} />
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
                  {!user ? (
                    <div className="border p-4 rounded-md w-full">
                      <p className="font-medium flex gap-1 items-center">
                        <Info size={18} className="mr-1" />
                        You can access this feature by signing in
                      </p>
                    </div>
                  ) : (
                    <AutofillPayment setValue={form.setValue} />
                  )}
                  <PaymentDetails form={form} />
                </TabsContent>
              </Tabs>
            </ScrollArea>
          </form>
        </div>

        <div className="md:w-1/2 w-full space-y-4">
          <div className="flex justify-end gap-2">
            {!user ? (
              <Button variant="secondary">Sign in to save</Button>
            ) : (
              <SaveInvoice initialValues={form.watch()} />
            )}

            <Button onClick={savePdf} className="gap-2">
              {loading && <Loader2 size={18} className="animate-spin" />}
              Generate Pdf
            </Button>
          </div>
          <Template initialValue={form.watch()} />

          <div className="md:hidden flex">
            <Drawer>
              <DrawerTrigger asChild>
                <Button className="w-full">Fill details</Button>
              </DrawerTrigger>
              <DrawerContent className="h-[85vh]">
                <div className="mx-auto w-full">
                  <DrawerHeader>
                    <DrawerTitle className="mt-4">
                      <div className="relative w-fit">
                        <h3 className="text-4xl font-bold">Invoice</h3>
                        <span className="bg-[#E87117] px-3 py-1 rounded-full text-white text-xs absolute -top-3 -right-14">
                          New
                        </span>
                      </div>
                    </DrawerTitle>
                  </DrawerHeader>
                  <div className="px-4 py-0">
                    <form>
                      <ScrollArea className="h-[60vh] rounded-md">
                        <Tabs defaultValue="user">
                          <TabsList>
                            <TabsTrigger value="user">Basic</TabsTrigger>
                            <TabsTrigger value="client">Invoice</TabsTrigger>
                            <TabsTrigger value="items">Items</TabsTrigger>
                            <TabsTrigger value="bank details">
                              Payment
                            </TabsTrigger>
                          </TabsList>
                          <TabsContent
                            className="relative space-y-2 mt-4"
                            value="user"
                          >
                            <div className="flex justify-end rounded-lg items-center mb-4">
                              {!user ? (
                                <div className="border p-4 rounded-md w-full">
                                  <p className="font-medium flex gap-1 items-center">
                                    <Info size={18} className="mr-1" />
                                    You can access this feature by signing in
                                  </p>
                                </div>
                              ) : (
                                <AutofillDetails setValue={form.setValue} />
                              )}
                            </div>
                            <UserDetails form={form} />
                          </TabsContent>
                          <TabsContent value="client">
                            <InvoiceDetails
                              form={form}
                              setValue={form.setValue}
                            />
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
                            {!user ? (
                              <div className="border p-4 rounded-md w-full">
                                <p className="font-medium flex gap-1 items-center">
                                  <Info size={18} className="mr-1" />
                                  You can access this feature by signing in
                                </p>
                              </div>
                            ) : (
                              <AutofillPayment setValue={form.setValue} />
                            )}
                            <PaymentDetails form={form} />
                          </TabsContent>
                        </Tabs>
                      </ScrollArea>
                    </form>
                  </div>
                  <DrawerFooter>
                    <DrawerClose asChild>
                      <Button variant="outline">Close</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </Form>
  );
}
