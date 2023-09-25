import React from "react";
import { PostMetadataWithSlug } from "@/lib/blog";
import Link from "next/link";
import TagBadge from "@/components/blog/TagBadge";

const PostListItem: React.FC<{ post: PostMetadataWithSlug }> = ({ post }) => {
  return (
    <div>
      <div>{post.date.toDateString()}</div>
      <div className="flex flex-row justify-between">
        <Link href={`blog/${post.slug}`} className="font-bold text-3xl">
          {post.title}
        </Link>
        <div className="flex space-x-2">
          {post.tags.map((tag) => (
            <TagBadge tag={tag} />
          ))}
        </div>
      </div>
      <div>{post.subtitle}</div>
    </div>
  );
};

export default PostListItem;
