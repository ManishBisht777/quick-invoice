"use client";

import { AllTemplatesForServer } from "@/lib/templates/util";
import { useSearchParams } from "next/navigation";
import React from "react";

interface Props {
  params: { id: string };
}

export default function Page({ params: { id } }: Props) {
  const params = useSearchParams();
  const data = params.get("data");

  if (!data || !id) return null;

  const initialValue = JSON.parse(data);

  const Template = AllTemplatesForServer[id]?.component;

  return <Template initialValue={initialValue} />;
}
