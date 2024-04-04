import { getBasicDetails } from "@/server/actions/basicDetails";
import { useEffect, useState } from "react";

export default function useClientDetails() {
  const [loading, setLoading] = useState(false);
  const [basicDetails, setBasicDetails] = useState<any>([]);

  useEffect(() => {
    setLoading(true);

    getBasicDetails()
      .then((data) => {
        setBasicDetails(data);
      })
      .catch((error) => {
        console.log(error);
      });

    setLoading(false);
  }, []);

  return { loading, basicDetails };
}
