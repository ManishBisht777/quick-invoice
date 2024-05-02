import Editor from "@/components/Editor";
import { auth } from "@clerk/nextjs/server";

interface Props {
  params: {
    Id: string;
  };
}

export default function Page({ params: { Id } }: Props) {
  const { userId } = auth();

  return (
    <main className="">
      <div className="flex justify-center">
        <Editor id={Id} userId={userId} />
      </div>
    </main>
  );
}
