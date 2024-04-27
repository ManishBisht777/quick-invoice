import { NextRequest } from "next/server";

export const generatePdf = async (req: NextRequest) => {
  const data = await req.json();

  try {
    const templateId = data.templateId;

    const puppeteer = require("puppeteer");

    const browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
      headless: false,
    });

    if (!browser) {
      throw new Error("failed to launch browser");
    }

    console.log("Browser launched");

    const page = await browser.newPage();

    await page.goto(
      `${
        process.env.NEXT_PUBLIC_APP_URL
      }/template/${templateId}?data=${JSON.stringify(data.values)}`
    );

    console.log("Page loaded");

    const pdf = await page.screenshot({
      format: "A4",
      printBackground: true,
      type: "png",
    });

    await browser.close();

    const pdfBlob = new Blob([pdf], { type: "application/pdf" });

    const response = new Response(pdfBlob, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline; filename=invoice.pdf",
      },
      status: 200,
    });

    return response;
  } catch (error) {
    console.log(error);

    return new Response("An error occurred", { status: 500 });
  }
};
