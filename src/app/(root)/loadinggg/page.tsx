import Image from "next/image";

export default function index() {
  return (
    <div className="flex justify-center w-full h-full p-10 items-center">
      <Image src="/images/loading.svg" alt="loading" width={400} height={400} />
    </div>
  );
}
