declare module "@/components/ui/badge" {
  import * as React from "react";

  export function Badge(
    props: React.HTMLAttributes<HTMLSpanElement> & {
      className?: string;
      children?: React.ReactNode;
    }
  ): JSX.Element;
}
