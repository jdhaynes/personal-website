import React from "react";
import NavItem, { NavLink } from "@/components/layout/header/NavItem";

interface Props {
  links: NavLink[];
}

const NavBar: React.FC<Props> = ({ links }: Props) => {
  return (
    <div>
      {links.map((link) => (
        <NavItem {...link} />
      ))}
    </div>
  );
};

export default NavBar;
