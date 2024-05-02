"use server";

import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { $Enums } from "@prisma/client";

async function deleteInvoice(invoiceId: string) {
  try {
    const user = await currentUser();
    if (!user) {
      return {
        message: "User is not logged in",
      };
    } else {
      const invoice = await db.invoice.delete({
        where: {
          id: invoiceId,
          user: { id: user.id },
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

async function updateInvoiceStatus(invoiceId: string, status: $Enums.Status) {
  try {
    const user = await currentUser();
    if (!user) {
      return {
        message: "User is not logged in",
      };
    } else {
      const invoice = await db.invoice.update({
        where: {
          id: invoiceId,
        },
        data: {
          status: status,
        },
      });

      return invoice;
    }
  } catch (error) {
    console.log(error);
    return {
      message: "Error updating invoice status",
    };
  }
}

export { deleteInvoice, updateInvoiceStatus };
