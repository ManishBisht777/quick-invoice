export interface basicDetails {
  name: string;
  website: string;
  email: string;
  phoneNumber: string;
  address: {
    address: string;
    state: string;
    country: string;
    zipCode: string;
  };
}

export interface invoiceDetails {
  issueDate: string;
  dueDate: string;
  currency: string;
}

export interface items {
  name: string;
  description: string;
  quantity: string;
  price: string;
}

export interface paymentDetails {
  bankName: string;
  accountName: string;
  accountNumber: string;
}

interface additionalDetails {
  tax?: number;
  discount?: number;
  shipping?: number;
}
