"use server";

import { db } from "@/lib/db";
import { getSession } from "../../lib/session";
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
    const session = await getSession();
    if (!session) {
      return {
        message: "User is not logged in",
      };
    } else {
      const invoice = await db.invoice.create({
        data: {
          name: invoiceName,
          userId: session.user.id,
          content: JSON.stringify(templateValues),
          status: "Draft",
          template: templateType,
          totalAmount: totalAmount || 0,
        },
      });

      if (saveClientDetails) {
        await db.basicInvoiceDetails.create({
          data: {
            userId: session.user.id,
            address: templateValues.basicDetails.from?.address?.address,
            city: templateValues.basicDetails.from?.address?.city,
            country: templateValues.basicDetails.from?.address?.country,
            state: templateValues.basicDetails.from?.address?.state,
            isSender: false,
            phone: templateValues.basicDetails.from?.phoneNumber,
            zip: templateValues.basicDetails.from?.address?.zipCode,
            name: name,
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
