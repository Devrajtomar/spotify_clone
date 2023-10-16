import React from "react";
import { twMerge } from "tailwind-merge";
const Icon = ({ children, onClick, className }) => {
  return (
    <button
      className={twMerge(
        "rounded-full flex items-center justify-center hover:opacity-75",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Icon;
