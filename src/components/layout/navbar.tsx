import { Flower } from "lucide-react";
import Image from "next/image";

interface NavbarProps {}

export default function Navbar({}: NavbarProps) {
  return (
    <div className="container my-10 flex">
      <div className="border w-fit p-2">
        <Image src="/icons/menu.svg" width={35} height={35} alt="Menu" />
      </div>
      <div className="flex-1 border-t border-b border-r flex justify-center items-center gap-2">
        Snappy
        <Flower size={24} />
        Invoice
      </div>
    </div>
  );
}