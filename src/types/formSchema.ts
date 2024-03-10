import { z } from "zod";

const addressSchema = z.object({
  address: z.string(),
  city: z.string(),
  state: z.string(),
  country: z.string(),
  zipCode: z.string(),
});

export const basicDetailsSchema = z.object({
  from: z.object({
    name: z.string(),
    website: z.string(),
    email: z.string().email(),
    phoneNumber: z.string(),
    address: addressSchema,
  }),
  to: z.object({
    name: z.string(),
    website: z.string(),
    email: z.string().email(),
    phoneNumber: z.string(),
    address: addressSchema,
  }),
});

const invoiceDetailsSchema = z.object({
  issueDate: z.string(),
  dueDate: z.string(),
  currency: z.string(),
});

const itemSchema = z.object({
  name: z.string(),
  description: z.string(),
  quantity: z.string(),
  price: z.string(),
  amount: z.string(),
});

const paymentDetailsSchema = z.object({
  bankName: z.string(),
  accountName: z.string(),
  accountNumber: z.string(),
});

export const templatePropsSchema = z.object({
  basicDetails: basicDetailsSchema,
  invoiceDetails: invoiceDetailsSchema,
  invoiceNumber: z.string(),
  // items: z.array(itemSchema),
  paymentDetails: paymentDetailsSchema,
});
