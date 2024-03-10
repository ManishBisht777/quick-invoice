import { emptyTemplateProps } from "@/config/template";
import { basicDetails } from "@/types/template";
import { create } from "zustand";

interface templateStore {
  basicDetails: {
    from: basicDetails;
    to: basicDetails;
  };

  setBaiscDetails: (basicDetails: {
    from: basicDetails;
    to: basicDetails;
  }) => void;
}

export const useTemplateStore = create<templateStore>((set) => ({
  basicDetails: emptyTemplateProps.basicDetails,
  setBaiscDetails: (basicDetails) => set({ basicDetails }),
}));
