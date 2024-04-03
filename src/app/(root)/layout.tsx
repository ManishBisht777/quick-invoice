import Navbar from "@/components/layout/navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function layout({ children }: LayoutProps) {
  return (
    <main className="md:container px-4">
      <Navbar />
      <section>{children}</section>
    </main>
  );
}
