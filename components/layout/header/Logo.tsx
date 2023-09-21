import React from "react";
import Link from "next/link";

const Logo: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Link href="/">
      <div className="flex bg-material-gray text-xl font-bold py-3 px-5 rounded-lg">
        <div className="text-material-green">jackhaynes.co.uk</div>
        <div className="text-white">:</div>
        <div className="text-material-cyan">~</div>
        <div className="text-white">$</div>
        <div className="bg-white animate-cursor w-4 ml-3" />
      </div>
    </Link>
  );
};

export default Logo;
