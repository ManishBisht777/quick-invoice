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
                        value={basicDetails.from?.name}
                        onChange={(e) =>
                          setBaiscDetails({
                            ...basicDetails,
                            from: {
                              ...basicDetails.from,
                              name: e.target.value,
                            },
                          } as z.infer<typeof formSchema>)
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
                      <Input
                        placeholder="Manish@example.com"
                        value={basicDetails.from?.email}
                        onChange={(e) =>
                          setBaiscDetails({
                            ...basicDetails,
                            from: {
                              ...basicDetails.from,
                              email: e.target.value,
                            },
                          } as z.infer<typeof formSchema>)
                        }
                      />
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
                      <Input
                        placeholder="+91 1234567890"
                        type="number"
                        value={basicDetails.from?.phoneno}
                        onChange={(e) =>
                          setBaiscDetails({
                            ...basicDetails,
                            from: {
                              ...basicDetails.from,
                              phoneno: e.target.value,
                            },
                          } as z.infer<typeof formSchema>)
                        }
                      />
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
                      <Input
                        placeholder="Street No 45, X - Block"
                        value={basicDetails.from?.address?.address}
                        onChange={(e) =>
                          setBaiscDetails({
                            ...basicDetails,
                            from: {
                              ...basicDetails.from,
                              address: {
                                ...basicDetails.from?.address,
                                address: e.target.value,
                              },
                            },
                          } as z.infer<typeof formSchema>)
                        }
                      />
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
                      <Input
                        placeholder="india"
                        value={basicDetails.from?.address?.country}
                        onChange={(e) =>
                          setBaiscDetails({
                            ...basicDetails,
                            from: {
                              ...basicDetails.from,
                              address: {
                                ...basicDetails.from?.address,
                                country: e.target.value,
                              },
                            },
                          } as z.infer<typeof formSchema>)
                        }
                      />
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
                      <Input
                        placeholder="delhi"
                        value={basicDetails.from?.address?.state}
                        onChange={(e) =>
                          setBaiscDetails({
                            ...basicDetails,
                            from: {
                              ...basicDetails.from,
                              address: {
                                ...basicDetails.from?.address,
                                state: e.target.value,
                              },
                            },
                          } as z.infer<typeof formSchema>)
                        }
                      />
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
                      <Input
                        placeholder="110034"
                        value={basicDetails.from?.address?.zipCode}
                        onChange={(e) =>
                          setBaiscDetails({
                            ...basicDetails,
                            from: {
                              ...basicDetails.from,
                              address: {
                                ...basicDetails.from?.address,
                                zipCode: e.target.value,
                              },
                            },
                          } as z.infer<typeof formSchema>)
                        }
                      />
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
                      <Input
                        placeholder="Manish bisht"
                        value={basicDetails.to?.name}
                        onChange={(e) =>
                          setBaiscDetails({
                            ...basicDetails,
                            to: {
                              ...basicDetails.to,
                              name: e.target.value,
                            },
                          } as z.infer<typeof formSchema>)
                        }
                      />
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
                      <Input
                        placeholder="Manish@example.com"
                        value={basicDetails.to?.email}
                        onChange={(e) =>
                          setBaiscDetails({
                            ...basicDetails,
                            to: {
                              ...basicDetails.to,
                              email: e.target.value,
                            },
                          } as z.infer<typeof formSchema>)
                        }
                      />
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
                      <Input
                        placeholder="+91 1234567890"
                        value={basicDetails.to?.phoneno}
                        onChange={(e) =>
                          setBaiscDetails({
                            ...basicDetails,
                            to: {
                              ...basicDetails.to,
                              phoneno: e.target.value,
                            },
                          } as z.infer<typeof formSchema>)
                        }
                      />
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
                      <Input
                        placeholder="Street No 45, X - Block"
                        value={basicDetails.to?.address?.address}
                        onChange={(e) =>
                          setBaiscDetails({
                            ...basicDetails,
                            to: {
                              ...basicDetails.to,
                              address: {
                                ...basicDetails.to?.address,
                                address: e.target.value,
                              },
                            },
                          } as z.infer<typeof formSchema>)
                        }
                      />
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
                      <Input
                        placeholder="india"
                        value={basicDetails.to?.address?.country}
                        onChange={(e) =>
                          setBaiscDetails({
                            ...basicDetails,
                            to: {
                              ...basicDetails.to,
                              address: {
                                ...basicDetails.to?.address,
                                country: e.target.value,
                              },
                            },
                          } as z.infer<typeof formSchema>)
                        }
                      />
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
                      <Input
                        placeholder="delhi"
                        value={basicDetails.to?.address?.state}
                        onChange={(e) =>
                          setBaiscDetails({
                            ...basicDetails,
                            to: {
                              ...basicDetails.to,
                              address: {
                                ...basicDetails.to?.address,
                                state: e.target.value,
                              },
                            },
                          } as z.infer<typeof formSchema>)
                        }
                      />
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
                      <Input
                        placeholder="110034"
                        value={basicDetails.to?.address?.zipCode}
                        onChange={(e) =>
                          setBaiscDetails({
                            ...basicDetails,
                            to: {
                              ...basicDetails.to,
                              address: {
                                ...basicDetails.to?.address,
                                zipCode: e.target.value,
                              },
                            },
                          } as z.infer<typeof formSchema>)
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
        <Button type="submit">Next</Button>
      </form>
    </Form>
  );
}
