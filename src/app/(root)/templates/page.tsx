import { AllTemplates } from "@/lib/templates/util";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="grid grid-cols-4 gap-6 min-h-screen justify-center items-center">
      {Object.keys(AllTemplates).map((key) => {
        const templateImage = AllTemplates[key].image;
        return (
          <Link href={`/editor/${key}`} key={key} className="relative">
            <img
              src={templateImage}
              alt={key}
              fill
              className="object-contain"
            />
          </Link>
        );
      })}
    </div>
  );
}
