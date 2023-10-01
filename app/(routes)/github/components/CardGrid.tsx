import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const CardGrid = ({ children, className }: Props) => {
  return (
    <div className={cn("w-full m-auto grid grid-cols-12 gap-8", className)}>
      {children}
    </div>
  );
};

export default CardGrid;
