"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { templatePropsSchema } from "@/types/formSchema";
import { format } from "date-fns";
import { CalendarIcon, Check, ChevronsUpDown } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { codes } from "currency-codes";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { WorkType } from "@/enum/work";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { getAllCurrencies } from "@/lib/templates/util";

interface InvoiceDetailsProps {
  form: UseFormReturn<z.infer<typeof templatePropsSchema>>;
  setValue: any;
}

export function InvoiceDetails({ form, setValue }: InvoiceDetailsProps) {
  const currencies = getAllCurrencies();

  return (
    <>
      <div className="space-y-6 mt-6 w-full">
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <FormField
              control={form.control}
              name="invoiceDetails.issueDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Issue date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={new Date(field.value)}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="invoiceDetails.dueDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Due date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={new Date(field.value)}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="invoiceDetails.currency"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Language</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            "w-[200px] justify-between",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value
                            ? currencies.find(
                                (language) => language === field.value
                              )
                            : "Select currency"}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput placeholder="Search language..." />
                        <CommandList>
                          <CommandEmpty>No currency found.</CommandEmpty>
                          <CommandGroup>
                            {currencies.map((code) => {
                              if (!code) return;
                              return (
                                <CommandItem
                                  value={code}
                                  key={code}
                                  onSelect={() => {
                                    setValue("invoiceDetails.currency", code);
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4",
                                      code === field.value
                                        ? "opacity-100"
                                        : "opacity-0"
                                    )}
                                  />
                                  {code}
                                </CommandItem>
                              );
                            })}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            {form.getValues("invoiceDetails.workType") === WorkType.HOURLY && (
              <FormField
                control={form.control}
                name={"invoiceDetails.hourlyRate"}
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="Hourly Rate">Hourly Rate</Label>
                    <FormControl>
                      <Input placeholder="7" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </div>

          <div>
            <h3 className="font-medium text-sm">Pick a type</h3>

            <div className="grid grid-cols-3 gap-2 mt-2">
              {Object.entries(WorkType).map(([key, value]) => (
                <button
                  type="button"
                  onClick={() => {
                    setValue("invoiceDetails.workType", value);
                  }}
                  className={cn(
                    "p-3 rounded-lg border-2 border-slate-200",
                    form.getValues("invoiceDetails.workType") === value &&
                      "border-black"
                  )}
                  key={key}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
