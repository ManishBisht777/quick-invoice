import { getPaymentDetails } from "@/server/actions/paymentDetails";
import { paymentDetails } from "@prisma/client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function usePaymentDetails() {
  const [loading, setLoading] = useState(false);
  const [basicDetails, setBasicDetails] = useState<paymentDetails[]>([]);
  const user = useSession().data?.user;

  useEffect(() => {
    if (!user) return;

    setLoading(true);

    getPaymentDetails()
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
