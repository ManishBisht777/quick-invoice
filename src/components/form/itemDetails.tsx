"use client";

import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { items } from "@/types/template";
import { TrashIcon } from "lucide-react";
import { Label } from "../ui/label";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { templatePropsSchema } from "@/types/formSchema";
import { WorkType } from "@/enum/work";

interface ItemDetailsProps {
  form: UseFormReturn<z.infer<typeof templatePropsSchema>>;
  fields: items[];
  append: any;
  remove: any;
}

export default function ItemDetails({
  form,
  fields,
  append,
  remove,
}: ItemDetailsProps) {
  return (
    <div className="w-full p-3">
      <div className="space-y-4">
        {fields.map((_, index) => (
          <div className="space-y-3 rounded-lg" key={index}>
            <div className="flex justify-between items-center">
              <p className="text-[#E87117] font-bold">#{index + 1}</p>
              <Button
                variant="secondary"
                type="button"
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
              {form.getValues("invoiceDetails.workType") ===
                WorkType.QUANTITY && (
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
              )}

              {(form.getValues("invoiceDetails.workType") ===
                WorkType.QUANTITY ||
                form.getValues("invoiceDetails.workType") ===
                  WorkType.FIXED) && (
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
              )}

              <FormField
                control={form.control}
                name={`items.${index}.description`}
                render={({ field }) => (
                  <FormItem className="col-span-4">
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

              {form.getValues("invoiceDetails.workType") ===
                WorkType.HOURLY && (
                <FormField
                  control={form.control}
                  name={`items.${index}.hours`}
                  defaultValue={"0"}
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <Label htmlFor={`items.${index}.hours`}>
                        Hours worked
                      </Label>
                      <FormControl>
                        <Input placeholder="HH:MM" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
            </div>
          </div>
        ))}
      </div>

      <Button
        className="mt-4"
        type="button"
        onClick={() =>
          append({ name: "", description: "", price: 0, quantity: 1 })
        }
      >
        Add item
      </Button>
    </div>
  );
}
