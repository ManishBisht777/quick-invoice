import BasicDetailsForm from "@/components/form/basicDetailsForm";
import { getBasicDetailsById } from "@/server/actions/basicDetails";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

interface detailsProps {
  params: {
    id: string;
  };
}

export default async function page({ params: { id } }: detailsProps) {
  const basicDetails = await getBasicDetailsById(id);

  if (basicDetails.status === "error") {
    toast.error(basicDetails.message);
  }

  if (!basicDetails.data) {
    return <div>Details not found</div>;
  }

  return (
    <div className="space-y-10 p-2">
      <div className="rounded-lg w-full flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold flex gap-1 items-center">
            <Link href="/dashboard/details">Dashboard</Link>
            <ChevronRight />
            <span className="text-hot-orange">Basic details</span>
          </h2>
          <p className="text-muted-foreground text-sm">
            Manage basic details for auto-filling invoices
          </p>
        </div>
      </div>
      <BasicDetailsForm initialValues={basicDetails.data} />
    </div>
  );
}
