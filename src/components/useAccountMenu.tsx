"use client";

import Link from "next/link";

import { SignOutButton } from "@clerk/nextjs";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { Icons } from "./ui/Icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { UserAvatar } from "./userAvatar";
interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
  // user: Pick<User, "name" | "image" | "email">;
  user: any;
}

export function UserAccountNav({ user }: UserAccountNavProps) {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar
          user={{ name: user.name || null, image: user.image || null }}
          className="h-10 w-10"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {user.name && <p className="font-medium">{user.name}</p>}
            {user.email && (
              <p className="w-[200px] truncate text-sm text-muted-foreground">
                {user.email}
              </p>
            )}
          </div>
        </div>
        <DropdownMenuSeparator />
        <Link href="/dashboard">
          <DropdownMenuItem className="cursor-pointer">
            <Icons.invoices className="mr-2 h-4 w-4" />
            <span>Dashboard</span>
          </DropdownMenuItem>
        </Link>
        <Link href="/dashboard/details">
          <DropdownMenuItem className="cursor-pointer">
            <Icons.clients className="mr-2 h-4 w-4" />
            <span>Client details</span>
          </DropdownMenuItem>
        </Link>
        <Link href="/dashboard/payments">
          <DropdownMenuItem className="cursor-pointer">
            <Icons.payments className="mr-2 h-4 w-4" />
            <span>Payment details</span>
          </DropdownMenuItem>
        </Link>

        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer"
          onSelect={(event) => {
            event.preventDefault();
          }}
        >
          <LogOut className="mr-2 h-4 w-4" />
          <SignOutButton redirectUrl="/" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
