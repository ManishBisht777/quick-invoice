"use client";

import { EyeIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  basicDetails,
  invoiceDetails,
  items,
  paymentDetails,
  useTemplateStrore,
} from "@/store/templateStore";

interface ModernTemplateProps {
  isEditing?: boolean;
}

const templateProps = {
  basicDetails: {
    from: {
      name: "Your Name",
      website: "Your Website",
      email: "your.email@example.com",
      phoneno: "123-456-7890",
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
      phoneno: "987-654-3210",
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
  Invoiceno: "1234567890",
  items: [
    {
      name: "Item 1",
      description: "Item 1 description",
      quantity: 1,
      price: 100,
      amount: 100,
    },
    {
      name: "Item 2",
      description: "Item 2 description",
      quantity: 1,
      price: 100,
      amount: 100,
    },
    {
      name: "Item 3",
      description: "Item 1 description",
      quantity: 1,
      price: 100,
      amount: 100,
    },
    {
      name: "Item 4",
      description: "Item 2 description",
      quantity: 1,
      price: 100,
      amount: 100,
    },
  ],

  paymentDetails: {
    bankName: "Bank Name",
    accountName: "Account Name",
    accountNumber: "Account Number",
  },
};

const TemplateName = "modern";

export default function Modern({ isEditing }: ModernTemplateProps) {
  let templateValues: {
    basicDetails: {
      from: basicDetails | undefined;
      to: basicDetails | undefined;
    };
    invoiceDetails: invoiceDetails | undefined;
    items: items[] | [];
    paymentDetails: paymentDetails | undefined;
  };

  const { basicDetails, invoiceDetails, items, paymentDetails } =
    useTemplateStrore();

  if (isEditing)
    templateValues = {
      basicDetails: basicDetails,
      invoiceDetails: invoiceDetails,
      items: items,
      paymentDetails: paymentDetails,
    };
  else templateValues = templateProps;

  console.log(templateValues);

  return (
    <div className="text-[#5E6470] text-sm w-[38rem] bg-[#F9FAFC] p-4 rounded-lg group relative">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-[#1A1C21] font-semibold text-xl">
            {templateValues.basicDetails.from?.name}
          </h1>
          <p>{templateValues.basicDetails.from?.website}</p>
          <p>{templateValues.basicDetails.from?.email}</p>
          <p>{templateValues.basicDetails.from?.phoneno}</p>
        </div>
        <div>
          <p>{templateValues.basicDetails.from?.address?.address}</p>
          <p>
            {templateValues.basicDetails.from?.address?.country}
            {templateValues.basicDetails.from?.address?.country && ", "}
            {templateValues.basicDetails.from?.address?.state} -{" "}
            {templateValues.basicDetails.from?.address?.zipCode}
          </p>
        </div>
      </div>

      <div className="bg-white px-4 py-6 mt-6 rounded-xl">
        <div className="rounded-md flex justify-between">
          <div>
            <h1>Billed to</h1>
            <h2 className="text-[#1A1C21]  font-semibold mt-2">
              {templateValues.basicDetails.to?.name}
            </h2>
            <p>{templateValues.basicDetails.to?.email}</p>
            <p>{templateValues.basicDetails.to?.phoneno}</p>
            <p>{templateValues.basicDetails.to?.address?.address}</p>
            <p>{templateValues.basicDetails.to?.address?.country}</p>
            <p>{templateValues.basicDetails.to?.address?.state}</p>
            <p>{templateValues.basicDetails.to?.address?.zipCode}</p>
          </div>
          <div>
            <h2>Invoice Number</h2>
            <p className="text-[#1A1C21] font-semibold">
              # {templateProps.Invoiceno}
            </p>
          </div>
          <div>
            <p>Invoice of 1200</p>
            <p className="text-[#E87117] text-xl font-bold">$4,950.00</p>
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <div>
            <p>Invoice Date</p>
            <p className="text-[#1A1C21] font-semibold">
              {templateValues.invoiceDetails?.issueDate}
            </p>
          </div>
          <div>
            <p>Due Date</p>
            <p className="text-[#1A1C21] font-semibold">
              {templateValues.invoiceDetails?.dueDate}
            </p>
          </div>
        </div>

        <div className="mt-3">
          <div className="py-2 border-y-[1px] border-[#D7DAE0] justify-between grid grid-cols-7 gap-1 mb-2">
            <p className="col-span-4">Item</p>
            <p className="col-span-1">Quantity</p>
            <p className="col-span-1">Price</p>
            <p className="col-span-1">Amount</p>
          </div>
          <div className="flex flex-col gap-3 border-b border-[#D7DAE0] pb-3">
            {templateValues.items.map((item, index) => (
              <div key={index} className="grid grid-cols-7 gap-1 items-center">
                <div className="col-span-4">
                  <p className="text-[#1A1C21] font-medium">{item.name}</p>
                  <p>{item.description}</p>
                </div>
                <p className="col-span-1">{item.quantity}</p>
                <p className="col-span-1">{item.price}</p>
                <p className="col-span-1">{item.price * item.quantity}</p>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>$4,950.00</p>
            </div>
            <div className="flex justify-between gap-3">
              <p className="text-[#1A1C21] font-medium">Tax{"(10%)"}</p>
              <p>$4,95</p>
            </div>
            <div className="flex justify-between border-t border-[#D7DAE0] mt-3 pt-3">
              <p className="text-[#1A1C21] font-semibold">Total</p>
              <p className="text-[#E87117] text-xl font-bold">$4,950.00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#D7DAE0] mt-4 pt-4">
          <p>
            <span className="text-[#1A1C21] font-semibold">Bank</span>{" "}
            {templateValues.paymentDetails?.bankName}
          </p>
          <p>
            <span className="text-[#1A1C21] font-semibold">Account name</span>{" "}
            {templateValues.paymentDetails?.accountName}
          </p>
          <p>
            <span className="text-[#1A1C21] font-semibold">account number</span>{" "}
            {templateValues.paymentDetails?.accountNumber}
          </p>
        </div>
      </div>

      <div className="mt-6 text-xs">
        <p>Terms & Conditions</p>
        <p>Please pay within 15 days of receiving this invoice.</p>
      </div>

      {/* <div className="group-hover:flex absolute hidden transition-all w-full h-40 left-0 bottom-0 backdrop-blur justify-center items-center gap-4">
        <Button>View</Button>
        <Button>
          <Link
            className="flex gap-1 items-center"
            href={`/editor/${TemplateName}`}
          >
            <EyeIcon className="mr-2 w-4 h-4" /> Use Template
          </Link>
        </Button>
      </div> */}
    </div>
  );
}
