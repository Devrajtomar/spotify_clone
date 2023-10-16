import { twMerge } from "tailwind-merge";

export default ({ children, className }) => {
  return (
    <div
      className={twMerge("bg-neutral-900 rounded-lg h-fit w-full", className)}
    >
      {children}
    </div>
  );
};
