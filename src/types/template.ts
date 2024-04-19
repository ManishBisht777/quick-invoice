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
  issueDate: Date;
  dueDate: Date;
  currency: string;
  workType: WorkerType;
  hourlyRate: number;
}

export interface items {
  name: string;
  description: string;
  quantity: number;
  price: number;
  hours: string;
}

export interface paymentDetails {
  bankName: string;
  accountName: string;
  accountNumber: string;
  tax: number;
  discount: number;
  shipping: number;
}

export interface initialTemplateProps {
  basicDetails: {
    from: basicDetails;
    to: basicDetails;
  };
  invoiceDetails: invoiceDetails;
  invoiceNumber: string;
  items: items[];
  paymentDetails: paymentDetails;
}
