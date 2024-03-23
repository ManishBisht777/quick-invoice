export const templateProps = {
  basicDetails: {
    from: {
      name: "Your Name",
      website: "Your Website",
      email: "your.email@example.com",
      phoneNumber: "123-456-7890",
      address: {
        address: "123 Main St",
        city: "Your City",
        state: "Your State",
        country: "Your Country",
        zipCode: "12345",
      },
    },
    to: {
      name: "Recipient's Name",
      website: "Recipient's Website",
      email: "recipient.email@example.com",
      phoneNumber: "987-654-3210",
      address: {
        address: "456 Oak St",
        city: "Recipient's City",
        state: "Recipient's State",
        country: "Recipient's Country",
        zipCode: "54321",
      },
    },
  },
  invoiceDetails: {
    issueDate: "12/12/2021",
    dueDate: "12/12/2021",
    currency: "USD",
  },
  invoiceNumber: "1234567890",
  items: [
    {
      name: "Item 1",
      description: "Item 1 description",
      quantity: 1,
      price: 100,
    },
    {
      name: "Item 2",
      description: "Item 2 description",
      quantity: 1,
      price: 100,
    },
    {
      name: "Item 3",
      description: "Item 1 description",
      quantity: 1,
      price: 100,
    },
    {
      name: "Item 4",
      description: "Item 2 description",
      quantity: 1,
      price: 100,
    },
  ],
  paymentDetails: {
    bankName: "Bank Name",
    accountName: "Account Name",
    accountNumber: "Account Number",
    tax: 5,
    discount: 2,
    shipping: 3,
  },
};

export const emptyTemplateProps = {
  basicDetails: {
    from: {
      name: "",
      website: "",
      email: "",
      phoneNumber: "",
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
      phoneNumber: "",
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
  invoiceNumber: "",
  items: [],
  paymentDetails: {
    bankName: "",
    accountName: "",
    accountNumber: "",
    tax: 0,
    discount: 0,
    shipping: 0,
  },
};
