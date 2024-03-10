import Editor from "@/components/Editor";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Props {
  id: string;
}

export default function Page({ params: { Id } }: { params: { Id: string } }) {
  return (
    <main className="">
      <div className="w-full bg-black h-14"></div>
      <div className="flex">
        <Editor />
      </div>
    </main>
  );
}
