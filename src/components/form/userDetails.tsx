"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
interface UserDetailsProps {
  form: any;
}

export function UserDetails({ form }: UserDetailsProps) {
  return (
    <div className="space-y-6 relative">
      <div className="space-y-3">
        <h2 className="text-xl font-semibold w-fit">Sender&apos;s details</h2>
        <div className="grid md:grid-cols-3 grid-cols-2 md:gap-3 gap-2">
          <FormField
            control={form.control}
            name={"basicDetails.from.name"}
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="Sender's name">Name</Label>
                <FormControl>
                  <Input placeholder="Manish bisht" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={"basicDetails.from.email"}
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
            name={"basicDetails.from.phoneNumber"}
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="Sender's mobile number">Phone no</Label>
                <FormControl>
                  <Input
                    placeholder="+91 1234567890"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name={"basicDetails.from.address.address"}
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
            name={"basicDetails.from.address.country"}
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="Sender's country">Country</Label>
                <FormControl>
                  <Input placeholder="India" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={"basicDetails.from.address.state"}
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="Sender's state">State</Label>
                <FormControl>
                  <Input placeholder="Delhi" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={"basicDetails.from.address.zipCode"}
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
        <h2 className="text-xl font-semibold">Receiver&apos;s details</h2>
        <div className="grid md:grid-cols-3 grid-cols-2 md:gap-3 gap-2">
          <FormField
            control={form.control}
            name={"basicDetails.to.name"}
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="Reciever's name">Name</Label>
                <FormControl>
                  <Input placeholder="Milind mishra" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={"basicDetails.to.email"}
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="Reciever's Email">Email</Label>
                <FormControl>
                  <Input placeholder="milind@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={"basicDetails.to.phoneNumber"}
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
            name={"basicDetails.to.address.address"}
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
            name={"basicDetails.to.address.country"}
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="Reciever's country">Country</Label>
                <FormControl>
                  <Input placeholder="India" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={"basicDetails.to.address.state"}
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="Reciever's state">State</Label>
                <FormControl>
                  <Input placeholder="Bihar" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={"basicDetails.to.address.zipCode"}
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="Reciever's zipcode">Zipcode</Label>
                <FormControl>
                  <Input placeholder="110344" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  );
}
