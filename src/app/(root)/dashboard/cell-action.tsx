"use client";

import { AlertModal } from "@/components/modal/AlertModal";
import { EditInvoiceStatus } from "@/components/modal/EditInvoiceStatus";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deleteInvoice } from "@/server/actions/invoice";
import { Invoice } from "@prisma/client";
import { MoreHorizontal, MoreVertical, Pencil, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

interface CellActionProps {
  data: Invoice;
}

export default function CellAction({ data }: CellActionProps) {
  const [deleteModal, setDeleteModal] = useState(false);
  const [editStatusModal, setEditStatusModal] = useState(false);

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onConfirm = async () => {
    setLoading(true);
    try {
      const response = await deleteInvoice(data.id);
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
      <EditInvoiceStatus
        data={data}
        isOpen={editStatusModal}
        onClose={setEditStatusModal}
      />
      <div className="flex justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <MoreVertical className="h-6 w-6" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuLabel>Invoice options</DropdownMenuLabel>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => setDeleteModal(true)}
            >
              <Trash className="w-4 h-4 mr-2" />
              Delete invoice
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => setEditStatusModal(true)}
            >
              <Pencil className="w-4 h-4 mr-2" /> Edit Status
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}
