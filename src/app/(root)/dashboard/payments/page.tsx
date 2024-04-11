import { ChevronRight } from "lucide-react";

export default function page() {
  return (
    <div>
      <div className="rounded-lg w-full flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold font-serif flex gap-1 items-center">
            Dashboard <ChevronRight />
            <span className="text-hot-orange">Payment details</span>
          </h2>
          <p className="text-muted-foreground text-sm">
            Manage all your payment details for autofill in invoice
          </p>
        </div>
      </div>
    </div>
  );
}
