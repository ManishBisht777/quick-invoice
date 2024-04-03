import Editor from "@/components/Editor";

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
