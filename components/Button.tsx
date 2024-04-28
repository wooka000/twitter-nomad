import Link from "next/link";
import React from "react";

interface IButton {
  children: React.ReactNode;
  href: string;
}

export default function Button({ children, href }: IButton) {
  return (
    <Link href={href} legacyBehavior>
      <a className="fixed hover:bg-[#0065fc] border-0 aspect-square border-transparent transition-colors cursor-pointer  bottom-24 right-5 shadow-xl bg-[#0065fc] rounded-full w-14 flex items-center justify-center text-white">
        {children}
      </a>
    </Link>
  );
}
