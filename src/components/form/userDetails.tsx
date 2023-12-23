"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import { useTemplateStrore } from "@/store/templateStore";

const formSchema = z.object({
  from: z.object({
    name: z.string(),
    website: z.string(),
    email: z.string(),
    phoneno: z.string(),
    address: z.object({
      address: z.string(),
      city: z.string(),
      state: z.string(),
      country: z.string(),
      zipCode: z.string(),
    }),
  }),
  to: z.object({
    name: z.string(),
    website: z.string(),
    email: z.string(),
    phoneno: z.string(),
    address: z.object({
      address: z.string(),
      city: z.string(),
      state: z.string(),
      country: z.string(),
      zipCode: z.string(),
    }),
  }),
});

export function UserDetails() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      from: {
        name: "",
        website: "",
        email: "",
        phoneno: "",
        address: {
          address: "",
          city: "",
          state: "",
          country: "",
          zipCode: "",
        },
      },
      to: {
        name: "",
        website: "",
        email: "",
        phoneno: "",
        address: {
          address: "",
          city: "",
          state: "",
          country: "",
          zipCode: "",
        },
      },
    },
  });

  const { setBaiscDetails, basicDetails } = useTemplateStrore();

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setBaiscDetails(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-6 mt-6">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold">Sender&apos;s details</h2>
            <div className="flex flex-wrap gap-3">
              <FormField
                control={form.control}
                name={"from.name"}
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="Sender's name">Name</Label>
                    <FormControl>
                      <Input
                        placeholder="Manish bisht"
                        // {...field}
                        onChange={(e) =>
                          setBaiscDetails({
                            ...basicDetails,
                            from: {
                              ...basicDetails.from,
                              name: e.target.value,
                            },
                          })
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={"from.email"}
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="Sender's Email">Email</Label>
                    <FormControl>
                      <Input placeholder="Manish@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={"from.phoneno"}
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="Sender's mobile number">Phone no</Label>
                    <FormControl>
                      <Input placeholder="+91 1234567890" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={"from.address.address"}
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="Sender's Address">Address</Label>
                    <FormControl>
                      <Input placeholder="Street No 45, X - Block" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={"from.address.city"}
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="Sender's city">City</Label>
                    <FormControl>
                      <Input placeholder="delhi" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={"from.address.country"}
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="Sender's country">Country</Label>
                    <FormControl>
                      <Input placeholder="india" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={"from.address.state"}
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="Sender's state">State</Label>
                    <FormControl>
                      <Input placeholder="delhi" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={"from.address.zipCode"}
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="Sender's zipcode">Zipcode</Label>
                    <FormControl>
                      <Input placeholder="110034" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-xl font-semibold">Reciever&apos;s details</h2>
            <div className="flex flex-wrap gap-3">
              <FormField
                control={form.control}
                name={"to.name"}
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="Reciever's name">Name</Label>
                    <FormControl>
                      <Input placeholder="Manish bisht" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={"to.email"}
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="Reciever's Email">Email</Label>
                    <FormControl>
                      <Input placeholder="Manish@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={"to.phoneno"}
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="Reciever's mobile number">Phone no</Label>
                    <FormControl>
                      <Input placeholder="+91 1234567890" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={"to.address.address"}
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="Reciever's Address">Address</Label>
                    <FormControl>
                      <Input placeholder="Street No 45, X - Block" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={"to.address.city"}
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="Reciever's city">City</Label>
                    <FormControl>
                      <Input placeholder="delhi" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={"to.address.country"}
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="Reciever's country">Country</Label>
                    <FormControl>
                      <Input placeholder="india" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={"to.address.state"}
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="Reciever's state">State</Label>
                    <FormControl>
                      <Input placeholder="delhi" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={"to.address.zipCode"}
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="Reciever's zipcode">Zipcode</Label>
                    <FormControl>
                      <Input placeholder="110034" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
        <Button type="submit">Save</Button>
      </form>
    </Form>
  );
}
