import React from "react";

const Logo: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="flex bg-material-gray text-xl font-bold py-2 px-4 rounded-md">
      <div className="text-material-green">jackhaynes.co.uk</div>
      <div className="text-white">:</div>
      <div className="text-material-cyan">~</div>
      <div className="text-white">$</div>
      <div className="bg-white animate-cursor w-5 ml-3" />
    </div>
  );
};

export default Logo;
