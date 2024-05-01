import { getBasicDetails } from "@/server/actions/basicDetails";
import { basicInvoiceDetails } from "@prisma/client";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function useClientDetails() {
  const [loading, setLoading] = useState(false);
  const [basicDetails, setBasicDetails] = useState<basicInvoiceDetails[]>([]);

  useEffect(() => {
    // if (!user) return;

    setLoading(true);

    getBasicDetails()
      .then((data) => {
        if (data.status === "success" && data.data) {
          setBasicDetails(data.data);
        } else {
          toast.error(data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    setLoading(false);
  }, []);

  return { loading, basicDetails };
}
