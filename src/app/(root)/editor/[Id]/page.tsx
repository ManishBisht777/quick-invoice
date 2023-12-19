import Editor from "@/components/Editor";
import Modern from "@/components/templates/Modern";
import { GetTemplate, TemplateType } from "@/config/Config";
import { redirect } from "next/navigation";

interface Props {
  id: string;
}

export default function Page({ params: { Id } }: { params: { Id: string } }) {
  return (
    <main className="flex gap-4">
      <div className="w-1/2 h-screen p-6">
        <Editor />
      </div>
      <div className="w-1/2 flex justify-center">
        <Modern />
      </div>
    </main>
  );
}
