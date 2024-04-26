import { NextRequest } from "next/server";
import chromium from "chrome-aws-lambda";
import playwright from "playwright-core";
import edgeChromium from "chrome-aws-lambda";
import puppeteer from "puppeteer-core";

const LOCAL_CHROME_EXECUTABLE = "C:/Program Files/Google/Chrome/Application";

export const generatePdf = async (req: NextRequest) => {
  const data = await req.json();

  try {
    const templateId = data.templateId;

    // const browser = await chromium.puppeteer.launch({
    //   args: [...chromium.args, "--hide-scrollbars", "--disable-web-security"],
    //   defaultViewport: chromium.defaultViewport,
    //   executablePath: await chromium.executablePath,
    //   headless: true,
    //   ignoreHTTPSErrors: true,
    // });

    // let browser;
    // const puppeteer = require("puppeteer");
    // browser = await puppeteer.launch({
    //   args: ["--no-sandbox", "--disable-setuid-sandbox"],
    //   headless: true,
    // });

    // const browser = await playwright.chromium.launch({
    //   args: chromium.args,
    //   headless:
    //     process.env.NODE_ENV === "production" ? chromium.headless : true,
    //   executablePath:
    //     process.env.NODE_ENV === "production"
    //       ? await chromium.executablePath
    //       : "",
    // });

    const executablePath =
      (await edgeChromium.executablePath) || LOCAL_CHROME_EXECUTABLE;

    const browser = await puppeteer.launch({
      executablePath,
      args: edgeChromium.args,
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
      // format: "A4",
      // printBackground: true,
      type: "png",
    });

    await browser.close();

    // const pdfBlob = new Blob([pdf], { type: "application/pdf" });

    // const response = new Response(pdfBlob, {
    //   headers: {
    //     "Content-Type": "application/pdf",
    //     "Content-Disposition": "inline; filename=invoice.pdf",
    //   },
    //   status: 200,
    // });

    console.log(pdf);

    const imageBlob = new Blob([pdf], { type: "image/png" });

    const response = new Response(imageBlob, {
      headers: {
        "Content-Type": "image/png",
      },
      status: 200,
    });

    return response;
  } catch (error) {
    console.log(error);

    return new Response("An error occurred", { status: 500 });
  }
};
