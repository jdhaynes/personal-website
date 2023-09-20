import React from "react";
import Link from "next/link";

export interface NavLink {
  name: string;
  href: string;
}

const NavItem: React.FC<NavLink> = ({ name, href }: NavLink) => {
  return <Link href={href}>{name}</Link>;
};

export default NavItem;
