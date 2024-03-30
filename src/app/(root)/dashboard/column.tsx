"use client";

import { Badge } from "@/components/ui/badge";
import { $Enums, Invoice } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { items } from "@/types/template";
import CellAction from "./cell-action";

export const invoiceColumns: ColumnDef<Invoice>[] = [
  //   {
  //     accessorKey: "template",
  //     header: "Template",
  //     cell: ({ row }) => {
  //       const templateImage: string = AllTemplates[row.original.template].image;

  //       return (
  //         <div className="w-20">
  //           <img
  //             src={templateImage.toLocaleLowerCase()}
  //             alt={row.original.template}
  //             className="object-cover"
  //           />
  //         </div>
  //       );
  //     },
  //   },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "content",
    header: "Total Amount",
    cell: ({ row }) => {
      const data = JSON.parse(row.original.content);
      const totalAmount = data.items.reduce(
        (acc: number, item: items) => acc + item.price * item.quantity,
        0
      );
      return <span>{totalAmount}</span>;
    },
  },

  {
    accessorKey: "template",
    header: "Template",
  },
  {
    accessorKey: "status",
    header: () => "Status",
    cell: ({ row }) => {
      if (row.original.status === $Enums.Status.Sent) {
        return <Badge>Sent</Badge>;
      } else if (row.original.status === $Enums.Status.Paid) {
        return <Badge variant="secondary">Paid</Badge>;
      } else if (row.original.status === $Enums.Status.Draft) {
        return <Badge variant="outline">Draft</Badge>;
      } else {
        return <Badge variant="destructive">Draft</Badge>;
      }
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Created At
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="ml-6">
          {new Date(row.original.createdAt).toLocaleDateString()}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
