import BasicDetailsForm from "@/components/form/basicDetailsForm";
import { getBasicDetailsById } from "@/server/actions/basicDetails";
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

  return <BasicDetailsForm initialValues={basicDetails.data} />;
}
