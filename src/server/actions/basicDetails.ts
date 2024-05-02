"use server";

import { basicInvoiceDetailsSchema } from "@/components/form/basicDetailsForm";
import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { z } from "zod";

async function getBasicDetails() {
  try {
    const user = await currentUser();
    if (!user) {
      return {
        status: "error",
        message: "User is not logged in",
      };
    } else {
      const basicDetails = await db.basicInvoiceDetails.findMany({
        where: {
          userId: user.id,
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
    const user = await currentUser();
    if (!user) {
      return {
        status: "error",
        message: "User is not logged in",
      };
    } else {
      const basicDetails = await db.basicInvoiceDetails.create({
        data: {
          ...data,
          userId: user.id,
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
    const user = await currentUser();
    if (!user) {
      return {
        status: "error",
        message: "User is not logged in",
      };
    } else {
      const basicDetails = await db.basicInvoiceDetails.findUnique({
        where: {
          id: id,
          userId: user.id,
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
    const user = await currentUser();
    if (!user) {
      return {
        status: "error",
        message: "User is not logged in",
      };
    } else {
      const basicDetails = await db.basicInvoiceDetails.update({
        where: {
          id: id,
          userId: user.id,
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

async function deleteBasicDetails(id: string) {
  try {
    const user = await currentUser();
    if (!user) {
      return {
        status: "error",
        message: "User is not logged in",
      };
    } else {
      await db.basicInvoiceDetails.delete({
        where: {
          id: id,
          userId: user.id,
        },
      });

      return {
        status: "success",
        message: "Client details deleted",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: "Error deleting client details",
    };
  }
}

export {
  getBasicDetails,
  getBasicDetailsById,
  saveBasicDetails,
  updateBasicDetails,
  deleteBasicDetails,
};
