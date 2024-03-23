import { AllTemplates } from "@/lib/templates/util";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="container grid grid-cols-3 gap-6 min-h-screen justify-center">
      {Object.keys(AllTemplates).map((key) => {
        const templateImage = AllTemplates[key].image;
        return (
          <Link href={`/editor/${key}`} key={key}>
            <img src={templateImage} alt={key} fill className="object-cover" />
          </Link>
        );
      })}
    </div>
  );
}
