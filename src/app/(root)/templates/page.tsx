import { AllTemplates } from "@/lib/templates/util";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className="px-6 py-8 border rounded-lg w-full flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold flex gap-1 items-center">
            <span className="text-hot-orange">Templates</span>
          </h2>
          <p className="text-muted-foreground text-sm">
            Explore a wide range of templates for base of your invoice
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3  gap-6 min-h-screen justify-center mt-6">
        {Object.keys(AllTemplates).map((key) => {
          const templateImage = AllTemplates[key].image;
          return (
            <Link href={`/editor/${key}`} key={key}>
              <img src={templateImage} alt={key} className="object-cover" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
