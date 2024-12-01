import Modern from "@/components/templates/Modern";
import React from "react";

export type TemplateType = "modern" | "classic" | "fancy";

export function GetTemplate(id: TemplateType) {
  let template;

  switch (id) {
    case "modern":
      template = <Modern />;
      break;

    default:
      template = <Modern />;
      break;
  }

  return template;
}

// test commit
