import React from "react";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiJavascript,
  SiAmazonaws,
  SiNodedotjs,
} from "react-icons/si";
import { AiOutlineCode } from "react-icons/ai";
import { IconType } from "react-icons";

export const availableIcons: {
  [index: string]: IconType;
} = {
  react: SiReact,
  javascript: SiJavascript,
  typescript: SiTypescript,
  nextjs: SiNextdotjs,
  nodejs: SiNodedotjs,
  aws: SiAmazonaws,
};

const TagIcon: React.FC<{ tag: string }> = ({ tag }) => {
  if (tag in availableIcons) {
    const Icon = availableIcons[tag];
    return <Icon />;
  } else {
    return <AiOutlineCode />;
  }
};

export default TagIcon;
