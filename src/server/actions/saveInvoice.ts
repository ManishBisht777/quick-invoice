"use server";

import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { $Enums } from "@prisma/client";

async function saveInvoice(
  templateValues: any,
  invoiceName: string,
  templateType: $Enums.Template,
  totalAmount: number,
  saveClientDetails: boolean,
  name: string
) {
  try {
    const user = await currentUser();
    if (!user) {
      return {
        message: "User is not logged in",
      };
    } else {
      const invoice = await db.invoice.create({
        data: {
          name: invoiceName,
          userId: user.id,
          content: JSON.stringify(templateValues),
          status: "Draft",
          template: templateType,
          totalAmount: totalAmount || 0,
        },
      });

      if (saveClientDetails) {
        await db.basicInvoiceDetails.create({
          data: {
            userId: user.id,
            address: templateValues.basicDetails.to?.address?.address,
            city: templateValues.basicDetails.to?.address?.city,
            country: templateValues.basicDetails.to?.address?.country,
            state: templateValues.basicDetails.to?.address?.state,
            isSender: false,
            phone: templateValues.basicDetails.to?.phoneNumber,
            zip: templateValues.basicDetails.to?.address?.zipCode,
            name: templateValues.basicDetails.to?.name,
            detailsName: name,
            email: templateValues.basicDetails.to?.email,
          },
        });
      }
      return invoice;
    }
  } catch (error) {
    console.log(error);
    return {
      message: "Error saving invoice",
    };
  }
}

export default saveInvoice;
