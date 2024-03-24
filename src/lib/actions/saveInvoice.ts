"use server";

import { getSession } from "../session";

async function saveInvoice() {
  console.log("this is server saction");
  try {
    const session = await getSession();
    if (!session) {
      console.log("You need to be logged in to save an invoice");
    } else {
      console.log("You are logged in");
      // Save the invoice to the database
      // const invoice = await prisma.invoice.create({
      //   data: {
      //     name: invoiceName,
      //     userId: session.userId,
      //     templateId: id,
      //     data: JSON.stringify(initialValues),
      //   },
      // });
    }
  } catch (error) {
    console.log(error);
  }
}

export default saveInvoice;
