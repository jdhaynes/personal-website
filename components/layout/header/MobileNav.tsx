"use client";

import React, { useState } from "react";
import { NavLink } from "@/components/layout/header/Header";
import { AiOutlineMenu } from "react-icons/ai";
import DesktopNavItem from "@/components/layout/header/DesktopNavItem";

const MobileNav: React.FC<{ links: NavLink[] }> = ({ links }) => {
  const [showNav, setShowNav] = useState(false);

  const onToggleShow = () => {
    setShowNav((currentShowNav) => {
      return !currentShowNav;
    });
  };

  return (
    <div className="sm:hidden">
      <button onClick={onToggleShow}>
        <AiOutlineMenu className="text-4xl" />
      </button>
      <nav>
        {links.map((link) => (
          <DesktopNavItem {...link} />
        ))}
      </nav>
    </div>
  );
};

export default MobileNav;
