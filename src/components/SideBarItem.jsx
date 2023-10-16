import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function SideBarItem({ icon: Icon, label, active, href }) {
  return (
    <Link
      href={href}
      className={twMerge(
        "flex flex-row items-center h-auto w-full gap-x-4 text-base font-medium cursor-pointer hover:text-white text-neutral-400 transition",
        active && "text-white",
      )}
    >
      <Icon size={20} />
      <p className="truncate w-full">{label}</p>
    </Link>
  );
}
