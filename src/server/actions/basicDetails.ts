"use server";

import { db } from "@/lib/db";
import { getSession } from "@/lib/session";

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

export { getBasicDetails };
