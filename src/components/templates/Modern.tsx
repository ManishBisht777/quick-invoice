import { EyeIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

interface ModernTemplateProps {}

const templateProps = {
  name: "Alivish Baldha",
  website: "www.website.com",
  email: "asdasd@example.com",
  phoneno: "1234567890",
  currency: "INR",
  address: {
    addressLine1: "City, State, IN - 000 000",
    addressLine2: "TAX ID 00XXXXX1234X0XX",
    taxID: "00XXXXX1234X0XX",
  },
  Billedto: {
    name: "Manish Bisht",
    addressLine1: "City, State, IN - 000 000",
    addressLine2: "TAX ID 00XXXXX1234X0XX",
    phoneNumber: "1234567890",
  },
  Invoiceno: "1234567890",
  InvoiceDate: "12/12/2021",
  DueDate: "12/12/2021",
  Items: [
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
};

const TemplateName = "modern";

export default function Modern({}: ModernTemplateProps) {
  return (
    <div className="text-[#5E6470] text-sm w-[38rem] bg-[#F9FAFC] p-4 rounded-lg group relative cursor-pointer">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-[#1A1C21] font-semibold text-lg">
            {templateProps.name}
          </h1>
          <p>{templateProps.website}</p>
          <p>{templateProps.email}</p>
          <p>{templateProps.phoneno}</p>
        </div>
        <div>
          <p>{templateProps.address.addressLine1}</p>
          <p>{templateProps.address.addressLine2}</p>
          <p>{templateProps.address.taxID}</p>
        </div>
      </div>

      <div className="bg-white px-4 py-6 mt-6 rounded-xl">
        <div className="rounded-md flex justify-between">
          <div>
            <h1>Billed to</h1>
            <h2 className="text-[#1A1C21]  font-semibold mt-2">Client Name</h2>
            <p>{templateProps.Billedto.name}</p>
            <p>{templateProps.Billedto.addressLine1}</p>
            <p>{templateProps.Billedto.addressLine2}</p>
            <p>{templateProps.Billedto.phoneNumber}</p>
          </div>
          <div>
            <h2>Invoice Number</h2>
            <p className="text-[#1A1C21] font-semibold">
              # {templateProps.Invoiceno}
            </p>
          </div>
          <div>
            <p>Invoice of {templateProps.currency}</p>
            <p className="text-[#E87117] text-xl font-bold">$4,950.00</p>
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <div>
            <p>Invoice Date</p>
            <p className="text-[#1A1C21] font-semibold">
              {templateProps.InvoiceDate}
            </p>
          </div>
          <div>
            <p>Due Date</p>
            <p className="text-[#1A1C21] font-semibold">
              {templateProps.DueDate}
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
            {templateProps.Items.map((item) => (
              <div
                key={item.name}
                className="grid grid-cols-7 gap-1 items-center"
              >
                <div className="col-span-4">
                  <p className="text-[#1A1C21] font-medium">{item.name}</p>
                  <p>{item.description}</p>
                </div>
                <p className="col-span-1">{item.quantity}</p>
                <p className="col-span-1">{item.price}</p>
                <p className="col-span-1">{item.amount}</p>
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
      </div>

      <div className="mt-6 text-xs">
        <p>Terms & Conditions</p>
        <p>Please pay within 15 days of receiving this invoice.</p>
      </div>

      <div className="group-hover:flex absolute hidden transition-all w-full h-40 left-0 bottom-0 backdrop-blur justify-center items-center gap-4">
        <Button>View</Button>
        <Button>
          <Link
            className="flex gap-1 items-center"
            href={`/editor/${TemplateName}`}
          >
            <EyeIcon className="mr-2 w-4 h-4" /> Use Template
          </Link>
        </Button>
      </div>
    </div>
  );
}
