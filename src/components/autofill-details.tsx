import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface AutofillDetailsProps {
  form: any;
  basicDetails: any;
}

export default function AutofillDetails({
  basicDetails,
  form,
}: AutofillDetailsProps) {
  return (
    <Sheet>
      <SheetTrigger>
        <Button type="button" className="w-fit">
          Autofill from saved details
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-3/12">
        <SheetHeader>
          <SheetTitle>Saved Details</SheetTitle>
          <SheetDescription>
            Autofill the form with your saved details
          </SheetDescription>
        </SheetHeader>
        <div className="">
          {basicDetails.map((detail: any) => {
            return (
              <div key={detail.id} className="">
                <h1>{detail.name}</h1>
              </div>
            );
          })}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
