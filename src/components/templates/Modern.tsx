import { templateProps } from "@/config/template";
import { WorkType } from "@/enum/work";
import { getPercentageValue } from "@/lib/mathUtil";
import { calculateHourlyAmount, cn, formatDate } from "@/lib/utils";
import { initialTemplateProps } from "@/types/template";

interface ModernTemplateProps {
  initialValue?: initialTemplateProps;
}

export default function Modern({ initialValue }: ModernTemplateProps) {
  const templateValues = initialValue || templateProps;

  const totalAmount = templateValues.items.reduce((acc, item) => {
    if (templateValues.invoiceDetails.workType === WorkType.QUANTITY) {
      return acc + item.price * item.quantity;
    }

    if (templateValues.invoiceDetails.workType === WorkType.HOURLY) {
      return (
        acc +
        calculateHourlyAmount(
          item.hours,
          templateValues.invoiceDetails.hourlyRate
        )
      );
    }

    if (templateValues.invoiceDetails.workType === WorkType.FIXED) {
      return acc + item.price;
    }

    return acc;
  }, 0);

  const formattedTotalAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: templateValues.invoiceDetails.currency || "INR",
  }).format(totalAmount);

  return (
    <div className="text-[#5E6470] md:text-sm text-xs w-full h-fit bg-[#F9FAFC] md:p-4 px-2 py-0 rounded-lg group relative">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-[#1A1C21] font-semibold md:text-xl text-base">
            {templateValues.basicDetails.from?.name}
          </h1>
          <p>{templateValues.basicDetails.from?.website}</p>
          <p>{templateValues.basicDetails.from?.email}</p>
          <p>{templateValues.basicDetails.from?.phoneNumber}</p>
        </div>
        <div>
          <p>{templateValues.basicDetails.from?.address?.address}</p>
          <p>
            {templateValues.basicDetails.from?.address?.country}
            {templateValues.basicDetails.from?.address?.country && ", "}
            {templateValues.basicDetails.from?.address?.state}
            {templateValues.basicDetails.from?.address?.zipCode && (
              <>- {templateValues.basicDetails.from?.address?.zipCode}</>
            )}
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
            <p>{templateValues.basicDetails.to?.phoneNumber}</p>
            <p>{templateValues.basicDetails.to?.address?.address}</p>
            <p>{templateValues.basicDetails.to?.address?.country}</p>
            <p>{templateValues.basicDetails.to?.address?.state}</p>
            <p>{templateValues.basicDetails.to?.address?.zipCode}</p>
          </div>
          {/* <div>
            <h2>Invoice Number</h2>
            <p className="text-[#1A1C21] font-semibold">
              # {templateValues.invoiceNumber}
            </p>
          </div> */}
        </div>

        <div className="flex justify-between mt-4">
          <div>
            <p>Invoice Date</p>
            <p className="text-[#1A1C21] font-semibold">
              {templateValues.invoiceDetails?.issueDate instanceof Date
                ? templateValues.invoiceDetails.issueDate.toLocaleDateString(
                    "en-IN"
                  )
                : formatDate(templateValues.invoiceDetails?.issueDate)}
            </p>
          </div>
          <div>
            <p>Due Date</p>
            <p className="text-[#1A1C21] font-semibold">
              {templateValues.invoiceDetails?.dueDate instanceof Date
                ? templateValues.invoiceDetails.dueDate.toLocaleDateString(
                    "en-IN"
                  )
                : formatDate(templateValues.invoiceDetails?.dueDate)}
            </p>
          </div>
        </div>

        <div className="mt-3">
          <div
            className={cn(
              "py-2 border-y-[1px] border-[#D7DAE0] justify-between grid gap-1 mb-2",
              templateValues.invoiceDetails.workType === WorkType.QUANTITY
                ? "grid-cols-7"
                : "grid-cols-6"
            )}
          >
            <p className="col-span-4">Item</p>
            {templateValues.invoiceDetails.workType === WorkType.QUANTITY && (
              <p className="col-span-1 text-end">Quantity</p>
            )}

            {templateValues.invoiceDetails.workType === WorkType.HOURLY && (
              <p className="col-span-1 text-end">Hours</p>
            )}
            {(templateValues.invoiceDetails.workType === WorkType.QUANTITY ||
              templateValues.invoiceDetails.workType === WorkType.FIXED) && (
              <p className="col-span-1 text-end">Price</p>
            )}

            <p className="col-span-1 text-end">Amount</p>
          </div>
          <div className="flex flex-col gap-3 border-b border-[#D7DAE0] pb-3">
            {templateValues.items.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "grid grid-cols-7 gap-1 items-center",
                  templateValues.invoiceDetails.workType === WorkType.QUANTITY
                    ? "grid-cols-7"
                    : "grid-cols-6"
                )}
              >
                <div className="col-span-4">
                  <p className="text-[#1A1C21] font-medium">{item.name}</p>
                  <p>{item.description}</p>
                </div>

                {templateValues.invoiceDetails.workType ===
                  WorkType.QUANTITY && (
                  <p className="col-span-1 text-end">{item.quantity}</p>
                )}

                {templateValues.invoiceDetails.workType === WorkType.HOURLY && (
                  <p className="col-span-1 text-end">{item.hours}</p>
                )}

                {(templateValues.invoiceDetails.workType ===
                  WorkType.QUANTITY ||
                  templateValues.invoiceDetails.workType ===
                    WorkType.FIXED) && (
                  <p className="col-span-1 text-end">{item.price}</p>
                )}

                {templateValues.invoiceDetails.workType === WorkType.HOURLY && (
                  <p className="col-span-1 text-end">
                    {calculateHourlyAmount(
                      item.hours,
                      templateValues.invoiceDetails.hourlyRate
                    )}
                  </p>
                )}

                {templateValues.invoiceDetails.workType ===
                  WorkType.QUANTITY && (
                  <p className="col-span-1 text-end">
                    {item.price * item.quantity}
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 space-y-1">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>{formattedTotalAmount}</p>
            </div>

            {templateValues.paymentDetails.tax > 0 && (
              <div className="flex justify-between gap-3">
                <p className="text-[#1A1C21] font-medium">
                  Tax{`(${templateValues.paymentDetails.tax}%)`}
                </p>
                <p>
                  {getPercentageValue(
                    totalAmount,
                    templateValues.paymentDetails.tax
                  )}
                </p>
              </div>
            )}
            {templateValues.paymentDetails.discount > 0 && (
              <div className="flex justify-between gap-3">
                <p className="text-[#1A1C21] font-medium">
                  Discount{`(${templateValues.paymentDetails.discount}%)`}
                </p>
                <p>
                  {getPercentageValue(
                    totalAmount,
                    templateValues.paymentDetails.discount
                  )}
                </p>
              </div>
            )}
            {templateValues.paymentDetails.shipping > 0 && (
              <div className="flex justify-between gap-3">
                <p className="text-[#1A1C21] font-medium">
                  Shipping{`(${templateValues.paymentDetails.shipping}%)`}
                </p>
                <p>
                  {getPercentageValue(
                    totalAmount,
                    templateValues.paymentDetails.shipping
                  )}
                </p>
              </div>
            )}

            <div className="flex justify-between border-t border-[#D7DAE0] mt-3 pt-3">
              <p className="text-[#1A1C21] font-semibold">Total</p>
              <p className="text-[#E87117] text-xl font-bold">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: templateValues.invoiceDetails.currency || "INR",
                }).format(
                  totalAmount +
                    getPercentageValue(
                      totalAmount,
                      templateValues.paymentDetails.shipping
                    ) -
                    getPercentageValue(
                      totalAmount,
                      templateValues.paymentDetails.discount
                    ) +
                    getPercentageValue(
                      totalAmount,
                      templateValues.paymentDetails.tax
                    )
                )}
              </p>
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
    </div>
  );
}
