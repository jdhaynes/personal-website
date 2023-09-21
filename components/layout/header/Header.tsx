import React from "react";
import NavBar from "@/components/layout/header/NavBar";
import { NavLink } from "@/components/layout/header/NavItem";
import Logo from "@/components/layout/header/Logo";

interface Props {
  title: string;
  navLinks: NavLink[];
}

const Header: React.FC<Props> = ({ title, navLinks }: Props) => {
  return (
    <header className="flex justify-between items-center py-6 text-gray-800">
      <Logo title={title} />
      <NavBar links={navLinks}></NavBar>
    </header>
  );
};

export default Header;
