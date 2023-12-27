"use client";

import { useFieldArray } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TrashIcon } from "lucide-react";
import { useEffect } from "react";
import { Label } from "../ui/label";

interface ItemDetailsProps {
  form: any;
}

export default function ItemDetails({ form }: ItemDetailsProps) {
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "items",
  });

  useEffect(() => {
    remove(0);
  }, [remove]);

  return (
    <div className="space-y-2 w-full mt-6">
      {fields.map((item, index) => (
        <div className="space-y-3 bg-slate-50 p-3 rounded-lg" key={item.id}>
          <div className="flex justify-between items-center">
            <p className="text-[#E87117]">#{index + 1}</p>
            <Button
              type="button"
              variant="destructive"
              size="icon"
              onClick={() => remove(index)}
            >
              <TrashIcon className="w-4 h-4" />
            </Button>
          </div>
          <div className="grid gap-3 grid-cols-6 ">
            <FormField
              control={form.control}
              name={`items.${index}.name`}
              render={({ field }) => (
                <FormItem className="col-span-4">
                  <Label htmlFor={`items.${index}.name`}>Item name</Label>
                  <FormControl>
                    <Input placeholder="header component" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={`items.${index}.quantity`}
              render={({ field }) => (
                <FormItem className="col-span-1">
                  <Label htmlFor={`items.${index}.quantity`}>Qty</Label>
                  <FormControl>
                    <Input type="number" placeholder="3" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={`items.${index}.price`}
              render={({ field }) => (
                <FormItem className="col-span-1">
                  <Label htmlFor={`items.${index}.price`}>Price</Label>
                  <FormControl>
                    <Input type="number" placeholder="1500" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name={`items.${index}.description`}
            render={({ field }) => (
              <FormItem>
                <Label htmlFor={`items.${index}.description`}>
                  Description
                </Label>
                <FormControl>
                  <Input placeholder="Design and 3 iteration" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      ))}

      <Button
        onClick={() =>
          append({ name: "", description: "", price: 0, quantity: 1 })
        }
      >
        Add item
      </Button>
    </div>
  );
}
