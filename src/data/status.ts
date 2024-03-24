import { Send, NotepadTextDashed, HandCoins, Angry } from "lucide-react";

export const status = [
  {
    value: "Sent",
    label: "Sent",
    icon: Send,
  },
  {
    value: "Draft",
    label: "Draft",
    icon: NotepadTextDashed,
  },
  {
    value: "Paid",
    label: "Paid",
    icon: HandCoins,
  },
  {
    value: "Overdue",
    label: "Overdue",
    icon: Angry,
  },
];
