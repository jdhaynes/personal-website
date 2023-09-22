import React from "react";
import DesktopNav from "@/components/layout/header/DesktopNav";
import MobileNav from "@/components/layout/header/MobileNav";
import { NavLink } from "@/components/layout/header/Header";

const Nav: React.FC<{ links: NavLink[] }> = ({ links }) => {
  return (
    <div>
      <DesktopNav links={links}></DesktopNav>
      <MobileNav links={links}></MobileNav>
    </div>
  );
};

export default Nav;
