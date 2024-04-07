"use server";

import { basicInvoiceDetailsSchema } from "@/components/form/basicDetailsForm";
import { db } from "@/lib/db";
import { getSession } from "@/lib/session";
import { z } from "zod";

async function getBasicDetails() {
  try {
    const session = await getSession();
    if (!session) {
      return {
        status: "error",
        message: "User is not logged in",
      };
    } else {
      const basicDetails = await db.basicInvoiceDetails.findMany({
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
      message: "Error getting client details",
    };
  }
}

async function saveBasicDetails(
  data: z.infer<typeof basicInvoiceDetailsSchema>
) {
  try {
    const session = await getSession();
    if (!session) {
      return {
        status: "error",
        message: "User is not logged in",
      };
    } else {
      const basicDetails = await db.basicInvoiceDetails.create({
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
      message: "Error saving client details",
    };
  }
}

async function getBasicDetailsById(id: string) {
  try {
    const session = await getSession();
    if (!session) {
      return {
        status: "error",
        message: "User is not logged in",
      };
    } else {
      const basicDetails = await db.basicInvoiceDetails.findUnique({
        where: {
          id: id,
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
      message: "Error getting client details",
    };
  }
}

async function updateBasicDetails(
  id: string,
  data: z.infer<typeof basicInvoiceDetailsSchema>
) {
  try {
    const session = await getSession();
    if (!session) {
      return {
        status: "error",
        message: "User is not logged in",
      };
    } else {
      const basicDetails = await db.basicInvoiceDetails.update({
        where: {
          id: id,
          userId: session.user.id,
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
      message: "Error updating client details",
    };
  }
}

export {
  getBasicDetails,
  getBasicDetailsById,
  saveBasicDetails,
  updateBasicDetails,
};
