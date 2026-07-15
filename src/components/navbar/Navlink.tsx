"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  label: string;
};

export default function Navlink({ href, label }: Props) {
  const pathName = usePathname();
  return (
    <li className="flex items-center justify-center">
      <Link className={pathName === href ? "text-teal-400" : ""} href={href}>
        {label}
      </Link>
    </li>
  );
}
