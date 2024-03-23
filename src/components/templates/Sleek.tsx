import { templateProps } from "@/config/template";
import { initialTemplateProps } from "@/types/template";

interface SleekTemplateProps {
  initialValue?: initialTemplateProps;
}

export default function Sleek({ initialValue }: SleekTemplateProps) {
  const templateValues = initialValue || templateProps;

  return (
    <div className="w-full p-8 bg-gray-50">
      <div className="w-full px-6 py-10 rounded-3xl template-bg">
        <h1 className="text-3xl font-semibold text-blue-500">Invoice</h1>

        <div className="grid grid-cols-3 gap-2 mt-4">
          <div className="">
            <p className="font-semibold">Invoice Details</p>
            <div className="text-sm space-y-1 mt-2">
              <p className="text-muted-foreground">
                Invoice number{" "}
                <span className="text-black font-semibold">000034</span>
              </p>
              <p className="text-muted-foreground">
                Issued{" "}
                <span className="text-black font-semibold">3/4/2023</span>
              </p>
              <p className="text-muted-foreground">
                Due <span className="text-black font-semibold">3/4/2023</span>
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4">
            <p className="text-xs">Billed from</p>
            <h2 className="font-semibold mt-2">
              {templateValues.basicDetails.to?.name}
            </h2>
            <div className="text-muted-foreground text-sm mt-2 flex flex-wrap gap-1">
              <span>{templateValues.basicDetails.to?.address?.address}</span>
              <span>{templateValues.basicDetails.to?.address?.country}</span>
              <span>{templateValues.basicDetails.to?.address?.state}</span>
              <span>{templateValues.basicDetails.to?.address?.zipCode}</span>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4">
            <p className="text-xs">Billed to</p>
            <h2 className="font-semibold mt-2">
              {templateValues.basicDetails.to?.name}
            </h2>
            <div className="text-muted-foreground text-sm mt-2 flex flex-wrap gap-1">
              <span>{templateValues.basicDetails.to?.address?.address}</span>
              <span>{templateValues.basicDetails.to?.address?.country}</span>
              <span>{templateValues.basicDetails.to?.address?.state}</span>
              <span>{templateValues.basicDetails.to?.address?.zipCode}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3">
        <div className="py-2 border-y-[1px] border-[#D7DAE0] justify-between grid grid-cols-7 gap-1 mb-2 text-sm">
          <p className="col-span-4">Item</p>
          <p className="col-span-1 text-center">Quantity</p>
          <p className="col-span-1 text-center">Price</p>
          <p className="col-span-1 text-end">Amount</p>
        </div>
        <div className="flex flex-col gap-3 border-b border-[#D7DAE0] pb-3">
          {templateValues.items.map((item, index) => (
            <div key={index} className="grid grid-cols-7 gap-1 items-center">
              <div className="col-span-4">
                <p className="text-[#1A1C21] font-medium">{item.name}</p>
                <p className="text-xs text-muted-foreground">
                  {item.description}
                </p>
              </div>
              <p className="col-span-1 text-center">{item.quantity}</p>
              <p className="col-span-1 text-muted-foreground text-center">
                {item.price}
              </p>
              <p className="col-span-1 font-semibold text-end">
                {item.price * item.quantity}
              </p>
            </div>
          ))}

          <div className="mt-4 border-t pt-2">
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
              <p className="text-blue-500 text-xl font-bold ">$4,950.00</p>
            </div>
          </div>
        </div>
        <div className="border-[#D7DAE0] mt-4 pt-4">
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
        <div className="mt-6 text-xs">
          <p>Terms & Conditions</p>
          <p>Please pay within 15 days of receiving this invoice.</p>
        </div>
      </div>
    </div>
  );
}
