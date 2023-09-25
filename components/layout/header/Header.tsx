"use client";

import React, { useState } from "react";
import Logo from "@/components/layout/header/Logo";
import Navbar from "@/components/layout/header/Navbar";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink } from "@/components/layout/header/NavbarLink";

interface Props {
  title: string;
  navLinks: NavLink[];
}

const Header: React.FC<Props> = ({ title, navLinks }: Props) => {
  const [navExpanded, setNavExpanded] = useState(false);

  const toggleExpandNavHandler = () => {
    setNavExpanded((isExpanded) => {
      return !isExpanded;
    });
  };

  return (
    <header className="flex flex-col md:items-center md:justify-between md:flex-row space-y-6 md:space-y-0">
      <div className="flex flex-row items-center justify-between">
        <Logo title={title} />
        <button className="md:hidden" onClick={toggleExpandNavHandler}>
          {navExpanded && <AiOutlineClose className="text-4xl" />}
          {!navExpanded && <AiOutlineMenu className="text-4xl" />}
        </button>
      </div>
      <Navbar
        links={navLinks}
        isExpanded={navExpanded}
        onToggleExpand={toggleExpandNavHandler}
      />
    </header>
  );
};

export default Header;
