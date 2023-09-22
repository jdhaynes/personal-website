import React from "react";
import Link from "next/link";
import { NavLink } from "@/components/layout/header/Header";

const DesktopNavItem: React.FC<NavLink> = ({ name, href }: NavLink) => {
  return (
    <Link
      href={href}
      className="font-bold text-2xl md:text-xl text-gray-900 text-center"
    >
      {name}
    </Link>
  );
};

export default DesktopNavItem;
