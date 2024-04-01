"use server";

import { db } from "@/lib/db";
import { getSession } from "@/lib/session";
import { $Enums } from "@prisma/client";

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

async function updateInvoiceStatus(invoiceId: string, status: $Enums.Status) {
  try {
    const session = await getSession();
    if (!session) {
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

async function getBasicDetails() {
  try {
    const session = await getSession();
    if (!session) {
      return {
        message: "User is not logged in",
      };
    } else {
      const basicDetails = await db.basicInvoiceDetails.findMany({
        where: {
          userId: session.user.id,
        },
      });

      return basicDetails;
    }
  } catch (error) {
    console.log(error);
    return {
      message: "Error getting client details",
    };
  }
}

export { deleteInvoice, updateInvoiceStatus, getBasicDetails };
