import Editor from "@/components/Editor";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Props {
  id: string;
}

export default function Page({ params: { Id } }: { params: { Id: string } }) {
  return (
    <main className="flex gap-4">
      <ScrollArea className="h-screen rounded-md border p-4">
        <Editor />
      </ScrollArea>
    </main>
  );
}
