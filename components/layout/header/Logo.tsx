import React from "react";
import Link from "next/link";

const Logo: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Link href="/">
      <div className="flex bg-material-gray text-xl font-bold py-3 px-4 rounded-lg drop-shadow-xl shadow-gray-600">
        <div className="text-material-green hidden sm:inline">jackhaynes</div>
        <div className="text-white">:</div>
        <div className="text-material-cyan">~</div>
        <div className="text-white">$</div>
        <div className="bg-white animate-cursor w-3 ml-3" />
      </div>
    </Link>
  );
};

export default Logo;
