import { Button, buttonVariants } from "@/components/ui/button";
import { AllTemplates } from "@/lib/templates/util";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className="flex gap-4">
        <div className="px-6 py-8 border rounded-lg w-full flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">Templates</h2>
            <p className="text-muted-foreground text-sm">
              Explore a wide range of templates for base of your invoice
            </p>
          </div>
          <Link
            className={cn(buttonVariants(), "flex gap-2")}
            href="https://github.com/manishbisht777/quick-invoice/"
          >
            <Star size={16} />
            Star
          </Link>
        </div>
        {/* <div className="px-6 py-8 border rounded-lg bg-grid-2 w-1/5 space-y-1">
          <h4 className="text-xl font-semibold">$5000+</h4>
          <p className="text-muted-foreground text-sm">Splitted so far</p>
        </div> */}
      </div>

      <div className="grid grid-cols-3 gap-6 min-h-screen justify-center mt-6">
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
