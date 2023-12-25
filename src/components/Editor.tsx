"use client";

import { InvoiceDetails } from "./form/invoiceDetails";
import ItemDetails from "./form/itemDetails";
import { PaymentDetails } from "./form/paymentDetails";
import { UserDetails } from "./form/userDetails";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Editor() {
  return (
    <div className="p-2">
      <h1 className="my-4 text-2xl font-bold">Editor</h1>
      <Tabs defaultValue="user">
        <TabsList>
          <TabsTrigger value="user">Basic details</TabsTrigger>
          <TabsTrigger value="client">Invoice details</TabsTrigger>
          <TabsTrigger value="items">Items</TabsTrigger>
          <TabsTrigger value="bank details">Payment info</TabsTrigger>
        </TabsList>
        <TabsContent value="user">
          <UserDetails />
        </TabsContent>
        <TabsContent value="client">
          <InvoiceDetails />
        </TabsContent>
        <TabsContent value="items">
          <ItemDetails />
        </TabsContent>
        <TabsContent value="bank details">
          <PaymentDetails />
        </TabsContent>
      </Tabs>
    </div>
  );
}
