"use server";

import { db } from "@/lib/db";
import { getSession } from "@/lib/session";

async function deleteInvoice(invoiceId: string) {
  try {
    const session = await getSession();
    if (!session) {
      return {
        message: "User is not logged in",
      };
    } else {
      const invoice = await db.invoice.delete({
        where: {
          id: invoiceId,
        },
      });

      return invoice;
    }
  } catch (error) {
    console.log(error);
    return {
      message: "Error deleting invoice",
    };
  }
}

export { deleteInvoice };
