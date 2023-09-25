import React from "react";
import Link from "next/link";

export interface NavLink {
  name: string;
  href: string;
}

interface Props {
  link: NavLink;
  onClick: () => void;
}

const NavbarLink: React.FC<Props> = ({ link, onClick }) => {
  return (
    <Link
      href={link.href}
      className="font-bold text-2xl md:text-xl text-gray-900 text-center"
      onClick={onClick}
    >
      {link.name}
    </Link>
  );
};

export default NavbarLink;
