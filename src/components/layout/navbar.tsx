import { Flower } from "lucide-react";
import Link from "next/link";
import { UserAccountNav } from "../useAccountMenu";
import { SignInButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

interface NavbarProps {}

export default async function Navbar({}: NavbarProps) {
  const user = await currentUser();

  return (
    <div className="md:my-10 my-5 flex">
      <div className="border w-fit p-3">
        {/* <Image src="/icons/menu.svg" width={35} height={35} alt="Menu" /> */}
        <Link href={"https://twitter.com/manishbisht9711"}>
          <svg width={25} height={25} fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
          </svg>
        </Link>
      </div>
      <div className="flex-1 border-t border-b border-r flex justify-center items-center">
        <Link href="/" className="flex gap-2">
          Quick
          <Flower size={24} />
          Invoice
        </Link>
      </div>
      {user ? (
        <div className="border border-l-0 px-6 flex justify-center items-center  transition-all">
          <UserAccountNav
            user={{
              name: user.firstName,
              image: user.imageUrl,
              email: user.emailAddresses[0].emailAddress,
            }}
          />
        </div>
      ) : (
        <div className="border border-l-0 px-6 flex justify-center items-center hover:bg-black hover:text-white transition-all">
          <SignInButton />
        </div>
      )}
    </div>
  );
}
