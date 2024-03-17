import Editor from "@/components/Editor";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AllTemplates } from "@/lib/templates/util";

interface Props {
  params: {
    Id: string;
  };
}

export default function Page({ params: { Id } }: Props) {
  return (
    <main className="">
      <div className="flex justify-center">
        <Editor id={Id} />
      </div>
    </main>
  );
}
