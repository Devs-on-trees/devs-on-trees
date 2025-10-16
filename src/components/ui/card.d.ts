declare module "@/components/ui/card" {
  import * as React from "react";

  export function Card(
    props: React.HTMLAttributes<HTMLDivElement> & { className?: string }
  ): JSX.Element;

  export function CardHeader(
    props: React.HTMLAttributes<HTMLDivElement> & { className?: string }
  ): JSX.Element;

  export function CardTitle(
    props: React.HTMLAttributes<HTMLHeadingElement> & { className?: string }
  ): JSX.Element;

  export function CardContent(
    props: React.HTMLAttributes<HTMLDivElement> & { className?: string }
  ): JSX.Element;
}
