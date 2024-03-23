import { AllTemplates, AllTemplatesForServer } from "@/lib/templates/util";
import { NextRequest } from "next/server";
import { FunctionComponent, ReactNode } from "react";

export const generatePdf = async (req: NextRequest) => {
  const data = await req.json();

  try {
    const templateId = data.templateId;

    let browser;
    const puppeteer = require("puppeteer");
    browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
      headless: true,
    });

    if (!browser) {
      throw new Error("failed to launch browser");
    }

    const page = await browser.newPage();

    await page.goto(
      `http://localhost:3000/template/${templateId}?data=${JSON.stringify(
        data.values
      )}`
    );

    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
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
  }
};
