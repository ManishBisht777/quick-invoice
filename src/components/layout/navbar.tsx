import { getCurrentUser } from "@/lib/session";
import { Flower } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { UserAccountNav } from "../useAccountMenu";

interface NavbarProps {}

export default async function Navbar({}: NavbarProps) {
  const user = await getCurrentUser();

  return (
    <div className="my-10 flex">
      <div className="border w-fit p-2">
        <Image src="/icons/menu.svg" width={35} height={35} alt="Menu" />
      </div>
      <div className="flex-1 border-t border-b border-r flex justify-center items-center">
        <Link href="/" className="flex gap-2">
          Snappy
          <Flower size={24} />
          Invoice
        </Link>
      </div>
      {user ? (
        <div className="border border-l-0 px-6 flex justify-center items-center  transition-all">
          <UserAccountNav
            user={{ name: user.name, image: user.image, email: user.email }}
          />
        </div>
      ) : (
        <Link
          className="border border-l-0 px-6 flex justify-center items-center hover:bg-black hover:text-white transition-all"
          href="/login"
        >
          Login
        </Link>
      )}
    </div>
  );
}
