"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deleteBasicDetails } from "@/server/actions/basicDetails";
import { MoreVertical, Pencil, Trash } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { AlertModal } from "./modal/AlertModal";
import { useRouter } from "next/navigation";

interface BasicDetailsActionProps {
  id: string;
}

export default function BasicDetailsAction({ id }: BasicDetailsActionProps) {
  const [deleteModal, setDeleteModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const onConfirm = async () => {
    setLoading(true);
    try {
      const response = await deleteBasicDetails(id);
      if ("message" in response) {
        toast.error(response.message);
      } else {
        toast.success("Invoice Deleted successfully");
        router.refresh();
        setDeleteModal(false);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error deleting invoice");
    }
    setLoading(false);
  };

  return (
    <>
      <AlertModal
        isOpen={deleteModal}
        onClose={() => setDeleteModal(false)}
        onConfirm={onConfirm}
        loading={loading}
      />
      <div className="absolute top-4 right-4 flex gap-2">
        <div className="flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="cursor-pointer">
              <MoreVertical className="h-6 w-6" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center">
              <DropdownMenuItem className="cursor-pointer ">
                <Link
                  className="flex items-center"
                  href={`/dashboard/details/${id}`}
                >
                  <Pencil className="w-4 h-4 mr-2" /> Edit Details
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => setDeleteModal(true)}
              >
                <Trash className="w-4 h-4 mr-2" />
                Delete details
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
}
