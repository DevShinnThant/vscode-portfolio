import React from "react";

const CardGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full m-auto grid grid-cols-12 gap-8">{children}</div>
  );
};

export default CardGrid;
