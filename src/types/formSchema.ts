import { WorkType } from "@/enum/work";
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
  workType: z.nativeEnum(WorkType),
  hourlyRate: z.coerce.number(),
});

const itemSchema = z.object({
  name: z.string(),
  description: z.string(),
  quantity: z.coerce.number().min(1),
  price: z.coerce.number(),
  hours: z.string(),
});

const paymentDetailsSchema = z.object({
  bankName: z.string(),
  accountName: z.string(),
  accountNumber: z.string(),
  tax: z.coerce.number(),
  discount: z.coerce.number(),
  shipping: z.coerce.number(),
});

export const templatePropsSchema = z.object({
  basicDetails: basicDetailsSchema,
  invoiceDetails: invoiceDetailsSchema,
  invoiceNumber: z.string(),
  items: z.array(itemSchema),
  paymentDetails: paymentDetailsSchema,
});
