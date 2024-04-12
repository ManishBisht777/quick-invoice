"use server";

import { paymentDetailsSchema } from "@/components/form/paymentDetailsForm";
import { db } from "@/lib/db";
import { getSession } from "@/lib/session";
import { z } from "zod";

async function getPaymentDetails() {
  try {
    const session = await getSession();
    if (!session) {
      return {
        status: "error",
        message: "User is not logged in",
      };
    } else {
      const basicDetails = await db.paymentDetails.findMany({
        where: {
          userId: session.user.id,
        },
      });

      return {
        status: "success",
        data: basicDetails,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: "Error getting payment details",
    };
  }
}

async function savePaymentDetails(data: z.infer<typeof paymentDetailsSchema>) {
  try {
    const session = await getSession();
    if (!session) {
      return {
        status: "error",
        message: "User is not logged in",
      };
    } else {
      const basicDetails = await db.paymentDetails.create({
        data: {
          ...data,
          userId: session.user.id,
        },
      });

      return {
        status: "success",
        data: basicDetails,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: "Error saving payment details",
    };
  }
}

async function updatePaymentDetails(
  id: string,
  data: z.infer<typeof paymentDetailsSchema>
) {
  try {
    const session = await getSession();
    if (!session) {
      return {
        status: "error",
        message: "User is not logged in",
      };
    } else {
      const basicDetails = await db.paymentDetails.update({
        where: {
          id,
        },
        data: {
          ...data,
        },
      });

      return {
        status: "success",
        data: basicDetails,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: "Error updating payment details",
    };
  }
}

export { savePaymentDetails, updatePaymentDetails, getPaymentDetails };
