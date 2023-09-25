import React from "react";
import TagIcon from "@/components/blog/TagIcon";

const TagBadge: React.FC<{ tag: string }> = ({ tag }) => {
  return (
    <span className="flex flex-row bg-red-200 text-red-pastel-dark py-1 px-2 items-center space-x-2">
      <div>
        <TagIcon tag={tag} />
      </div>
      <div className="font-bold">{tag}</div>
    </span>
  );
};

export default TagBadge;
