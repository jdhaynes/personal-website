import React from "react";
import { NavLink } from "@/components/layout/header/Header";
import DesktopNavItem from "@/components/layout/header/DesktopNavItem";

interface Props {
  links: NavLink[];
}

const DesktopNav: React.FC<Props> = ({ links }: Props) => {
  return (
    <nav className="flex flex-col md:flex-row md:space-x-7 space-y-2 md:space-y-0">
      {links.map((link) => (
        <DesktopNavItem {...link} />
      ))}
    </nav>
  );
};

export default DesktopNav;
