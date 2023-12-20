"use client";

import ItemDetails from "./form/itemDetails";
import { UserDetails } from "./form/userDetails";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Editor() {
  return (
    <div>
      <h1 className="my-4 text-2xl font-bold">Editor</h1>
      <Tabs defaultValue="user">
        <TabsList>
          <TabsTrigger value="user">User details</TabsTrigger>
          <TabsTrigger value="client">Client details</TabsTrigger>
          <TabsTrigger value="items">Items</TabsTrigger>
          <TabsTrigger value="extra">Extras</TabsTrigger>
        </TabsList>
        <TabsContent value="user">
          <UserDetails />
        </TabsContent>
        <TabsContent value="client">Change your password here.</TabsContent>
        <TabsContent value="items">
          <ItemDetails />
        </TabsContent>
        <TabsContent value="extra">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}
