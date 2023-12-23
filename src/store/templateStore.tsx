import { create } from "zustand";

interface basicDetails {
  name: string;
  website: string;
  email: string;
  phoneno: string;
  address: {
    address: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
  };
}

interface invoiceDetails {
  issueDate: string;
  dueDate: string;
  currency: string;
  template: string;
}

interface items {
  name: string;
  description: string;
  quantity: number;
  price: number;
}

interface paymentDetails {
  bankName: string;
  accountName: string;
  accountNummber: string;
}

interface additionalDetails {
  tax?: number;
  discount?: number;
  shipping?: number;
}

interface templateStore {
  basicDetails: {
    from: basicDetails | {};
    to: basicDetails | {};
  };
  invoiceDetails: invoiceDetails | {};
  items: items[] | [];
  paymentDetails: paymentDetails | {};
  additionalDetails: {};

  setBaiscDetails: (basicDetails: {
    from: basicDetails | {};
    to: basicDetails | {};
  }) => void;
  setInvoiceDetails: (invoiceDetails: invoiceDetails) => void;
  setItems: (items: items[]) => void;
  setPaymentDetails: (paymentDetails: paymentDetails) => void;
  setAdditionalDetails: (additionalDetails: additionalDetails) => void;
}

export const useTemplateStrore = create<templateStore>((set) => ({
  basicDetails: {
    from: {},
    to: {},
  },
  invoiceDetails: {},
  items: [],
  paymentDetails: {},
  additionalDetails: {},
  setBaiscDetails: (basicDetails: {
    from: basicDetails | {};
    to: basicDetails | {};
  }) => set({ basicDetails }),
  setInvoiceDetails: (invoiceDetails: invoiceDetails) =>
    set({ invoiceDetails }),
  setItems: (items: items[]) => set({ items }),
  setPaymentDetails: (paymentDetails: paymentDetails) =>
    set({ paymentDetails }),
  setAdditionalDetails: (additionalDetails: additionalDetails) =>
    set({ additionalDetails }),
}));
