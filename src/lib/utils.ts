import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | null) {
  if (!date) return "";

  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function calculateHourlyAmount(hoursWorked: string, hourlyRate: number) {
  const [hours, minutes] = hoursWorked.split(":").map(Number);
  const totalHours = hours + (minutes ? minutes / 60 : 0);
  const totalAmount = totalHours * hourlyRate;

  return totalAmount;
}
