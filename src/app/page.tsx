import Navbar from "@/components/layout/navbar";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container flex-1 flex flex-col justify-center space-y-10">
      <Navbar />
      <div className="bg-grid">
        <div className=" flex items-center flex-col space-y-4">
          <h1 className="capitalize text-5xl font-extrabold text-center max-w-3xl">
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mr-3">
              Discover
            </span>
            Invoice Generation and Tracking Tools
          </h1>
          <p className="text-center max-w-lg text-muted-foreground flex gap-1">
            Effortlessly create invoices with our
            <Sparkles className="w-5 h-5" /> intuitive tools!.
          </p>
          <div>
            <div className="flex gap-4 max-w-md justify-center">
              <Link
                href="https://github.com/manishbisht777/quick-invoice/"
                className={cn("px-6", buttonVariants({ variant: "secondary" }))}
              >
                Github
              </Link>
              <Link href="/templates" className={cn("px-6", buttonVariants())}>
                Generate Now
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full p-1 mt-14 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl">
          <div className="w-full h-full rounded relative">
            <img
              src="/images/promotion/hero.png"
              className="rounded-xl"
              alt="hero image"
            />
          </div>
        </div>
      </div>

      <div className="relative top-0 -z-10 h-full w-full bg-white">
        <div className="flex justify-center items-center flex-col gap-4 mt-20">
          <p className="text-sm font-medium bg-white rounded-full px-4 py-1 border shadow-sm">
            Features
          </p>
          <div className="text-center space-y-1">
            <h2 className="text-3xl font-bold">
              Work 5x faster, Save you time
            </h2>
            <p className="text-primary max-w-lg text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
              iste iusto sunt nesciunt velit nisi.
            </p>
          </div>
          <div className="flex gap-1 items-center text-gradient font-medium">
            <span>Learn more</span>
            <ChevronRight className="text-orange-500" size={20} />
          </div>
        </div>

        <div className="grid grid-cols-5 gap-8 mt-10">
          <Card className="col-span-2">
            <CardHeader className="h-80"></CardHeader>
            <CardContent className="space-y-2">
              <CardTitle>Import data make easier</CardTitle>
              <CardDescription className="text-lg text-primary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, voluptate.
              </CardDescription>
              <div className="flex gap-1 items-center text-gradient font-medium">
                <span>Learn more</span>
                <ChevronRight className="text-orange-500" size={20} />
              </div>
            </CardContent>
          </Card>
          <Card className="col-span-3">
            <CardHeader className="h-80"></CardHeader>
            <CardContent className="space-y-2">
              <CardTitle>Import data make easier</CardTitle>
              <CardDescription className="text-lg text-primary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, voluptate.
              </CardDescription>
              <div className="flex gap-1 items-center text-gradient font-medium">
                <span>Learn more</span>
                <ChevronRight className="text-orange-500" size={20} />
              </div>
            </CardContent>
          </Card>
          <Card className="col-span-3">
            <CardHeader className="h-80"></CardHeader>
            <CardContent className="space-y-2">
              <CardTitle>Import data make easier</CardTitle>
              <CardDescription className="text-lg text-primary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, voluptate.
              </CardDescription>
              <div className="flex gap-1 items-center text-gradient font-medium">
                <span>Learn more</span>
                <ChevronRight className="text-orange-500" size={20} />
              </div>
            </CardContent>
          </Card>
          <Card className="col-span-2">
            <CardHeader className="h-80"></CardHeader>
            <CardContent className="space-y-2">
              <CardTitle>Import data make easier</CardTitle>
              <CardDescription className="text-lg text-primary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, voluptate.
              </CardDescription>
              <div className="flex gap-1 items-center text-gradient font-medium">
                <span>Learn more</span>
                <ChevronRight className="text-orange-500" size={20} />
              </div>
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

      <div className="bg-grid h-[60vh] flex justify-center flex-col text-center items-center space-y-2">
        <p className="text-sm">Get started</p>
        <h4 className="capitalize text-3xl font-bold">
          Bring your <span className="text-gradient">business </span> next level
        </h4>
        <p className="max-w-xl text-sm text-muted-foreground">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
          voluptas aspernatur perferendis repellat sapiente in dolores velit
          facilis vero accusamus?
        </p>
        <div className="flex gap-1 items-center text-gradient font-medium">
          <span>Learn more</span>
          <ChevronRight className="text-orange-500" size={20} />
        </div>
      </div>
    </main>
  );
}
