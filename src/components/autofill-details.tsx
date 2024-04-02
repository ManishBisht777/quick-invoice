import { Button } from "@/components/ui/button";
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
  setValue: any;
  basicDetails: any;
}

export default function AutofillDetails({
  basicDetails,
  setValue,
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
                <h1
                  onClick={() => {
                    console.log(detail);

                    setValue("basicDetails.to.address.address", detail.address);
                    setValue("basicDetails.to.address.city", detail.city);
                    setValue("basicDetails.to.address.country", detail.country);
                    setValue("basicDetails.to.address.state", detail.state);
                    setValue("basicDetails.to.phoneNumber", detail.phone);
                    setValue("basicDetails.to.address.zipCode", detail.zip);
                    setValue("basicDetails.to.name", detail.name);
                  }}
                >
                  {detail.name}
                </h1>
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
