import React from "react";
import TagBadge from "@/components/blog/TagBadge";
import Link from "next/link";

const TagsList: React.FC<{ tags: string[] }> = ({ tags }) => {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-2">
      {tags.map((tag) => (
        <li className="w-fit">
          <Link href={`tags/${tag}`}>
            <TagBadge tag={tag} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TagsList;
