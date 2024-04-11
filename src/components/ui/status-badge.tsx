import { $Enums } from "@prisma/client";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

interface StatusBadge {
  status: $Enums.Status;
}

const statusBadgeVariants = cva(
  "font-semibold px-4 py-1 font-sans tracking-wide text-xs capitalize rounded-full border",
  {
    variants: {
      variant: {
        draft: "bg-purple-100 text-purple-600 border-purple-600",
        paid: "bg-green-100 text-green-600 border-green-600",
        sent: "bg-yellow-100 text-yellow-600 border-yellow-600",
        overdue: "bg-red-100 text-red-600 border-red-600",
      },
    },
    defaultVariants: {
      variant: "draft",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof statusBadgeVariants> {}

function StatusBadge({ className, variant, ...props }: BadgeProps) {
  return (
    <div
      className={cn(statusBadgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { statusBadgeVariants, StatusBadge };
