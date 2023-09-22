import React from "react";
import Logo from "@/components/layout/header/Logo";
import DesktopNav from "@/components/layout/header/DesktopNav";
import { AiOutlineMenu } from "react-icons/ai";

export interface NavLink {
  name: string;
  href: string;
}

interface Props {
  title: string;
  navLinks: NavLink[];
}

const Header: React.FC<Props> = ({ title, navLinks }: Props) => {
  return (
    <header className="flex flex-col md:items-center md:justify-between md:flex-row space-y-6 md:space-y-0">
      <div className="flex flex-row items-center justify-between">
        <Logo title={title} />
        <button className="md:hidden">
          <AiOutlineMenu className="text-4xl" />
        </button>
      </div>
      <DesktopNav links={navLinks} />
    </header>
  );
};

export default Header;
