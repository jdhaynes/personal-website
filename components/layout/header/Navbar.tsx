import React from "react";
import NavbarLink, { NavLink } from "@/components/layout/header/NavbarLink";

interface Props {
  links: NavLink[];
  isExpanded: boolean;
  onToggleExpand: () => void;
}

const Navbar: React.FC<Props> = ({ links, isExpanded, onToggleExpand }) => {
  const hideClass = isExpanded ? "" : "hidden";

  return (
    <nav
      className={`flex flex-col md:flex-row md:space-x-7 space-y-2 md:space-y-0 ${hideClass} md:block`}
    >
      {links.map((link) => (
        <NavbarLink link={link} onClick={onToggleExpand} />
      ))}
    </nav>
  );
};

export default Navbar;
