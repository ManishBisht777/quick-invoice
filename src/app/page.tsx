import Navbar from "@/components/layout/navbar";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronRight, Sparkles } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Quick Invoice",
  description: "The only invoice generator you will ever need.",
  openGraph: {
    images: "/opengraph.png",
    type: "website",
    title: "Quick Invoice",
    description: "The only invoice generator you will ever need.",
    siteName: "Quick invoice",
  },
};

export default function Home() {
  return (
    <>
      <main className="container flex-1 flex flex-col justify-center space-y-10">
        <Navbar />
        <div className="">
          <div className=" flex items-center flex-col space-y-4">
            <h1 className="capitalize md:text-5xl text-2xl font-extrabold text-center max-w-3xl">
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mr-3">
                Discover
              </span>
              Invoice Generation and Tracking Tools
            </h1>
            <p className="md:text-base text-xs text-center max-w-lg text-muted-foreground flex gap-1">
              Effortlessly create invoices with our
              <Sparkles className="w-5 h-5" /> intuitive tools!.
            </p>
            <div>
              <div className="flex gap-4 max-w-md justify-center">
                {/* <Link
                href="https://github.com/manishbisht777/quick-invoice/"
                className={cn("px-6", buttonVariants({ variant: "secondary" }))}
              >
                Github
              </Link> */}
                <Link
                  href="/templates"
                  className={cn("px-6", buttonVariants())}
                >
                  Generate Now
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center w-full">
            <div className="w-fit p-1 mt-14 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl">
              <div className="max-w-[75rem] rounded relative">
                <img
                  src="/images/promotion/hero.png"
                  className="rounded-xl"
                  alt="hero image"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative top-0 h-full w-full bg-white">
          <div className="flex justify-center items-center flex-col gap-4 md:mt-20 mt-10">
            <p className="text-sm font-medium bg-white rounded-full px-4 py-1 border shadow-sm">
              Features
            </p>
            <div className="text-center space-y-1">
              <h2 className="md:text-3xl text-xl font-bold">
                Simplify Your Invoicing Process Today
              </h2>
              <p className="md:text-base text-xs text-primary max-w-lg text-center">
                Streamline your invoicing process with our easy-to-use tools.
              </p>
            </div>
            <Link href="/templates">
              <div className="flex gap-1 items-center text-gradient font-medium cursor-pointer">
                <span>Learn more</span>
                <ChevronRight className="text-orange-500" size={20} />
              </div>
            </Link>
          </div>

          <div className="grid md:grid-cols-5 gap-8 mt-10">
            <Card className="md:col-span-2 flex flex-col justify-between">
              <CardHeader className="relative md:h-72 h-fit">
                <Image
                  src="/images/promotion/manage.svg"
                  alt="invoice"
                  className="z-10"
                  width={500}
                  height={500}
                />
              </CardHeader>
              <CardContent className="space-y-2 mt-8">
                <CardTitle>Effortless Invoice Tracking</CardTitle>
                <CardDescription className="text-primary">
                  Mange invoices with ease
                </CardDescription>
                <Link href="/templates">
                  <div className="flex gap-1 items-center text-gradient font-medium cursor-pointer mt-1">
                    <span>Learn more</span>
                    <ChevronRight className="text-orange-500" size={20} />
                  </div>
                </Link>
              </CardContent>
            </Card>
            <Card className="md:col-span-3 flex flex-col justify-between">
              <CardHeader className="relative md:h-72 h-fit">
                <Image
                  src="/images/promotion/editor.svg"
                  alt="invoice"
                  className="z-10"
                  width={1000}
                  height={500}
                />
              </CardHeader>
              <CardContent className="space-y-2 mt-8">
                <CardTitle>Save Time with Autofill Details</CardTitle>
                <CardDescription className="text-primary">
                  Our autofill feature populates client information, saving you
                  time and minimizing errors.
                </CardDescription>
                <Link href="/templates">
                  <div className="flex gap-1 items-center text-gradient font-medium cursor-pointer mt-1">
                    <span>Learn more</span>
                    <ChevronRight className="text-orange-500" size={20} />
                  </div>
                </Link>
              </CardContent>
            </Card>
            <Card className="md:col-span-3 flex flex-col justify-between">
              <CardHeader className="relative md:h-72 h-fit">
                <Image
                  src="/images/promotion/templates.svg"
                  alt="invoice"
                  className="z-10"
                  width={1000}
                  height={500}
                />
              </CardHeader>
              <CardContent className="space-y-2 mt-8">
                <CardTitle>Tailored templates</CardTitle>
                <CardDescription className="text-primary">
                  Generate professional invoices in minutes with customizable
                  templates tailored to your business needs.
                </CardDescription>
                <Link href="/templates">
                  <div className="flex gap-1 items-center text-gradient font-medium cursor-pointer mt-1">
                    <span>Learn more</span>
                    <ChevronRight className="text-orange-500" size={20} />
                  </div>
                </Link>
              </CardContent>
            </Card>
            <Card className="md:col-span-2 flex flex-col justify-between">
              <CardHeader className="relative md:h-72 h-fit">
                <Image
                  src="/images/promotion/dashboard.svg"
                  alt="invoice"
                  className="z-10"
                  width={500}
                  height={500}
                />
              </CardHeader>
              <CardContent className="space-y-2">
                <CardTitle>Full control</CardTitle>
                <CardDescription className="text-primary">
                  Get access to all your invoices and clients in one place
                </CardDescription>
                <Link href="/templates">
                  <div className="flex gap-1 items-center text-gradient font-medium cursor-pointer mt-1">
                    <span>Learn more</span>
                    <ChevronRight className="text-orange-500" size={20} />
                  </div>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* <div className="bg-grid-3 flex flex-col justify-center items-center space-y-3 mt-2">
        <p className="text-lg font-medium bg-white rounded-full px-6 py-1 border shadow-sm mt-16">
          Features
        </p>
        <h2 className="text-3xl font-semibold">
          Don&apos;t miss out on the latest features
        </h2>

        <div className="space-y-10 mt-6">
          <div className="grid grid-cols-2 gap-10 mt-10">
            <div className="space-y-3">
              <div className="bg-purple-100 w-10 h-10 rounded-full flex justify-center items-center">
                <BarChart3 className="text-purple-600" size={20} />
              </div>
              <p className="text-purple-700 text-sm">
                Lorem ipsum dolor sit amet.
              </p>
              <p className="uppercase font-semibold text-xl">
                Your sales are well organised
              </p>
              <p className="max-w-md text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aperiam necessitatibus ad enim architecto non, repellendus quae
                vero ratione amet alias maxime error velit.
              </p>

              <div className="flex gap-2">
                <Button variant="secondary" className="rounded-full">
                  <span>Sales tracking</span>
                  <Check className="ml-2" size={20} />
                </Button>
                <Button variant="secondary" className="rounded-full">
                  <span>Charts</span>
                  <Check className="ml-2" size={20} />
                </Button>
              </div>
            </div>
            <div className="h-60 bg-slate-50 rounded"></div>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div className="h-60 bg-slate-50 rounded"></div>
            <div className="space-y-3">
              <div className="bg-purple-100 w-10 h-10 rounded-full flex justify-center items-center">
                <BarChart3 className="text-purple-600" size={20} />
              </div>
              <p className="text-purple-700 text-sm">
                Lorem ipsum dolor sit amet.
              </p>
              <p className="uppercase font-semibold text-xl">
                Your sales are well organised
              </p>
              <p className="max-w-md text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aperiam necessitatibus ad enim architecto non, repellendus quae
                vero ratione amet alias maxime error velit.
              </p>

              <div className="flex gap-2">
                <Button variant="secondary" className="rounded-full">
                  <span>Sales tracking</span>
                  <Check className="ml-2" size={20} />
                </Button>
                <Button variant="secondary" className="rounded-full">
                  <span>Charts</span>
                  <Check className="ml-2" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-3">
              <div className="bg-purple-100 w-10 h-10 rounded-full flex justify-center items-center">
                <BarChart3 className="text-purple-600" size={20} />
              </div>
              <p className="text-purple-700 text-sm">
                Lorem ipsum dolor sit amet.
              </p>
              <p className="uppercase font-semibold text-xl">
                Your sales are well organised
              </p>
              <p className="max-w-md text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aperiam necessitatibus ad enim architecto non, repellendus quae
                vero ratione amet alias maxime error velit.
              </p>

              <div className="flex gap-2">
                <Button variant="secondary" className="rounded-full">
                  <span>Sales tracking</span>
                  <Check className="ml-2" size={20} />
                </Button>
                <Button variant="secondary" className="rounded-full">
                  <span>Charts</span>
                  <Check className="ml-2" size={20} />
                </Button>
              </div>
            </div>
            <div className="h-60 bg-slate-50 rounded"></div>
          </div>
        </div>
      </div> */}

        {/* <div className="space-y-10 relative">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
        <div>
          <p className="text-lg font-medium bg-white rounded-full px-6 py-1 border shadow-sm mt-16 w-fit">
            Testimonials
          </p>
          <h2 className="text-4xl font-semibold max-w-sm">
            What our customers are saying
          </h2>
        </div>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <Card className="max-w-sm">
            <CardHeader className="flex justify-between flex-row">
              <div className="flex gap-2">
                <div className="w-10 h-10 rounded-full bg-slate-300"></div>
                <div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-xs text-muted-foreground">
                    CEO at Company
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
              </div>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground -mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto nesciunt cupiditate quibusdam dicta exercitationem
              soluta aperiam magni repellendus earum! Non quo aspernatur.
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center items-center">
          <Button variant="secondary" className="rounded-full">
            <span>View more</span>
            <ChevronRight className="ml-2" size={20} />
          </Button>
        </div>
      </div> */}

        <div className="h-[60vh] flex justify-center flex-col text-center items-center space-y-2">
          <p className="text-sm">Get started</p>
          <h4 className="capitalize text-3xl font-bold">
            Bring your <span className="text-gradient">business </span> next
            level
          </h4>
          <p className="max-w-xl text-sm text-muted-foreground">
            Start generating invoices with our easy-to-use tools.
          </p>
          <Link href="/templates">
            <div className="flex gap-1 items-center text-gradient font-medium cursor-pointer mt-1">
              <span>Learn more</span>
              <ChevronRight className="text-orange-500" size={20} />
            </div>
          </Link>
        </div>
      </main>
      <footer className="container py-4 flex justify-between">
        <p className="text-gray-500">
          &copy; {new Date().getFullYear()} Quick invoice. Simplifying your
          invoicing needs
        </p>
        <Link href={"https://twitter.com/manishbisht9711"}>
          <svg width={24} height={24} fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
          </svg>
        </Link>
      </footer>
    </>
  );
}
