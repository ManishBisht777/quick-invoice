import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function page() {
  return (
    <div className="space-y-10 p-2">
      <div className="rounded-lg w-full flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold font-serif flex gap-1 items-center">
            Dashboard <ChevronRight />
            <span className="text-hot-orange">Payment details</span>
          </h2>
          <p className="text-muted-foreground text-sm">
            Manage all your payment details for autofill in invoice
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="w-full h-56 m-auto rounded-xl relative text-white shadow-2xl">
          <Image
            layout="fill"
            className="relative object-cover w-full h-full rounded-xl"
            src="https://i.imgur.com/Zi6v09P.png"
            alt="Visa card"
          />

          <div className="w-full px-8 absolute top-8">
            <div className="flex justify-between">
              <div className="">
                <p className="font-light">Name</p>
                <p className="font-medium tracking-widest">Karthik P</p>
              </div>
            </div>
            <div className="pt-1">
              <p className="font-light">Card Number</p>
              <p className="font-medium tracking-more-wider">
                4642 3489 9867 7632
              </p>
            </div>
            <div className="pt-6 pr-6">
              <div className="flex justify-between">
                <div className="">
                  <p className="font-light text-xs">Valid</p>
                  <p className="font-medium tracking-wider text-sm">11/15</p>
                </div>
                <div className="">
                  <p className="font-light text-xs">Expiry</p>
                  <p className="font-medium tracking-wider text-sm">03/25</p>
                </div>

                <div className="">
                  <p className="font-light text-xs">CVV</p>
                  <p className="font-bold tracking-more-wider text-sm">···</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-56 m-auto rounded-xl relative text-white shadow-2xl">
          <Image
            layout="fill"
            className="relative object-cover w-full h-full rounded-xl"
            src="https://i.imgur.com/kGkSg1v.png"
            alt="Visa card"
          />

          <div className="w-full px-8 absolute top-8">
            <div className="flex justify-between">
              <div className="">
                <p className="font-light">Name</p>
                <p className="font-medium tracking-widest">Karthik P</p>
              </div>
            </div>
            <div className="pt-1">
              <p className="font-light">Card Number</p>
              <p className="font-medium tracking-more-wider">
                4642 3489 9867 7632
              </p>
            </div>
            <div className="pt-6 pr-6">
              <div className="flex justify-between">
                <div className="">
                  <p className="font-light text-xs">Valid</p>
                  <p className="font-medium tracking-wider text-sm">11/15</p>
                </div>
                <div className="">
                  <p className="font-light text-xs">Expiry</p>
                  <p className="font-medium tracking-wider text-sm">03/25</p>
                </div>

                <div className="">
                  <p className="font-light text-xs">CVV</p>
                  <p className="font-bold tracking-more-wider text-sm">···</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-56 m-auto rounded-xl relative text-white shadow-2xl bg-gradient-to-r from-gray-500 to-gray-400">
          <div className="w-full px-8 absolute top-8">
            <div className="flex justify-between">
              <div className="">
                <p className="font-light">Name</p>
                <p className="font-medium tracking-widest">Karthik P</p>
              </div>
            </div>
            <div className="pt-1">
              <p className="font-light">Card Number</p>
              <p className="font-medium tracking-more-wider">
                4642 3489 9867 7632
              </p>
            </div>
            <div className="pt-6 pr-6">
              <div className="flex justify-between">
                <div className="">
                  <p className="font-light text-xs">Valid</p>
                  <p className="font-medium tracking-wider text-sm">11/15</p>
                </div>
                <div className="">
                  <p className="font-light text-xs">Expiry</p>
                  <p className="font-medium tracking-wider text-sm">03/25</p>
                </div>

                <div className="">
                  <p className="font-light text-xs">CVV</p>
                  <p className="font-bold tracking-more-wider text-sm">···</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
