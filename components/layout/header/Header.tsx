import React from "react";
import NavBar from "@/components/layout/header/NavBar";
import { NavLink } from "@/components/layout/header/NavItem";

interface Props {
  title: string;
  navLinks: NavLink[];
}

const Header: React.FC<Props> = ({ title, navLinks }: Props) => {
  return (
      <header>
        <div>{title}</div>
        <NavBar links={navLinks}></NavBar>
      </header>
  );
};

export default Header;
