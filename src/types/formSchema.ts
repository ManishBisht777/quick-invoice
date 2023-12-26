import { z } from "zod";

export const emptyTemplateProps = {
  basicDetails: {
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
  invoiceDetails: {
    issueDate: "",
    dueDate: "",
    currency: "",
  },
  Invoiceno: "",
  items: [
    {
      name: "",
      description: "",
      quantity: 0,
      price: 0,
      amount: 0,
    },
    {
      name: "",
      description: "",
      quantity: 0,
      price: 0,
      amount: 0,
    },
    {
      name: "",
      description: "",
      quantity: 0,
      price: 0,
      amount: 0,
    },
    {
      name: "",
      description: "",
      quantity: 0,
      price: 0,
      amount: 0,
    },
  ],

  paymentDetails: {
    bankName: "",
    accountName: "",
    accountNumber: "",
  },
};

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
    phoneno: z.string(),
    address: addressSchema,
  }),
  to: z.object({
    name: z.string(),
    website: z.string(),
    email: z.string().email(),
    phoneno: z.string(),
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
  quantity: z.number(),
  price: z.number(),
  amount: z.number(),
});

const paymentDetailsSchema = z.object({
  bankName: z.string(),
  accountName: z.string(),
  accountNumber: z.string(),
});

export const templatePropsSchema = z.object({
  basicDetails: basicDetailsSchema,
  invoiceDetails: invoiceDetailsSchema,
  Invoiceno: z.string(),
  items: z.array(itemSchema),
  paymentDetails: paymentDetailsSchema,
});
